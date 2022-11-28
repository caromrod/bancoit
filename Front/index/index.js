$btnAbrir = document.getElementById("btnNewsletter");
$btnAbrir.addEventListener("click", () => {
 
    let input = document.getElementById("txtEmail").value;
    if (input == ""){
        let lienzo = "Complete los datos";
        document.getElementById("lienzo").innerHTML = lienzo;
    }else{
        let lienzo = "Suscrito!";
        document.getElementById("lienzo").innerHTML = lienzo;
        document.getElementById('txtEmail').value = '';
    }


});


