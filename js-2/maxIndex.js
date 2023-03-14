// escribe la función maxIndex acá

function maxIndex(array) {
  let mayor = 0;
  let index = 0;
  for (let i in array) {
    if (array[i] > mayor) {
      mayor = array[i];
      index = i;
    }
  }
  if (array.length === 0) {
    return -1;
  }
  return index;
}

console.log(maxIndex([1, 3, 2])); // 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])); // 0
console.log(maxIndex([])); // -1
