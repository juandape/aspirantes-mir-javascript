const pedro = {
  nombre: "Pedro Perez",
  edad: 30,
  activo: true,
  hobbies: ["programar", "squash", "piano"],
};
console.log(pedro.edad);
pedro.estatura = 70;
delete pedro.activo;

let llaves = Object.keys(pedro);
for (let i in llaves) {
  console.log(`${llaves[i]}: ${pedro[llaves[i]]}`);
}

pedro.saluda = function () {
  console.log(`Hola me llamo ${this.nombre}`);
};

pedro.saluda();
