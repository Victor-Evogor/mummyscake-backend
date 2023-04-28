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
  },
};
