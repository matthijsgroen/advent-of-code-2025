import { readFileSync } from "node:fs";

const input: string[] = readFileSync("demo-input.txt", "utf-8").split("\n");

const parsedInput = input.reduce(
  (acc: { ranges: [number, number][]; values: number[] }, line: string) => {
    if (line.includes("-")) {
      const [start, end] = line.split("-").map(Number);
      acc.ranges.push([start, end]);
      return acc;
    }
    if (line.trim() !== "") {
      acc.values.push(Number(line));
    }
    return acc;
  },
  {
    ranges: [] as [number, number][],
    values: [] as number[],
  }
);

// console.log(input);
// console.log(parsedInput);

const fresh = parsedInput.values.filter((value) => {
  for (const [start, end] of parsedInput.ranges) {
    if (value >= start && value <= end) {
      return true;
    }
  }
  return false;
});

console.log(fresh.length);
