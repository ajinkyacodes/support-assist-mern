const express = require("express");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const PORT = process.env.PORT || 5000;

const app = express();

// Express Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to the Support Assist API" });
});

// Routes
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler); //Middleware for errors

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
