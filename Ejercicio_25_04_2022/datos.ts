let btnEnv = document.getElementById("btnEnviar");
let dato = document.getElementById("dato");

btnEnv.addEventListener("click", () => {
  console.log("el dato ingresado es", dato.value);
});
