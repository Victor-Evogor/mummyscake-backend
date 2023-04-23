import {model, Schema} from "mongoose";

const CakeSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  weight: {
    type: Number,
    default: null
  },
  flavors: {
    type: [String],
    default: []
  },
  ingredients: {
    type: [String],
    default: []
  },
  image: {
    type: String,
    default: null
  },
  reviews: {
    type: [{
      user: {
        type: String,
        required: true
      },
      comment: {
        type: String,
        required: true
      },
      rating: {
        type: Number,
        required: true
      },
    }],
    default: []
  },
  delivery_info: {
    type: {
      available: {
        type: Boolean
      },
      shipping_cost: {
        type: Number,
      },
      estimated_delivery_time: {
        type: Number
      }
    }
  },
  size: {
    type: {
      diameter: Number,
      height: Number,
      serving_size: Number
    }
  },
  occasion: String,
  allergens: [String],
  nutritional_info: {
    calories: Number,
    fat: Number,
    sugar: Number,
    protein: Number
  }
})

export const Cake = model("cake", CakeSchema)
