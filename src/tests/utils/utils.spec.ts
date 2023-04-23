import { getTypeDefs } from "@utils/getTypeDefs";

describe("Utilities test suite", () => {
  it("Loads graphql schema",() => {
    const received = getTypeDefs(true);
    const expected = `type Demo {
          property: String
      }

      type Demo2 {
          property: String
      }
      type Demo3 {
          property: String
      }

      type Demo4 {
          property: String
      }`;
    expect(received.split(" ").join("").split("").join("")).toBe(expected.split(" ").join("").split("").join(""));
  });
});
