const string = "Привет! Как дела?";
let currentString = "";
const vowels = ["а", "у", "о", "и", "э", "ы", "я", "ю", "е", "ё"];
for (  i=0; i < string.length; i++ ) {
  if (vowels.indexOf(string[i]) != -1) {
    currentString = currentString + string[i];
  };
};
console.log(currentString);