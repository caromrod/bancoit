const $btnReservar  = document.getElementById("btnReservar");
$btnReservar.addEventListener("click", () => {
  let input = document.querySelector("input").value;
  let SelTramite = document.getElementById("SelTramite");
  let SelLinea = document.getElementById("SelLinea");
      if (input == "" ){
        alert("Debes llenar los campos");
      }else if(SelTramite.value == "2") {  
        SelLinea.prop('disabled', false);

        SelLinea.disabled = true;
        document.getElementById('txtDatos').value = '';
        document.getElementById('SelTramite').value = '';
        document.getElementById('SelLinea').value = '';
        document.getElementById('txtCalendario').value = '';

    
        alert("Turno exitoso");

      }else {
        document.getElementById('txtDatos').value = '';
        document.getElementById('SelTramite').value = '';
        document.getElementById('SelLinea').value = '';
        document.getElementById('txtCalendario').value = '';

    
        alert("Turno exitoso");

      }
  
});



$btnCancelar = document.getElementById("btnCancelar");
$btnCancelar.addEventListener("click", () => {
  document.getElementById('linea').value = '';
  document.getElementById('tramite').value = '';
  document.getElementById('txtNumero').value = '';
  document.getElementById('txtCalendario').value = '';
});



$btnImprimir = document.getElementById("btnImprimir");
$btnImprimir.addEventListener("click", () => {

  window.print(); 

});
