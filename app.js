const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const employeeRoutes = require("./routes/employeeRoutes");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static Files
app.use(express.static("public"));

// EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/employeeDB")
.then(() => {
    console.log("MongoDB Connected");
})
.catch((err) => {
    console.log(err);
});

// Routes
app.use("/", employeeRoutes);

// Health Check
app.get("/health", (req, res) => {
    res.json({
        status: "UP",
        message: "Application running successfully"
    });
});

// Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});