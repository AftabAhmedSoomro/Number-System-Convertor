let userInput = +prompt("Enter any number");
let userConvert = prompt("Enter Number System").toLowerCase();

if (userConvert === "binary" || userConvert == 2) {
  console.log(userInput.toString(2));
} 
else if (userConvert === "octal" || userConvert == 8) {
  console.log(userInput.toString(8));
} 
else if (userConvert === "hexadecimal" || userConvert == 16) {
  console.log(userInput.toString(16));
} 
else {
  console.log("Please! Enter a valid Number System");
}
