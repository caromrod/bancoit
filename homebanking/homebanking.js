$btnSignIn  = document.querySelector("#btnIngresar");
$btnSignIn.addEventListener("click", () => {
    let usuario = $('#txtUsuario').val();
    let clave = $('#txtClave').val();
    Base.Logueo(usuario, clave); 
    
});
