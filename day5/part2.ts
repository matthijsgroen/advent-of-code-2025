import { readFileSync } from "node:fs";

const input: string[] = readFileSync("input.txt", "utf-8").split("\n");

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

const fresh = new Set();
for (const range of parsedInput.ranges) {
  for (let i = range[0]; i <= range[1]; i++) {
    fresh.add(i);
  }
}

console.log(fresh.size);
