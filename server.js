import express from "express";
import db from "./db.js";
// import pizzaModel from "./models/pizzaModel.js";
import PizzasRoute from "./routes/PizzasRoute.js";
import UserRoute from "./routes/userRoute.js";

const app = express();
app.use(express.json());
db();

app.use("/api/pizzas/", PizzasRoute);
app.use("/api/users/", UserRoute);
app.get("/", (req, res) => {
  res.send("Server working :)");
});

app.listen(5000, () => console.log("Example app listening on port 5000!"));
