using Banco.Banco.Unidades;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Apis.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuariosController : ControllerBase
    {
        private readonly IBanco_Unidades usuarios;

        public UsuariosController(IBanco_Unidades _usuarios)
        {
          this.usuarios = _usuarios;
        }


        [HttpGet]
        [Route("ObtenerUsuarios")]

        public IActionResult ObtenerUsuarios()
        {
            return Ok(usuarios.Usuarios());
        }
    }
}
