
const $btnRegistrar  = document.getElementById("btnRegistrar");
$btnRegistrar.addEventListener("click", () => {
  let clave1 = document.getElementById('txtClave').value;
  let clave2 = document.getElementById('txtClave2').value;
    let input = document.querySelector("input").value;
      if (input == ""){
        alert("Debes llenar los campos");
      }

      else if( clave1 == clave2){
        
        let nombre = $('#txtNombre').val();
        let telefono = $('#txtTelefono').val();
        let usuario = $('#txtUsuario').val();
        let email = $('#txtEmail').val();
        let clave = $('#txtClave').val();
        Base.AgregarUsuario(nombre, telefono, usuario, email, clave);
    
        //LIMPIAR LOS INPUTS
      
        document.getElementById('txtNombre').value = '';
        document.getElementById('txtTelefono').value = '';
        document.getElementById('txtUsuario').value = '';
        document.getElementById('txtEmail').value = '';
        document.getElementById('txtClave').value = '';
        document.getElementById('txtClave2').value = '';
    
        alert("Registro exitoso");

      }
      else{
        alert("Las claves ingresadas no coinciden");
        document.getElementById('txtNombre').value = '';
        document.getElementById('txtTelefono').value = '';
        document.getElementById('txtUsuario').value = '';
        document.getElementById('txtEmail').value = '';
        document.getElementById('txtClave').value = '';
        document.getElementById('txtClave2').value = '';
      }
    
    
    

});
