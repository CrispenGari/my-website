import { model, Schema } from "mongoose";

const Project = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  longDescription: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  cover: {
    type: String,
    required: true,
  },
  languages: {
    type: [String],
    required: true,
  },
  projectType: {
    type: String,
    required: true,
  },
  year:{
    type: Number,
    required: false
  }
});

export default model("projects", Project);
