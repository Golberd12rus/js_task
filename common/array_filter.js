const mixedArray = [3,13,74,14,66,15,22,4];
let arrayFilter = [];
const isEven = num => {
    return (num%2 == 0);
  }

const filterArray = (array, filter) => {
  for (i=0; i<array.length; i++) {
    if (filter(array[i])) {
      arrayFilter.push(array[i]);
    }
  }
  return arrayFilter;
}

console.log(filterArray(mixedArray, isEven));
//console.log(isEven(15));
