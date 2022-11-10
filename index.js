import express from "express";

import mainRoutes from "./routes/main.js";
import userRoutes from "./routes/userRoutes.js"

//Intialize the app with express
const app = express();

//middleware
app.use(express.json());

//routes
app.use("/api", mainRoutes);
app.use("/api/user", userRoutes);

// Defi, () => {
    console.log("connected to the server")
})