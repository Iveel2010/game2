const letters = document.getElementById("letters");
const text = document.getElementById("text");
const live = document.getElementById("live");
let arr = [
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
const letter = document.createElement("button");
const div = document.createElement("span");
const selectedWord = document.getElementById("selectedword");
let selectedWordarr = "hello";

for (let i = 0; i < arr.length; i++) {
  const letter = document.createElement("button");
  letter.innerHTML = arr[i];
  letters.appendChild(letter);
  letter.className = "letter";
  letter.id = arr[i];
  letter.addEventListener("click", function () {
    for (let j = 0; j < selectedWordarr.length; i++) {
      if (selectedWordarr[i] === arr[i]) {
        div.innerHTML = selectedWordarr[i];
        console.log(selectedWordarr[i]);
      } else {
      }
    }
  });
}
for (let i = 0; i < selectedWordarr.length; i++) {
  const div = document.createElement("span");
  text.appendChild(div);
  div.innerHTML = "_";
}
