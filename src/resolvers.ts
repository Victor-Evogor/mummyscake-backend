import { Cake } from "./models/CakeModel";

export const resolvers = {
  Query: {
    getAllCakes: async (_: never, { limit }: { limit: number }) => {
      return await Cake.find({}, {}, { limit: limit });
    },

    getCake: async (_: never, { id }: { id: string }) =>
      await Cake.findById(id),
  },
  Cake : {
    id: ({_id}:{_id: string})=> _id
  }
};
