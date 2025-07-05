// server.js
// GrowthProAI Mini Local Business Dashboard Backend
// -----------------------------------------------
// Provides endpoints to simulate Google Business data and SEO headlines.

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;

// CORS: Allow all origins for development
app.use(cors({ origin: '*', credentials: true }));
app.use(express.json());

// Static pool of AI-style SEO headlines
const HEADLINES = [
  "Why {name} is {location}'s Sweetest Spot in 2025",
  "Discover the Magic of {name} in {location}",
  "How {name} Became {location}'s Top Choice for Locals",
  "{name}: The Ultimate {location} Experience",
  "Top Reasons to Visit {name} in {location} Today",
  "{name} is Redefining Quality in {location}",
  "Why Everyone in {location} Loves {name}",
  "{name}: Where Tradition Meets Innovation in {location}",
  "Explore {name}'s Secret Menu in {location}",
  "How {name} is Transforming {location} in 2025",
  "{name}: The Heart of {location}'s Community",
  "{name} – A Must-Visit in {location} This Year",
  "Experience Excellence at {name}, {location}"
];

// Helper: Generate a random float between min and max, fixed to 1 decimal
const randomRating = () => (Math.random() * 1 + 4).toFixed(1);
// Helper: Generate a random review count (50–250)
const randomReviews = () => Math.floor(Math.random() * 200) + 50;
// Helper: Pick a random headline and fill in name/location
const generateHeadline = (name, location) => {
  const idx = Math.floor(Math.random() * HEADLINES.length);
  return HEADLINES[idx]
    .replace('{name}', name)
    .replace('{location}', location);
};

// POST /business-data — Simulate business data
app.post('/business-data', (req, res) => {
  const { name, location } = req.body;
  if (!name || !location) {
    return res.status(400).json({ error: 'Missing business name or location.' });
  }
  const rating = Number(randomRating());
  const reviews = randomReviews();
  const headline = generateHeadline(name, location);
  res.json({ rating, reviews, headline });
});

// GET /regenerate-headline — Return a new headline
app.get('/regenerate-headline', (req, res) => {
  const { name, location } = req.query;
  if (!name || !location) {
    return res.status(400).json({ error: 'Missing business name or location.' });
  }
  const headline = generateHeadline(name, location);
  res.json({ headline });
});

// Root endpoint for health check
app.get('/', (req, res) => {
  res.send('GrowthProAI Mini Dashboard Backend is running.');
});

// Start server
app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
});