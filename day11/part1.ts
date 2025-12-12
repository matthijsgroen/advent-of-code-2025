import { readFileSync } from "node:fs";

const input: string[] = readFileSync("input.txt", "utf-8").split("\n");

type Connector = {
  input: string;
  outputs: string[];
};

const parsedInput = input.map((line): Connector => {
  return {
    input: line.split(":")[0].trim(),
    outputs: line
      .split(":")[1]
      .split(/\s+/)
      .map((s) => s.trim())
      .filter((s) => s.length > 0),
  };
});

const foundPaths: string[][] = [];

const depthSearch = (path: string[], target: string) => {
  const startNode = path.at(-1);

  const node = parsedInput.find((n) => n.input === startNode);
  if (!node) {
    return;
  }
  for (const output of node.outputs) {
    if (output === target) {
      foundPaths.push([...path, output]);
    } else if (!path.includes(output)) {
      depthSearch([...path, output], target);
    }
  }
};

depthSearch(["you"], "out");

console.log(foundPaths);
console.log("Number of paths:", foundPaths.length);
