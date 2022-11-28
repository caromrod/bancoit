
const Base = {
    /**
     * Permite almacenar un registro en LocalStorage
     * @param {Key} llave 
     * @param {Value} valor 
     */
    GuardarRepositorio: function (llave, valor)
    {
        window.localStorage.setItem(llave, JSON.stringify(valor));

    },

    /**
     * Permite recuperar un registro del LocalStorage
     * @param {Key} llave 
     */
    ObtenerRepositorio:function (llave)
    {
        return JSON.parse(window.localStorage.getItem(llave)); 
    },

    /**
     * Permite eliminar un registro del LocalStorage
     * @param {key} llave 
     */
    BorrarRepositorio:function(llave){
        window.localStorage.removeItem(llave)
    },

    /**
     * Permite validar si existe una llave almacenada en el LocalStorage
     * @param {key} llave 
     * @returns 
     */
    ValidarLlave:function(llave){
        return window.localStorage.getItem(llave) != undefined;
    },

    /**
     * Registra cuando un usuario presento datos validos
     * @param {key} llave 
     * @param {password} clave
     * @param {username} usuario 
     */
    Logueo:function(usuario, clave)
    {
        let Admin = {usuario:'adm', clave: '1234'};
        if(Admin.usuario == usuario && Admin.clave == clave){
            let hora = new Date();
            let registro = {
                usuario: usuario,
                fecha: hora,
                vigen: hora.setMinutes(15)
            }
            this.GuardarRepositorio('Log_KeyWeb2022', registro);
            window.location = '../administrador/adm.html';
           
        }
        
    
        else  if(Admin.usuario != usuario && Admin.clave != clave){
        
      

                let Lista_usuario = this.ObtenerRepositorio('ListaUsuariosRegistrados');
                if(Lista_usuario.find(x => x.usuario == usuario && x.clave == clave) ){
                    let hora = new Date();
                    let registro = {
                        usuario: usuario,
                        fecha: hora,
                        vigen: hora.setMinutes(15)
                    }
                    this.GuardarRepositorio('Log_KeyWeb2022', registro);
                    window.location = '../cuenta/cuenta.html';
        

                }
                else{
                    alert('ERROR, usuario no registrado o contraseña incorrecta')
                    document.getElementById('txtUsuario').value = '';
                    document.getElementById('txtClave').value = '';

                }
             
            
            }

      
    },
  

/**
 * //agregar usuarios con todos sus datos
 * @param {username} usuario 
 * @param {password} clave 
 */
AgregarUsuario: function(nombre, telefono, usuario, email, clave){
    
    if(this.ValidarLlave('ListaUsuariosRegistrados'))
    {
        let usuarios = this.ObtenerRepositorio('ListaUsuariosRegistrados');
        usuarios.push({ nombre: nombre, telefono: telefono, usuario: usuario, email: email, clave: clave });
        this.GuardarRepositorio('ListaUsuariosRegistrados', usuarios);
    } 
    else 
    {
        let usuarios = [];
        let Nuevousuario ={  
            nombre: nombre, 
            telefono: telefono, 
            usuario: usuario, 
            email: email, 
            clave: clave };
        usuarios.push(Nuevousuario);
        this.GuardarRepositorio('ListaUsuariosRegistrados', usuarios);
    }
},

  /**
     * Elimina el registro de logueo exitoso
     * @param {username} usuario 
     */
   Deslogueo: function(usuario){
    this.BorrarRepositorio('Log_KeyWeb2022');
    this.ValidarLogin();
},
/**
 * Valida si se inicio session
 */
ValidarLogin:function(){
    if(!this.ValidarLlave('Log_KeyWeb2022'))
    {
        
        window.location = '../index/index.html';
        alert('Su sesion a finalizado.');
    }
},

/**
 * CARGAR DATOS: a la cuenta adm
 */
 CargarDatos:function(){
//en proceso de desarrollo
}


};


        






        





