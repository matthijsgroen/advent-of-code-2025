import { readFileSync } from "node:fs";

const input = readFileSync("demo-input.txt", "utf-8").split("\n");

console.log(input);

const accessCoords: [number, number][] = [];

const countAdjacentRolls = (x: number, y: number, grid: string[]) => {
  let count = 0;

  const directions = [
    [-1, -1],
    [0, -1],
    [1, -1],
    [-1, 0],
    [1, 0],
    [-1, 1],
    [0, 1],
    [1, 1],
  ];

  for (const [dx, dy] of directions) {
    const newX = x + dx;
    const newY = y + dy;

    if (
      newY >= 0 &&
      newY < grid.length &&
      newX >= 0 &&
      newX < grid[newY].length
    ) {
      if (grid[newY][newX] === "@") {
        count++;
      }
    }
  }

  return count;
};

for (let y = 0; y < input.length; y++) {
  for (let x = 0; x < input[y].length; x++) {
    const atLocation = input[y][x];
    if (atLocation === "@") {
      // roll of paper

      const amountAdjacentRolls = countAdjacentRolls(x, y, input);
      if (amountAdjacentRolls < 4) {
        accessCoords.push([x, y]);
      }
    }
  }
}

console.log(accessCoords);
console.log(accessCoords.length);
