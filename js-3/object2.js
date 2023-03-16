const persona = {
  nombre: "Juan David",
  edad: 46,
  ciudad: "Medellin",
  profesion: "Bartender",
};

let llaves = Object.keys(persona);
for (let i in llaves) {
  console.log(`${llaves[i]}: ${persona[llaves[i]]}`);
}

function presentacion(obj) {
  return `${obj.nombre}, ${obj.edad}, ${obj.ciudad}`;
}

const mensaje = presentacion(persona);
console.log(mensaje);

persona.hobbies = ["progamacion", "videogames", "cocteles"];
console.log(persona.hobbies);

for (let i in persona.hobbies) {
  console.log(persona.hobbies[i]);
}
