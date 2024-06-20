import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import userRouter from "./routes/userRoute.js";
import foodRouter from "./routes/foodRoute.js";
import cartRouter from "./routes/cartRoute.js";
import 'dotenv/config'


// app config
const app = express();
const port = 4000;

//middlewares
app.use(express.json()); //req to front to back that will be parcsed using json
app.use(cors()); //access backen from front end

// db connnection
connectDB();


//api endpoints
app.use("/api/user", userRouter);
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/cart", cartRouter)


app.get("/", (req, res) => res.status(200).send("API is running"));

app.listen(port, (req, res) => {
  console.log(`Server is running on port ${port}`);
});


// mongodb+srv://ssahillx:<password>@cluster0.bsoxdxq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0