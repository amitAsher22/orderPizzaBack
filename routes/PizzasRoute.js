import express from "express";
const router = express.Router();
import PizzaModel from "../models/PizzaModel.js";

router.get("/getallpizzas", async (req, res) => {
  try {
    const pizzas = await PizzaModel.find({});
    res.send(pizzas);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

export default router;
