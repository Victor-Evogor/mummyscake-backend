import { Schema, model } from "mongoose";

const OrderSchema = new Schema({
  value: Number,
  items: [String],
  uid: String,
  status: String
})

export const OrderModel = model("order", OrderSchema);
