
const express = require("express");
const path = require("path");
const cors = require("cors");
const { connectToMongo } = require("./connection");
const urlRoute = require("./routes/url");
const URL = require("./models/url");
const shareRoute = require("./routes/share");

const app = express();
const PORT = 8000;

// Connect to MongoDB
connectToMongo('mongodb://shortner:shortUrl.shortner%26%3F@localhost:27017/short-url?authSource=admin')
    .then(() => {
        console.log("MongoDB connected Successfully...");
    })
    .catch((err) => {
        console.error('MongoDB connection error:', err);
    });

// Middleware
app.use(cors());
app.use(express.json());
app.use('/styles', express.static(path.join(__dirname,'styles'))); 

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Route to render landing page
app.get('/', (req, res) => {
    res.render('index'); // This will render views/index.ejs
});

// API route for URL shortening
app.use("/url", urlRoute);


// Redirect route for shortened URLs
app.get('/:shortId', async (req, res) => {
    const shortId = req.params.shortId;
    console.log(`Received shortId: ${shortId}`);

    try {
        const entry = await URL.findOneAndUpdate(
            { shortId },
            {
                $push: {
                    visitHistory: { timestamp: Date.now() },
                },
            },
            { new: true }
        );

        console.log('Database entry:', entry);

        if (!entry) {
            return res.status(404).send('URL not found');
        }

        res.redirect(entry.redirectURL);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

