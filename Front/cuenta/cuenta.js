$btnCerrar = document.querySelector("#btnCerrarSesion");
$btnCerrar.addEventListener("click", () => {
  Base.ValidarLogin();
  Base.Deslogueo();
});



//funcion para copiar
const $btnCopiar = document.getElementById("btnCopiar");
$btnCopiar.addEventListener("click", () => {

  let cbu = document.getElementById("cbu");
  cbu.select()
  navigator.clipboard.writeText(cbu.value);
  
  alert("texto copiado");
});




