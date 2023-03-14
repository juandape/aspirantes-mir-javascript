// escribe la función max acá

function max(array) {
  let mayor = 0;
  for (let i in array) {
     if (array[i] > mayor) {
      mayor = array[i];
    }
  }
  if (mayor === 0) {
    return undefined;
  }
  return mayor;
}

console.log(max([1, 3, 2])); // 3
console.log(max([10, 9, 8, 7, 6, 5, 4])); // 10
console.log(max([])); // undefined
