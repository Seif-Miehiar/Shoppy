const express = require("express");
const app = express();
const connectDB = require('./database/db')

connectDB();

// port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})