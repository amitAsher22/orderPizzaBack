import mongoose from "mongoose";

const pizzaSchema = mongoose.Schema({
  name: { type: String },
  varients: [],
  price: [],
  category: { type: String },
  image: { type: String },
  description: { type: String },
});

const pizzaModel = mongoose.model("pizzas", pizzaSchema);

export default pizzaModel;
