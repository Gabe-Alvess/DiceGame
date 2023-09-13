let throws = 0;
let maxCount = [0, 0, 0, 0, 0];
let numArray = [0, 0, 0, 0, 0, 0];
let score = document.getElementById("score");
let arr = ["geen dubbele", "een duo gegooid", "een trio gegooid", "een quattro gegooid", "een cinquo gegooid"];

function throwDice() {
  throws++;

  document.getElementById("throwCount").textContent = throws;

  for (let i = 1; i <= 5; i++) {
    let randomNum = Math.floor(Math.random() * 6) + 1;

    numArray[randomNum - 1]++;

    document.getElementById("dice" + i).src = `/src/images/dobbel${randomNum}.gif`;
  }

  const largestNum = Math.max(...numArray);

  maxCount[largestNum - 1]++;

  document.getElementById("maxCount" + largestNum).textContent = maxCount[largestNum - 1];

  score.innerHTML = `Je hebt ${arr[largestNum - 1]}!`;

  numArray.fill(0);
}

document.getElementById("play").addEventListener("click", throwDice);