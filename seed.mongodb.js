db = connect(process.env.DB_URI);

db.cakes.deleteMany({});

db.cakes.insertMany([
  {
    name: "Red Velvet Cake",
    description: "A classic red velvet cake with cream cheese frosting",
    price: 35.99,
    weight: 2.5,
    flavors: ["vanilla", "chocolate", "cream cheese"],
    ingredients: [
      "flour",
      "sugar",
      "cocoa powder",
      "buttermilk",
      "eggs",
      "butter",
    ],
    image: "/velvet_red_cake.jpg",
    rating: 4.5,
    reviews: [
      { user: "John", comment: "Delicious cake!", rating: 5 },
      { user: "Sarah", comment: "The frosting was too sweet", rating: 4 },
    ],
    delivery_info: {
      available: true,
      shipping_cost: 5.99,
      estimated_delivery_time: "2-3 business days",
    },
    size: {
      diameter: 10,
      height: 3.5,
      serving_size: 12,
    },
    occasion: "Birthday",
    allergens: ["gluten", "dairy"],
    nutritional_info: {
      calories: 300,
      fat: 15,
      sugar: 25,
      protein: 5,
    },
    favorites: []
  },
  {
    name: "Chocolate Fudge Cake",
    description: "A rich and decadent chocolate fudge cake",
    price: 40.99,
    weight: 3,
    flavors: ["chocolate"],
    ingredients: ["flour", "sugar", "cocoa powder", "eggs", "butter"],
    image: "/chocolate_fudge_cake.jpg",
    rating: 4.8,
    reviews: [
      {
        user: "Emily",
        comment: "Best chocolate cake I've ever had!",
        rating: 5,
      },
      { user: "Mike", comment: "A bit too sweet for my taste", rating: 4 },
    ],
    delivery_info: {
      available: true,
      shipping_cost: 6.99,
      estimated_delivery_time: "3-4 business days",
    },
    size: {
      diameter: 12,
      height: 4,
      serving_size: 16,
    },
    occasion: "Anniversary",
    allergens: ["gluten"],
    nutritional_info: {
      calories: 400,
      fat: 20,
      sugar: 30,
      protein: 7,
    },
    favorites: []
  },
  {
    name: "Lemon Blueberry Cake",
    description: "A light and refreshing lemon cake with blueberries",
    price: 38.99,
    weight: 2.8,
    flavors: ["lemon", "blueberry"],
    ingredients: [
      "flour",
      "sugar",
      "lemon zest",
      "blueberries",
      "buttermilk",
      "eggs",
      "butter",
    ],
    image: "lemon_blueberry_cake.jpg",
    rating: 4.6,
    reviews: [
      { user: "Amy", comment: "Perfect for a summer party!", rating: 5 },
      { user: "David", comment: "Could use more lemon flavor", rating: 4 },
    ],
    delivery_info: {
      available: true,
      shipping_cost: 5.99,
      estimated_delivery_time: "2-3 business days",
    },
    size: {
      diameter: 9,
      height: 3,
      serving_size: 10,
    },
    occasion: "Graduation",
    allergens: ["gluten"],
    nutritional_info: {
      calories: 250,
      fat: 12,
      sugar: 20,
      protein: 4,
    },
    favorites: []
  },
  {
    name: "Carrot Cake",
    description: "A classic carrot cake with cream cheese frosting",
    price: 36.99,
    weight: 2.8,
    flavors: ["carrot", "cinnamon", "cream cheese"],
    ingredients: [
      "flour",
      "sugar",
      "baking powder",
      "baking soda",
      "salt",
      "cinnamon",
      "carrots",
      "pineapple",
      "walnuts",
      "coconut",
      "eggs",
      "oil",
      "butter",
      "cream cheese",
      "powdered sugar",
    ],
    image: "/carrot_cake.jpg",
    rating: 4.7,
    reviews: [
      {
        user: "Emily",
        comment: "Loved the texture and flavor!",
        rating: 5,
      },
      {
        user: "Michael",
        comment: "Could use more cream cheese frosting",
        rating: 4,
      },
    ],
    delivery_info: {
      available: true,
      shipping_cost: 5.99,
      estimated_delivery_time: "2-3 business days",
    },
    size: {
      diameter: 9,
      height: 3,
      serving_size: 12,
    },
    occasion: "Easter",
    allergens: ["gluten", "dairy", "nuts"],
    nutritional_info: {
      calories: 300,
      fat: 16,
      sugar: 25,
      protein: 4,
    },
    favorites: []
  },
  {
    name: "Vanilla Bean Cake",
    price: 22.99,
    weight: 2.5,
    description: "A classic vanilla cake made with real vanilla beans.",
    flavors: ["Vanilla"],
    ingredients: [
      "flour",
      "sugar",
      "baking powder",
      "baking soda",
      "salt",
      "eggs",
      "milk",
      "vegetable oil",
      "vanilla extract",
      "vanilla beans",
      "butter",
      "confectioners' sugar",
      "heavy cream",
      "vanilla extract",
      "salt",
    ],
    image: "/vanilla_bean_cake.jpg",
    rating: 4.8,
    reviews: [
      {
        user: "Ahmed",
        comment:
          "This cake was amazing! The vanilla flavor really came through.",
        rating: 5,
      },
      { user: "Sean", comment: "The cake was moist and delicious.", rating: 5 },
      {
        user: "Shaquille",
        comment: "I would definitely order this cake again.",
        rating: 3,
      },
    ],
    delivery_info: {
      available: true,
      shipping_cost: 7.99,
      estimated_delivery_time: "2-3 business days",
    },
    size: {
      diameter: 9,
      height: 2,
      serving_size: 8,
    },
    occasion: "Birthday",
    allergens: ["Wheat", "Eggs", "Milk"],
    nutritional_info: {
      calories: 320,
      fat: 14,
      sugar: 22,
      protein: 4,
    },
    favorites: []
  },
  {
    name: "Vanilla Sponge Cake",
    description: "Light and fluffy vanilla cake",
    price: 29.99,
    weight: 2.0,
    flavors: ["Vanilla"],
    ingredients: ["Flour", "Sugar", "Eggs", "Vanilla Extract"],
    image: "vanilla_sponge_cake.png",
    reviews: [
      {
        user: "Alice",
        comment:
          "This cake is so light and fluffy, just like the name suggests. The vanilla flavor is spot on and the texture is perfect. Highly recommend!",
        rating: 5,
      },
      {
        user: "Bob",
        comment:
          "I'm not usually a fan of vanilla cakes, but this one surprised me. It's not too sweet and the texture is just right. Perfect with a cup of tea.",
        rating: 4,
      },
    ],
    delivery_info: {
      available: false,
      cost: 24.99,
      estimated_delivery_time: "3-5 business days",
    },
    size: {
      diameter: 9,
      height: 3,
      serving_size: 12,
    },
    occasion: "Afternoon tea",
    allergens: ["Gluten", "Eggs"],
    nutritional_info: {
      calories: 250,
      fat: 10,
      protein: 3,
      carbs: 35,
    },
    favorites: []
  },
  {
    name: "Strawberry Shortcake",
    description: "Layers of vanilla sponge cake and fresh strawberries",
    price: 39.99,
    weight: 2.5,
    flavors: ["Vanilla", "Strawberry"],
    ingredients: ["Flour", "Sugar", "Eggs", "Vanilla Extract", "Strawberries"],
    image: "strawberry_shortcake.png",
    reviews: [
      {
        user: "Charlie",
        comment:
          "This cake is so pretty and tastes just as good as it looks! The vanilla cake is moist and the fresh strawberries are so juicy. Perfect for a summer party.",
        rating: 5,
      },
      {
        user: "Eve",
        comment:
          "The cake was good, but I wish there were more strawberries in it. I felt like I was mostly eating the cake. Still, it was tasty and everyone at the party enjoyed it.",
        rating: 3,
      },
    ],
    delivery_info: {
      available: false,
      cost: 43.99,
      estimated_delivery_time: "2-3 business days",
    },
    size: {
      diameter: 9,
      height: 3,
      serving_size: 12,
    },
    occasion: "Summer party",
    allergens: ["Gluten", "Eggs"],
    nutritional_info: {
      calories: 300,
      fat: 15,
      protein: 4,
      carbs: 40,
    },
    favorites: []
  },
  {
    name: "Pineapple Upside-Down Cake",
    description:
      "Classic cake with caramelized pineapple and maraschino cherries",
    price: 34.99,
    weight: 2.0,
    flavors: ["Pineapple", "Cherry"],
    ingredients: ["Flour", "Sugar", "Eggs", "Pineapple", "Maraschino Cherries"],
    image: "https://example.com/pineapple-upside-down-cake.jpg",
    reviews: [
      {
        user: "Grace",
        comment:
          "This cake brings back so many childhood memories! The pineapple and cherry topping is so sweet and delicious. The cake itself is moist and flavorful. Would order again.",
        rating: 4,
      },
      {
        user: "Henry",
        comment:
          "I'm not a big fan of pineapple, but I had to try this cake because it looked so good. I was pleasantly surprised by how much I enjoyed it! The cake is not too sweet, and the pineapple and cherry topping is a nice contrast. Definitely recommend.",
        rating: 4,
      },
    ],
    delivery_info: {
      available: true,
      estimated_delivery_time: "2 business days",
      cost: 24.99,
    },
    size: {
      diameter: 9,
      height: 3,
      serving_size: 12,
    },
    occasion: "Dessert",
    allergens: ["Gluten", "Eggs"],
    nutritional_info: {
      calories: 280,
      fat: 12,
      protein: 3,
      carbs: 40,
    },
    favorites: []
  },
  {
    name: "Blueberry Cheesecake",
    description: "Rich and creamy cheesecake with a blueberry topping",
    price: 49.99,
    weight: 3.5,
    flavors: ["Cheesecake", "Blueberry"],
    ingredients: [
      "Graham Cracker Crumbs",
      "Cream Cheese",
      "Sugar",
      "Eggs",
      "Sour Cream",
      "Blueberries",
    ],
    image: "https://example.com/blueberry-cheesecake.jpg",
    rating: 4.5,
    reviews: [
      {
        user: "James",
        comment:
          "This cake was absolutely amazing! The cheesecake was so creamy, and the blueberry topping was the perfect balance of sweet and tart.",
        rating: 4,
      },
      {
        user: "Cynthia",
        comment:
          "I ordered this for a party, and it was a hit! Everyone loved the blueberry cheesecake. It was so rich and flavorful.",
        rating: 3,
      },
      {
        user: "Micheal",
        comment:
          "The cheesecake was delicious, but I wish there were more blueberries on top. Overall, I would order this again.",
        rating: 5,
      },
    ],
    delivery_info: {
      available: true,
      shipping_cost: 9.99,
      estimated_delivery_time: "2022-05-05T12:00:00Z",
    },
    size: {
      diameter: 9,
      height: 3,
      serving_size: 12,
    },
    occasion: "Party",
    allergens: ["Gluten", "Eggs", "Dairy"],
    nutritional_info: {
      calories: 400,
      fat: 20,
      sugar: 30,
      protein: 8,
    },
    favorites: []
  },
  {
    name: "Pumpkin Spice Cake",
    description: "Spiced cake with pumpkin puree and cream cheese frosting",
    price: 34.99,
    weight: 2.5,
    flavors: ["Pumpkin Spice"],
    ingredients: [
      "Flour",
      "Sugar",
      "Eggs",
      "Pumpkin Puree",
      "Cinnamon",
      "Nutmeg",
      "Cloves",
      "Cream Cheese",
    ],
    image: "https://example.com/pumpkin-spice-cake.jpg",
    rating: 4.2,
    reviews: [
      {
        user: "Peter",
        comment:
          "I loved this cake! The pumpkin spice flavor was just right, and the cream cheese frosting was a perfect match.",
        rating: 4,
      },
      {
        user: "Anthony",
        comment:
          "This cake was good, but I felt like the spice was a little too strong. It overpowered the pumpkin flavor a bit.",
        rating: 3,
      },
      {
        user: "Jock",
        comment:
          "The frosting was amazing, but the cake itself was a bit dry. I wish it had been more moist.",
        rating: 2.5,
      },
      {
        user: "Andy",
        comment:
          "Overall, I would recommend this cake. It's perfect for fall and winter events.",
        rating: 4,
      },
    ],
    delivery_info: {
      available: true,
      shipping_cost: 7.99,
      estimated_delivery_time: "2022-05-04T12:00:00Z",
    },
    size: {
      diameter: 8,
      height: 4,
      serving_size: 10,
    },
    occasion: "Fall",
    allergens: ["Gluten", "Eggs", "Dairy"],
    nutritional_info: {
      calories: 350,
      fat: 15,
      sugar: 25,
      protein: 5,
    },
    favorites: []
  },
  {
    name: "Choco-Hazelnut Cake",
    description: "Decadent chocolate cake with a hazelnut twist",
    price: 49.99,
    weight: 3.0,
    flavors: ["Chocolate", "Hazelnut"],
    ingredients: ["Flour", "Sugar", "Eggs", "Chocolate", "Hazelnuts"],
    image: "https://example.com/choco-hazelnut-cake.jpg",
    rating: 4.5,
    reviews: [
      {
        user: "Blessing",
        comment:
          "Excellent cake, loved the combination of chocolate and hazelnut!",
        rating: 4,
      },
      { user: "Ben", comment: "Best chocolate cake ever!", rating: 5 },
    ],
    delivery_info: {
      available: true,
      shipping_cost: 7.99,
      estimated_delivery_time: "2022-05-10T14:00:00Z",
    },
    size: {
      diameter: 10,
      height: 3,
      serving_size: 12,
    },
    occasion: "Birthday",
    allergens: ["Gluten", "Eggs", "Nuts"],
    nutritional_info: {
      calories: 350,
      fat: 18,
      sugar: 30,
      protein: 6,
    },
    favorites: []
  },
  {
    name: "Mango Mousse Cake",
    description: "Light and fluffy mango mousse cake",
    price: 34.99,
    weight: 2.5,
    flavors: ["Mango"],
    ingredients: ["Flour", "Sugar", "Eggs", "Mango Puree"],
    image: "https://example.com/mango-mousse-cake.jpg",
    rating: 4,
    reviews: [
      {
        user: "David",
        comment:
          "I loved the light and fluffy texture of this cake, and the mango flavor was spot on!",
        rating: 5,
      },
      {
        user: "Benjamin",
        comment: "A great option for a summer dessert!",
        rating: 4.5,
      },
    ],
    delivery_info: {
      available: true,
      shipping_cost: 5.99,
      estimated_delivery_time: "2022-05-08T10:00:00Z",
    },
    size: {
      diameter: 8,
      height: 2.5,
      serving_size: 8,
    },
    occasion: "Summer dessert",
    allergens: ["Gluten", "Eggs"],
    nutritional_info: {
      calories: 200,
      fat: 8,
      sugar: 20,
      protein: 3,
    },
    favorites: []
  },
]);

console.log("All records inserted");
