const $btnEnviar  = document.getElementById("btnEnviar");
$btnEnviar.addEventListener("click", () => {

    let nombre = document.getElementById('txtNombre').value;
    let email = document.getElementById('txtEmail').value;
      if (nombre == "" || email == "" )
      {
        alert("Debes completar tus datos");
        document.getElementById('txtNombre').value = '';
        document.getElementById('txtEmail').value = '';
        document.getElementById('txtTexto').value = ''; 

        

      }else 
      {              
     
         
        const openEls = document.querySelectorAll("[data-open]");
        const closeEls = document.querySelectorAll("[data-close]");
        const esVisible= "es-visible";



            for (const el of openEls){
            el.addEventListener("click", function(){
                const modalId= this.dataset.open;
                document.getElementById(modalId).classList.add(esVisible);
            });
            }

            for (const el of closeEls){
            el.addEventListener("click", function(){      
            this.parentElement.parentElement.parentElement.classList.remove(esVisible);
            document.getElementById('txtNombre').value = '';
            document.getElementById('txtEmail').value = '';
            document.getElementById('txtTexto').value = '';
            });
        }
      }
  
});








