import { readFileSync } from "node:fs";

const input: string[] = readFileSync("input.txt", "utf-8").split("\n");

const parsedInput = input.map((line) => line.trim().split(/\s+/));

console.log(parsedInput);
const colResults: number[] = [];

for (let col = 0; col < parsedInput[0].length; col++) {
  const numbers = parsedInput.slice(0, -1).map((row) => parseInt(row[col], 10));
  const operator = parsedInput[parsedInput.length - 1][col];

  let result: number;
  switch (operator) {
    case "+":
      result = numbers.reduce((a, b) => a + b, 0);
      break;
    case "-":
      result = numbers.reduce((a, b) => a - b);
      break;
    case "*":
      result = numbers.reduce((a, b) => a * b, 1);
      break;
  }
  colResults.push(result);
}

const total = colResults.reduce((a, b) => a + b, 0);
console.log(colResults);
console.log("Total:", total);
