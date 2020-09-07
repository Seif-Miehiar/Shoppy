const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan")
const connectDB = require('./database/db')
const authRoutes = require("./routes/auth")

// middlewares
app.use(cors());
//to parse incoming data to express server
app.use(express.json());
//for devlopment use only
app.use(morgan("dev"));
app.use("/api/auth", authRoutes);


// creating connection with database
connectDB();

// port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})