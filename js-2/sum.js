function sum(array) {
  let acum = 0;
  for (let i in array) {
    acum += array[i];
  }
  return acum;
}

console.log(sum([1, 2, 3])); // 6
console.log(sum([10, 8, 12, 5])); // 35
console.log(sum([])); // 0
