const prompt = require("prompt-sync")();

let text = prompt("Input one line of words: ");
text = text.toLowerCase().split(" ").join("");
let vowel = "aiueo";
let resultVowel = "";
let resultConsonant = "";
for (let i = 0; i < text.length; i++) {
  if (vowel.includes(text[i])) {
    resultVowel += text[i];
  } else {
    resultConsonant += text[i];
  }
}
console.log("Vowel Characters :\n" + resultVowel);
console.log("Consonant Characters :\n" + resultConsonant);
