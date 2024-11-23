const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Enable CORS (only allow your frontend in production)
app.use(cors({ origin: 'https://your-frontend-domain.com' }));

// Secure AI Movie Database
const aiMovieDatabase = {
    "fiction": {
        title: "Alien",
        description: "Comprehensive documentary about artificial intelligence revolution",
        url: "https://www.youtube.com/embed/k5ahSzsMluI"
    },
    "real movies": {
        title: "Harry Potter and Volcano Witch",
        description: "Documentary about the current state of AI",
        url: "https://www.youtube.com/embed/fGKAJrbiMJI"
    },
    "scary": {
        title: "Harry Potter and The Founding of Hogwarts",
        description: "Exploring the future possibilities of artificial intelligence",
        url: "https://www.youtube.com/embed/xr1-ToY24Cg"
    },
    "other": {
        title: "Machine Learning Revolution",
        description: "Deep dive into machine learning technologies",
        url: "https://www.youtube.com/embed/5dZ_lvDgevk"
    }
};

// API to get movie based on query
app.get('/api/movie', (req, res) => {
    const query = req.query.q?.toLowerCase();
    if (!query) {
        return res.status(400).json({ error: 'Missing search query' });
    }

    // Find matching movie
    const movie = Object.keys(aiMovieDatabase).find(key => query.includes(key));
    if (movie) {
        res.json(aiMovieDatabase[movie]);
    } else {
        res.status(404).json({ error: 'No movie found' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
