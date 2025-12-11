import { readFileSync } from "node:fs";

const input = readFileSync("input.txt", "utf-8").split("\n");

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

const removeRollsOfPaper = () => {
  let removed = 0;
  const coords: [number, number][] = [];
  for (let y = 0; y < input.length; y++) {
    for (let x = 0; x < input[y].length; x++) {
      const atLocation = input[y][x];
      if (atLocation === "@") {
        // roll of paper

        const amountAdjacentRolls = countAdjacentRolls(x, y, input);
        if (amountAdjacentRolls < 4) {
          coords.push([x, y]);
          removed++;
        }
      }
    }
  }
  for (const [x, y] of coords) {
    input[y] = input[y].substring(0, x) + "x" + input[y].substring(x + 1);
  }
  accessCoords.push(...coords);
  return removed;
};

while (removeRollsOfPaper() > 0) {}

// console.log("removed", removeRollsOfPaper());
console.log(input);
console.log(accessCoords.length);
