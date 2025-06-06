
const express = require("express");
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");

const { connectToMongo } = require("./connection");
const urlRoute = require("./routes/url");
const fetchShortID = require("./models/fetchShortID");
const contactRoute = require('./routes/url');


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
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/styles', express.static(path.join(__dirname,'styles'))); 

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// This will render views/index.ejs
app.get('/', (req, res) => {
    res.render('index'); 
});

app.get('/privacy-policy', (req, res) => {
  res.render('privacy-policy');
});

app.get('/terms-and-conditions', (req, res) => {
  res.render('terms-and-cons');
});

app.get('/aboutus', (req, res) => {
  res.render('aboutus');
});

app.get('/contactus', (req, res) => {
  res.render('contactus');
});

app.get('/faqs', (req, res) => {
  res.render('faqs');
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.get('/signup', (req, res) => {
  res.render('signup');
});

app.get('/settings', (req, res) => {
  res.render('settings');
});

app.get('/logout', (req, res) => {
  res.render('logout');
});

app.get('/:shortId',fetchShortID);

// API route for URL shortening
app.use("/url", urlRoute);
app.use('/', contactRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

