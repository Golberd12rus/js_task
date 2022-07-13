const path = "/users/download/index.html";

const flipString = (way) => {
  let invertedString = "";
  for (var i=way.length-1; i>=0; i--) {
    invertedString += way[i];
  }
  return invertedString;
}

const isHtml = (path) => {
  flippedString = flipString(path);
  let lmth = "lmth";
  for (i=0; i<lmth.length-1; i++) {
      return  (lmth[i] == flippedString[i]);
  }
}

//console.log(flipString(path));
console.log(isHtml(path));