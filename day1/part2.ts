import { readFileSync } from "node:fs";

const input = readFileSync("demo-input.txt", "utf-8").split("\n");

console.log(input);

const startPosition = 50;

let currentPosition = startPosition;

let zeroCount = 0;

for (const line of input) {
  const [direction, ...valueStr] = line;
  let value = parseInt(valueStr.join(""), 10);
  let previousPosition = currentPosition;

  if (direction === "L") {
    currentPosition -= value;
  } else {
    currentPosition += value;
  }
  let correctedPosition = (currentPosition + 100) % 100;

  if (currentPosition > 100 && previousPosition < 100) {
    while (value > 0) {
      value -= 100;
      zeroCount += 1;
    }
  }
  if (currentPosition < 0 && previousPosition > 0) {
    while (value < 0) {
      value += 100;
      zeroCount += 1;
    }
  }

  currentPosition = correctedPosition;

  if (currentPosition == 0) {
    zeroCount += 1;
  }
}

console.log(currentPosition);
console.log(zeroCount);
