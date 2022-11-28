$btnCerrar = document.querySelector("#btnCerrarSesion");
$btnCerrar.addEventListener("click", () => {
  Base.ValidarLogin();
  Base.Deslogueo();
});

function CargarLista(ev)
{
    var elemento = $('#lienzo');
    $.each(Usuarios, function(ind, valor, arr){
        elemento.append(`<div class="col-sm-6 col-md-4 col-lg-3">
                            <div class="card">
                                <div class="card-header">
                                ${valor.UsuariosId}
                                </div>
                                <div class="card-body">
                                <blockquote class="blockquote mb-0">
                                    <p>${valor.alias}</p>
                                    <p>${valor.cbu}</p>
                                    <p>${valor.Tipo_cliente}</p>
                                </blockquote>
                                </div>
                            </div>
                        </div>`);

    });
}

CargarLista('adm');