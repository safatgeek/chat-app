import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./db/connectToMongodb.js";
import messageRoutes from "./routes/message.routes.js";
import cookieParser from "cookie-parser";
import protectRoute from "./middleware/protectRoute.js";

const app = express();

dotenv.config();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cookieParser());

// app.get("/", (req,res) => {
//     res.send("Hello world !!!!!!!!!!!!")
// })

app.use("/api/auth", authRoutes)
app.use("/api/messages",protectRoute, messageRoutes)


app.listen(PORT, () => {
    connectToMongoDB()
    console.log(`Server Running on port ${PORT}`)

})