import { Schema, model } from "mongoose";


export const UserSchema = new Schema({
  uid: {
    type: String,
    required: true
  },
  orders: [String],
  cart: {
    type:  [String]
  }
})

export const UserModel = model("user", UserSchema);
