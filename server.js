const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan")
const cookieParser = require("cookie-parser")
const connectDB = require('./database/db')
const authRoutes = require("./routes/auth.route")
const catagoryRoutes = require('./routes/catagory.route')

// middlewares
app.use(cors());
//to parse incoming data to express server
app.use(express.json());
app.use(cookieParser())
//for devlopment use only
app.use(morgan("dev"));
app.use("/api/auth", authRoutes);
app.use('/api/catagory', catagoryRoutes)


// creating connection with database
connectDB();

// port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})