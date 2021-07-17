import express from "express";
import cors from "cors";
import dotenv from "dotenv";
//import bodyParser from "body-parser";
import mongoose from "mongoose";
import Routes from "./routes/routes.js";

dotenv.config();
const app = express();
app.use(express.json());
// app.use(bodyParser.json({extended: true }));
// app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());

app.use("/user", Routes);

const MONGO_URL = process.env.MONGODB_URL;
mongoose
  .connect(MONGO_URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected");
  })
  .catch((error) => console.log(`${error} did not connect`));
mongoose.set("useFindAndModify", false);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`server is running on port:- ${PORT}`);
});
