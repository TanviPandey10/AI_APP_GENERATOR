 import mongoose from "mongoose";

const recordSchema = new mongoose.Schema(
  {
    entity: {
      type: String,
      required: true
    },
    data: {
      type: Object,
      required: true
    }
  },
  { timestamps: true }
);

export default mongoose.model("Record", recordSchema);