const express = require ("express")
const app = express()
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")

// import routes
const authRoute = require("./routes/auth")
dotenv.config();

// connect to db
mongoose.connect(process.env.DB_CONNECT,{ useUnifiedTopology: true },()=>{
    console.log("conneted to db!")
} )


//midllewares
app.use(express.json())
//routes middlewares
app.use("/api/user", authRoute)




app.listen(3000, ()=> console.log("Server running"))