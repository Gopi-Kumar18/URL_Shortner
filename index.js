
const express = require("express");
const path = require("path");

const cors = require("cors");
const { connectToMongo } = require("./connection");

const urlRoute = require("./routes/url");
const URL = require("./models/url");
const fetchShortID = require("./models/fetchShortID");

const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;


connectToMongo(process.env.MONGODB_URI)
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

// This will render views/index.ejs
app.get('/', (req, res) => {
    res.render('index'); 
});

app.get('/:shortId',fetchShortID);


// API route for URL shortening
app.use("/url", urlRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

