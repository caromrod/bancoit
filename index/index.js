$btnAbrir = document.getElementById("btnNewsletter");
$btnAbrir.addEventListener("click", () => {
 
    let input = document.getElementById("txtEmail").value;
    if (input == ""){
        alert("Error. Complete los datos") ;
        document.getElementById('txtEmail').value = '';
    }else{
        if (/^\S+@\S+\.\S+$/.test(input) == true)
        {   document.getElementById("lienzo").innerHTML = lienzo;
            lienzo = "Suscrito!";
            document.getElementById('txtEmail').value = '';
        }else{
            alert("Error. Formato de email inválido");
            document.getElementById('txtEmail').value = '';
        }

      }
      

});


