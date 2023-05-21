import mongoose from "mongoose";
import { __url__ } from "../constants";

mongoose.connect(__url__, {}, (err) => {
  if (err) {
    throw err;
  }
  console.log("connected to mongodb");
});
mongoose.connection.once("open", (err) => {
  if (err) {
    throw err;
  }
  console.log("Ready to accept connections");
});
