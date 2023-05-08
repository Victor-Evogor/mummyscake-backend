import { CakeModel } from "./models/CakeModel";

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
    favoriteCake: async (_: never, { id, userId }: { id: string, userId: string })=>{
      await CakeModel.findByIdAndUpdate(id, {
        $push: {
          favorites: userId
        }
      });
      return await CakeModel.findById(id);
    }
  }
};
