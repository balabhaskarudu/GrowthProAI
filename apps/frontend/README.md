# React + Vite

# GrowthProAI Mini Local Business Dashboard — Frontend

This is the React frontend for the Mini Local Business Dashboard assignment. It provides a clean, responsive UI to interact with the backend API, display simulated business data, and regenerate SEO headlines.

## Features
- **Input Form:** Enter a business name and location.
- **Display Card:** Shows simulated Google Rating, number of reviews, and an AI-generated SEO headline.
- **Regenerate Headline:** Fetch a new headline from the backend with a single click.
- **Responsive Design:** Clean, mobile-friendly UI built with Tailwind CSS.
- **Loading States:** Spinners provide visual feedback during API calls.
- **Error Handling:** Displays clear error messages.

---

## Setup & Run

1. **Navigate to the frontend directory:**
   ```bash
   cd apps/frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   The app will be available at [http://localhost:5173](http://localhost:5173) (or another port if 5173 is busy).

---

## Important Notes
- Ensure the backend server is running on `http://localhost:4000` for the API requests to work.
- The project was bootstrapped with Vite for a fast development experience.
- All styling is done using Tailwind CSS utility classes.

