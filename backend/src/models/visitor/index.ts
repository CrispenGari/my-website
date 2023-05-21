import { model, Schema } from "mongoose";

const Visitors = new Schema({
  ipAddress: {
    type: String,
    required: true,
  },
  lastVisit: {
    type: Date,
    default: () => new Date(+new Date() + 7 * 24 * 60 * 60 * 1000),
    required: true,
  },
});

export default model("visitors", Visitors);
