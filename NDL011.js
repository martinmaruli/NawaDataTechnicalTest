const prompt = require("prompt-sync")();

let family = prompt("Input the number of families: ");
let member = prompt(
  "Input the number of members in the family (separated by a space): "
);
member = member.split(" ");
if (member.length != family) {
  console.log("Input must be equal with count of family");
} else {
  let result = 0;
  maxMiniBus = 4;
  for (i = 0; i < member.length; i++) {
    if (member[i] == maxMiniBus && member[i] != 0) {
      result += 1;
    } else if (member[i] < maxMiniBus && member[i] != 0) {
      let sum = member[i] + member[i + 1];
      let modulus = sum % maxMiniBus;
      member[i + 1] = sum < maxMiniBus ? 0 : modulus;
      result += 1;
    }
  }
  console.log("Minimum bus required is : " + result);
}
