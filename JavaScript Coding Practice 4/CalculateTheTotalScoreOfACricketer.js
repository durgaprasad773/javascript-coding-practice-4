"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((str) => str.trim());

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function main() {
  // arrayOfScores
  let arrayOfScores = JSON.parse(readLine().replace(/'/g, '"'));

  /*
   * Write your code here and return the output.
   */
   function calculateTotalScore(arrayOfScores){
       let [firstMatch, secondMatch, thirdMatch] = arrayOfScores
       let sumOf = firstMatch + secondMatch + thirdMatch
       return sumOf
   }

  let totalScore = calculateTotalScore(arrayOfScores);
  console.log(totalScore);
}
