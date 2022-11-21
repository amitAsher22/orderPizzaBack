import mongoose from "mongoose";

const connectdb = async () => {
  const url =
    "mongodb+srv://amitdemo:0523157737@demo.uwgtfk4.mongodb.net/mon-pizza";
  mongoose.connect(url);
  const connection = mongoose.connection;
  connection.once("open", () => {
    console.log("mongoDB DataBase connection");
  });
};
export default connectdb;
