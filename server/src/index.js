import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./routes/users.js";
import{recipesRouter} from "./routes/recipes.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);

mongoose.connect("mongodb+srv://mohanishdesale:Kapil619@recipes.3rj1tqb.mongodb.net/?retryWrites=true&w=majority&appName=Recipes");


app.listen(3001, () => console.log("SERVER STARTED")); 


// I hope this commit works