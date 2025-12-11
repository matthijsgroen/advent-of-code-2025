import { readFileSync } from "node:fs";

const input = readFileSync("input.txt", "utf-8").split("\n");

console.log(input);

const startPosition = 50;

let currentPosition = startPosition;

let zeroCount = 0;

for (const line of input) {
  const [direction, ...valueStr] = line;
  const value = parseInt(valueStr.join(""), 10);

  if (direction === "L") {
    currentPosition -= value;
  } else {
    currentPosition += value;
  }
  currentPosition = (currentPosition + 100) % 100;

  if (currentPosition == 0) {
    zeroCount += 1;
  }
}

console.log(currentPosition);
console.log(zeroCount);
