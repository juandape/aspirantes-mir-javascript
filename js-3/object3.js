const receta = {}
receta.nombre = "Sandwich"
receta.ingredientes = []
receta.ingredientes.push({
    nombre: "Pan",
    cantidad: 2
})
receta.ingredientes.push({
    nombre: "Queso",
    cantidad: 1
})

console.log(`el primer ingrediente es ${receta.ingredientes[0].nombre}`)


let llaves = Object.values(receta.ingredientes)
let suma = 0
for (let i in llaves){
     suma += llaves[i].cantidad
    }
    console.log(`la suma de las cantidades de los ingredientes es ${suma}`)