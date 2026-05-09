package main

import (
	"context"
	"fmt"
	"log"
	"math/rand"
	"net/http"
	"os"
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/jackc/pgx/v5/pgxpool"
	"github.com/joho/godotenv"
)

type Booking struct {
	ID            int       `json:"id"`
	Reference     string    `json:"reference"`
	Service       string    `json:"service" binding:"required"`
	Artist        string    `json:"artist" binding:"required"`
	BookingTime   string    `json:"booking_time" binding:"required"`
	CustomerName  string    `json:"customer_name" binding:"required"`
	CustomerPhone string    `json:"customer_phone" binding:"required"`
	CustomerEmail string    `json:"customer_email"`
	CreatedAt     time.Time `json:"created_at"`
}

var dbPool *pgxpool.Pool

func main() {
	// Load environment variables
	if err := godotenv.Load(); err != nil {
		log.Println("No .env file found, using system environment variables")
	}

	// Database connection
	var err error
	dbPool, err = pgxpool.New(context.Background(), os.Getenv("DATABASE_URL"))
	if err != nil {
		log.Fatalf("Unable to connect to database: %v\n", err)
	}
	defer dbPool.Close()

	// Run migrations
	if err := runMigrations(); err != nil {
		log.Fatalf("Unable to run migrations: %v\n", err)
	}

	// Router setup
	r := gin.Default()

	// CORS configuration
	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:5173", "http://localhost:5174"},
		AllowMethods:     []string{"POST", "GET", "OPTIONS"},
		AllowHeaders:     []string{"Origin", "Content-Type"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
		MaxAge:           12 * time.Hour,
	}))

	// API Routes
	api := r.Group("/api")
	{
		api.POST("/bookings", createBooking)
		api.GET("/bookings", getBookings)
	}

	// Health check
	r.GET("/health", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{"status": "healthy"})
	})

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	log.Printf("Server starting on port %s", port)
	r.Run(":" + port)
}

func runMigrations() error {
	query := `
	CREATE TABLE IF NOT EXISTS bookings (
		id SERIAL PRIMARY KEY,
		reference VARCHAR(10) UNIQUE NOT NULL,
		service VARCHAR(100) NOT NULL,
		artist VARCHAR(100) NOT NULL,
		booking_time VARCHAR(50) NOT NULL,
		customer_name VARCHAR(255) NOT NULL,
		customer_phone VARCHAR(50) NOT NULL,
		customer_email VARCHAR(255),
		created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
	);`
	_, err := dbPool.Exec(context.Background(), query)
	return err
}

func createBooking(c *gin.Context) {
	var booking Booking
	if err := c.ShouldBindJSON(&booking); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// Generate reference
	booking.Reference = fmt.Sprintf("MG-%d", 1000+rand.Intn(9000))

	query := `
	INSERT INTO bookings (reference, service, artist, booking_time, customer_name, customer_phone, customer_email)
	VALUES ($1, $2, $3, $4, $5, $6, $7)
	RETURNING id, created_at`

	err := dbPool.QueryRow(context.Background(), query,
		booking.Reference,
		booking.Service,
		booking.Artist,
		booking.BookingTime,
		booking.CustomerName,
		booking.CustomerPhone,
		booking.CustomerEmail,
	).Scan(&booking.ID, &booking.CreatedAt)

	if err != nil {
		log.Printf("Error inserting booking: %v\n", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create booking"})
		return
	}

	c.JSON(http.StatusCreated, booking)
}

func getBookings(c *gin.Context) {
	rows, err := dbPool.Query(context.Background(), "SELECT id, reference, service, artist, booking_time, customer_name, customer_phone, customer_email, created_at FROM bookings ORDER BY created_at DESC")
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to fetch bookings"})
		return
	}
	defer rows.Close()

	var bookings []Booking
	for rows.Next() {
		var b Booking
		err := rows.Scan(&b.ID, &b.Reference, &b.Service, &b.Artist, &b.BookingTime, &b.CustomerName, &b.CustomerPhone, &b.CustomerEmail, &b.CreatedAt)
		if err != nil {
			log.Printf("Error scanning booking: %v\n", err)
			continue
		}
		bookings = append(bookings, b)
	}

	c.JSON(http.StatusOK, bookings)
}
