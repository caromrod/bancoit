using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bancoit.Dominio.Modelos
{
    public class Usuarios
    {
        public int usuarios_id { get; set; }

        public string? tipo_cliente { get; set; }

        public int TarjetasID { get; set; }


        public int cbu { get; set; }


        public string? alias { get; set; }

    }
}
