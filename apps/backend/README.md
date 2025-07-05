# GrowthProAI Mini Local Business Dashboard — Backend

This is the backend API for the Mini Local Business Dashboard assignment. It simulates local business Google data and AI-generated SEO headlines for frontend consumption.

## Features
- **POST `/business-data`**: Returns simulated rating, reviews, and an AI-style SEO headline for a business.
- **GET `/regenerate-headline`**: Returns a new, randomly generated SEO headline for the business.
- **No database required**: All data is simulated in-memory.

---

## Setup & Run

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start the server:**
   ```bash
   npm start
   ```
   The server runs by default on [http://localhost:4000](http://localhost:4000)

---

## API Endpoints

### 1. `POST /business-data`
- **Description:** Returns simulated business data for a given name and location.
- **Body:**
  ```json
  {
    "name": "Cake & Co",
    "location": "Mumbai"
  }
  ```
- **Response:**
  ```json
  {
    "rating": 4.3,
    "reviews": 127,
    "headline": "Why Cake & Co is Mumbai's Sweetest Spot in 2025"
  }
  ```

### 2. `GET /regenerate-headline?name=...&location=...`
- **Description:** Returns a new AI-style SEO headline for the given business.
- **Query Params:**
  - `name` (string, required)
  - `location` (string, required)
- **Response:**
  ```json
  {
    "headline": "Top Reasons to Visit Cake & Co in Mumbai Today"
  }
  ```

---

## Notes
- CORS is enabled for all origins (for development).
- No authentication required.
- For any issues, please contact the project maintainer.
