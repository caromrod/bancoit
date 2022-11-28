const $btnEnviar  = document.getElementById("btnEnviar");
$btnEnviar.addEventListener("click", () => {

    let input = document.querySelector('input').value;
      if (input != "" ){
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
       

      }else 
      {              
        alert("Debes completar tus datos");
        document.getElementById('txtNombre').value = '';
        document.getElementById('txtEmail').value = '';
        document.getElementById('txtTexto').value = '';      
         

      }
  
});








