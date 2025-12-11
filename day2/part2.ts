import { readFileSync } from "node:fs";

const ranges = readFileSync("input.txt", "utf-8").split(",");

const invalidIds: BigInt[] = [];

const isInvalidId = (id: string): boolean => {
  for (let i = 0; i < id.length / 2; i++) {
    const pattern = id.slice(0, i + 1);
    const match = id.match(new RegExp(`^(${pattern}){2,}$`));
    if (match) return true;
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
      invalidIds.push(BigInt(id));
    }
  }
}

const validIdSum = invalidIds.reduce(
  (acc: BigInt, curr: BigInt) => acc + curr,
  0n
);

console.log(validIdSum);
