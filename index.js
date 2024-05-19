import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cros from "cors";
import route from "./routes/userRoute.js";

const app = express();
app.use(bodyParser.json());
app.use(cros());
dotenv.config();

const PORT = process.env?.PORT;
const URL = "mongodb+srv://rahulbanik98:rahulbanik98@crud-cluster.2yg2jbj.mongodb.net/crudApp?retryWrites=true&w=majority&appName=CRUD-Cluster";

mongoose.connect("mongodb+srv://rahulbanik98:rahulbanik98@crud-cluster.2yg2jbj.mongodb.net/users?retryWrites=true&w=majority&appName=CRUD-Cluster").then(() => {
    console.log("DB connected successfully");
    app.listen(8000, () => {
      console.log(`Server is running on PORT: ${PORT}`);
    });

})
  .catch((error) => console.log("error: ", error));

app.use("/api", route);
