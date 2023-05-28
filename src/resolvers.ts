import { removeElementAtIndex } from "@utils/removeElementAtIndex";
import { CakeModel } from "./models/CakeModel";
import { UserModel } from "./models/UserModel";
import { OrderModel } from "./models/OrderModel";

export const resolvers = {
  Query: {
    getAllCakes: async (_: never, { limit }: { limit: number }) =>
      await CakeModel.find({}, {}, { limit: limit }),
    getCake: async (_: never, { id }: { id: string }) =>
      await CakeModel.findById(id),
  },

  Cake: {
    id: ({ _id }: { _id: string }) => _id,
    rating: ({
      reviews,
      rating,
    }: {
      reviews: {
        user: string;
        rating: number;
        comment: string;
      }[];
      rating: number | null;
    }) => {
      if (reviews.length === 0) return rating;

      return (
        reviews.reduce((acc, review) => {
          return acc + review.rating;
        }, 0) / reviews.length
      );
    },
  },

  Mutation: {
    favoriteCake: async (
      _: never,
      { id, userId }: { id: string; userId: string }
    ) => {
      await CakeModel.findByIdAndUpdate(id, {
        $push: {
          favorites: userId,
        },
      });
      return await CakeModel.findById(id);
    },

    unFavoriteCake: async (
      _: never,
      { id, userId }: { id: string; userId: string }
    ) => {
      const cake = await CakeModel.findById(id);
      if (!cake) {
        return new Error("Cake id not found");
      }
      const index = cake.favorites.indexOf(userId);
      if (index < 0) return new Error("User not found among favorites");
      const newFavorites = removeElementAtIndex(cake.favorites, index);
      await CakeModel.findByIdAndUpdate(id, {
        favorites: newFavorites,
      });
      return await CakeModel.findById(id);
    },

    createUser: async (_: never, { userId }: { userId: string }) => {
      const existingUser = await UserModel.findOne({
        uid: userId,
      });
      if (existingUser) return existingUser;
      await UserModel.create({
        uid: userId,
        cart: [],
        orders: [],
      });

      return await UserModel.findOne({
        uid: userId,
      });
    },

    addToCart: async (
      _: never,
      { userId, cakeId }: { userId: string; cakeId: string }
    ) => {
      await UserModel.findOneAndUpdate(
        {
          uid: userId,
        },
        {
          $push: {
            cart: cakeId,
          },
        }
      );

      return await UserModel.findOne({
        uid: userId,
      });
    },

    removeFromCart: async (
      _: never,
      { userId, cakeId }: { userId: string; cakeId: string }
    ) => {
      const user = await UserModel.findOne({
        uid: userId,
      });

      if (!user) return new Error("User not found");

      await UserModel.findOneAndUpdate(
        {
          uid: userId,
        },
        {
          cart: removeElementAtIndex(user.cart, user.cart.indexOf(cakeId)),
        }
      );

      return await UserModel.findOne({
        uid: userId,
      });
    },

    createOrder: async (
      _: never,
      {
        userId,
        input,
      }: {
        userId: string;
        input: {
          value: number;
          items: {
            id: string;
            name: string;
            quantity: number;
            price: number;
          }[];
        };
      }
    ) => {
      const order = await OrderModel.create({
        value: input.value,
        items: input.items.map(({ id }) => id),
        uid: userId,
        status: "pending",
        createdAt: (new Date()).toDateString()
      });

      await UserModel.findOneAndUpdate(
        {
          uid: userId,
        },
        {
          $push: {
            orders: order.id,
          },
        }
      );

      return order;
    },

    getOrders: async (_: never, { userId }: { userId: string }) => {
      return await OrderModel.find({
        uid: userId,
      });
    },

    emptyCart: async (_: never, {userId}:{userId: string}) => {
      await UserModel.findOneAndUpdate({
        uid: userId
      }, {
        cart: []
      });

      return await UserModel.findOne({uid: userId});
    }
  },

  User: {
    cart: async ({ cart }: { cart: string[] }) => {
      const cakes = await Promise.all(
        cart.map(async (cakeId) => {
          return await CakeModel.findById(cakeId);
        })
      );

      const value = cakes.reduce((prev, cake) => {
        if (!cake) return prev;
        return prev + cake.price;
      }, 0);

      return {
        value,
        items: cakes ? cakes : [],
      };
    },

    orders: async ({ orders }: { orders: string[] }) =>
      await Promise.all(
        orders.map(async (orderId) => {
          return await OrderModel.findById(orderId);
        })
      ),
  },

  Order: {
    items: async ({ items }: { items: string[] }) =>
      await Promise.all(
        items.map(async (orderId) => {
          return await CakeModel.findById(orderId);
        })
      ),
  },

  // TODO: resolver that calculates the quantity of a cake ordered
};
