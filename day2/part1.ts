import { readFileSync } from "node:fs";

const ranges = readFileSync("input.txt", "utf-8").split(",");

const invalidIds: number[] = [];

const isInvalidId = (id: string): boolean => {
  const pattern = id.slice(0, id.length / 2);
  if (pattern + pattern === id) {
    return true;
  }
  return false;
};

for (const range of ranges) {
  const [startStr, endStr] = range.split("-");
  const start = parseInt(startStr, 10);
  const end = parseInt(endStr, 10);

  for (let id = start; id <= end; id++) {
    const idAsString = id.toString();

    if (isInvalidId(idAsString)) {
      invalidIds.push(id);
    }
  }
}

const validIdSum = invalidIds.reduce((acc, curr) => acc + curr, 0);

console.log(validIdSum);
