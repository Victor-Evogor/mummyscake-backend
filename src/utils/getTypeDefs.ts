import { readFileSync as readFile, readdirSync as readdir } from "fs";
import { join } from "path";

export const getTypeDefs = (_testing = false) => {
  let result: string[] = [];
  const dirname = _testing
    ? join(__dirname, "../", "tests", "gql")
    : join(__dirname, "../gql");
  const dir = readdir(dirname);
  dir.forEach((filename) => {
    result.push(readFile(join(dirname, filename), { encoding: "utf-8" }).trim());
  });
  return result.join("\n");
};
