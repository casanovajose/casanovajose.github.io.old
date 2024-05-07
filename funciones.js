// alert("jajajaja");
const fecha = new Date();
// 7 y 19 
let mensaje = "";

if (fecha.getHours() > 7 && fecha.getHours() < 21) {
  mensaje = "Buen día";
} else {
  mensaje = "Buenas noches";
}
// Modificamos el elemento h1
const titulo = document.querySelector("h1");
titulo.textContent = mensaje;

