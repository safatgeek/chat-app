import express from "express";
import dotenv from "dotenv";
// import authRoutes from "./routes/auth.routes.js";
import router from "./routes/auth.routes.js";

const app = express();

dotenv.config();
const PORT = process.env.PORTT || 5000;

app.get("/", (req,res) => {
    res.send("Hello world !!!!!!!!!!!!")
})

app.use("/api/auth", router)

app.listen(PORT, () => console.log(`Server Running on port ${PORT}`))