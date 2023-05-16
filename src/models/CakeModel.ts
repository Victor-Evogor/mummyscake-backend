import {model, Schema} from "mongoose";

export const CakeSchema = new Schema({
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

  delivery_info: {
    type: {
      available: {
        type: Boolean
      },
      shipping_cost: {
        type: Number,
      },
      estimated_delivery_time: {
        type: String
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
  },
  rating: {
    type: Number
  },
  reviews: [{
    user: String,
  comment: String,
  rating: Number
  }],
  favorites: {
    type: [String],
    default: []
  }
})

export const CakeModel = model("cake", CakeSchema)
