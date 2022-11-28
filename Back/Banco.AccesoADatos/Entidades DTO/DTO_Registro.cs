

using System.Security.Principal;

namespace Banco.AccesoADatos.Entidades_DTO
{
    public partial class DTO_Registro
    {
        public int registro_id { get; set; }

        public string? nombre { get; set; }

        public int telefono { get; set; }

        public string? alias { get; set; }

        public string? email { get; set; }

        public string? clave { get; set; }




    }
}
