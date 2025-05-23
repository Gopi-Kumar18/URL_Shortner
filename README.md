📌 URL Shortener Web App

A simple and elegant URL shortener built using **Node.js**, **Express.js**, **EJS**, and **CSS**. This web application allows users to convert long URLs into short, shareable links.

---

## 📁 Project Structure

```
URL_SHORTNER/
├── controllers/
│   └── url.js
├── models/
│   └── url.js
├── node_modules/
├── routes/
│   └── url.js
├── styles/
│   ├── footer.css
│   └── style-1.css
├── views/
│   ├── partials/
│   └── index.ejs
├── connection.js
├── github.png
├── index.js
├── package-lock.json
├── package.json
└── README.md
```

```

---

## ✅ Features

* Shortens long URLs
* Generates unique short links
* Redirects short URLs to original URLs
* Uses EJS for server-side rendering
* Simple and responsive CSS interface

---

## ⚙️ Prerequisites

Make sure the following are installed:

* [Node.js](https://nodejs.org/) (v16 or higher recommended)
* [MongoDB](https://www.mongodb.com/) (if using MongoDB as your backend)

---

## 🛠️ Installation

1. **Clone the repository**

   ```bash
   git clone  https://github.com/Gopi-Kumar18/URL_Shortner.git
   cd url-shortener
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure environment variables**

   Create a `.env` file in the root directory:

   ```env
   PORT=8000
   MONGODB_URI=mongodb://<username>:<password>@<host>:<port>/<database>?authSource=admin
   BASE_URL=http://localhost:8000 (Optional)
   ```

4. **Start MongoDB (if using locally)**
   Make sure your MongoDB server is running:

---

## ▶️ Running the Project

Start the app using:

```bash
node index.js
```

Or with nodemon for auto-reloading:

```bash
nodemon index.js
```

Visit the app in your browser at:

```
http://localhost:8000
```

---

## 🌐 Usage

1. Enter a long URL in the input field.
2. Click "Shorten".
3. Copy the generated short URL.
4. Use it to redirect to the original link.

---

## 📦 Dependencies

* express
* mongoose 
* ejs
* dotenv
* shortid or nanoid (for unique short links)
* nodemon


---

Project Pics:-

1.)HomePage
![Screenshot 2025-05-23 171037](https://github.com/user-attachments/assets/b8718b20-067f-47e4-868c-e87983d12261)

2.)Conversion and Sharing Page
![Screenshot 2025-05-23 171019](https://github.com/user-attachments/assets/77646e22-44ff-4abb-99cd-6c08c8a03aa6)



##  💻 Developed By:

[Gopi Kumar] – Student & Developer
Feel free to reach out with suggestions or contributions.
