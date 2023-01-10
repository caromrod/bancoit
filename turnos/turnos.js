const $btnReservar  = document.getElementById("btnReservar");
$btnReservar.addEventListener("click", () => {
  let input = document.querySelector("input").value;
  let datos = document.getElementById("txtDatos").value;

      if (input == "" ){
        alert("Debes llenar los campos");
      }else  {
        if ((/^[0-9]/).test(datos) == true){
                 
          alert("Turno reservado, puede imprimir");
          let impresion = document.getElementById('btnImprimir');
          impresion.style.visibility = "visible";
        }
 
        else{

          alert("error de tipo de datos, solo es valido numeros")
          document.getElementById('linea').value = '';
          document.getElementById('tramite').value = '';
          document.getElementById('txtNumero').value = '';
          document.getElementById('txtCalendario').value = '';
        }
           

        }
});



$btnCancelar = document.getElementById("btnCancelar");
$btnCancelar.addEventListener("click", () => {
  document.getElementById('linea').value = '';
  document.getElementById('tramite').value = '';
  document.getElementById('txtNumero').value = '';
  document.getElementById('txtCalendario').value = '';

  alert("Turno cancelado");


});



$btnImprimir = document.getElementById("btnImprimir");
$btnImprimir.addEventListener("click", () => {

  window.print(); 

});

