import { readFileSync } from "node:fs";

const input = readFileSync("demo-input.txt", "utf-8").split("\n");

console.log(input);
const batteries: number[] = [];

for (let i = 0; i < input.length; i++) {
  const bank = input[i].split("").map(Number);

  const max = Math.max(...bank.slice(0, -1));
  const highestFirst = bank.indexOf(max);
  if (highestFirst !== bank.length - 1) {
    const remainingBatteries = bank.slice(highestFirst + 1);
    const second = Math.max(...remainingBatteries);

    const value = parseInt(`${max}${second}`, 10);
    batteries.push(value);
  }
}

console.log(batteries);
console.log(batteries.reduce((a, b) => a + b, 0));
