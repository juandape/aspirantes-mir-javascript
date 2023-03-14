function join(array){
   let union = ""
    for (let i in array){
        union += array[i] + " "
   } 
   return union
}

console.log(join(["carro", "casa", "beca"]))
console.log(join(["me", "gusta", "javaScript"]))