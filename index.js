const letterContainer = document.getElementById("letters");
letterContainer.className = "letterContainer";
const text = document.getElementById("text");
const point = document.getElementById("point");

const letterv = document.getElementById("letterv");
letterv.className = "letterv";
const animalword = ["monkey", "dog", "cat", "whale", "tiger", "chicken"];
const word = animalword[Math.floor(Math.random() * animalword.length)];
let letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let result = 10;
point.innerHTML = `point: ${result}`;
for (let i = 0; i < letters.length; i++) {
  const letter = document.createElement("button");
  letter.id = letters[i];
  letter.className = "letter";
  letter.innerHTML = letters[i];
  letterContainer.appendChild(letter);
  letter.addEventListener("click", function () {
    for (let j = 0; j < word.length; j++) {
      if (word[j] === letters[i]) {
        console.log(word[j]);
        const indexof = word.indexOf(word[j], [j]);
        const boo = document.getElementById(indexof);
        boo.innerHTML = word[j];
      }
      if (word[j] !== letters[i]) {
        result += -0.2;
        point.innerHTML = `point: ${Math.floor(result)}`;
      }
    }
    letter.disabled = true;
    letter.style.opacity = "0.2";
    letter.style.backgroundColor = "white";
  });
}
for (let i = 0; i < word.length; i++) {
  const bottonBorder = document.createElement("span");
  letterv.appendChild(bottonBorder);
  bottonBorder.id = [i];
  bottonBorder.innerHTML = "_";
}
