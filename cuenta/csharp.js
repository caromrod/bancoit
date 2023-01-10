



function llamarUsuario(){
    $.ajax({
        // la URL para la petición
        url : 'https://localhost:7131/api/Usuarios/ObtenerUsuarios',
    
        // la información a enviar
        // (también es posible utilizar una cadena de datos)
        data : { },
    
        // especifica si será una petición POST o GET
        type : 'GET',
    
        // el tipo de información que se espera de respuesta
        dataType : 'json',
    
        // código a ejecutar si la petición es satisfactoria;
        // la respuesta es pasada como argumento a la función
        success : function(json) {
            $('<p/>').text(json.Tipo_cliente).appendTo('body');
            $('<p/>').text(json.cbu).appendTo('body');
            $('<p/>').text(json.alias).appendTo('body');

         
        },
    
        // código a ejecutar si la petición falla;
        // son pasados como argumentos a la función
        // el objeto de la petición en crudo y código de estatus de la petición
        error : function(xhr, status) {
            alert('Disculpe, existió un problema');
        },
    
        // código a ejecutar sin importar si la petición falló o no
        complete : function(xhr, status) {
            alert('Petición realizada');
        }
    });
}


function llamarUsuario();