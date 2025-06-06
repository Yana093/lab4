const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// API маршрут
app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from the backend!" });
});

// Віддаємо React-збірку
app.use(express.static(path.join(__dirname, 'build')));

// SPA: завжди index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Запуск сервера
app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});