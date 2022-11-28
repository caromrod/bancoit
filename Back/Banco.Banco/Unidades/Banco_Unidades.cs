using Banco.AccesoADatos.Contexto;
using Bancoit.Dominio.Modelos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Banco.Banco.Unidades
{
    public class Banco_Unidades : IBanco_Unidades
    {
        internal readonly IUnidadDeTrabajo unidad;

        public Banco_Unidades(IUnidadDeTrabajo _unidad)
        {
            unidad = _unidad;
        }

        public List<Usuarios> Usuarios()
        {
            var lista = unidad.repo_Usuarios.ObtenerUsuarios();
            return lista.Select(x => new Bancoit.Dominio.Modelos.Usuarios
            {
                usuarios_id = x.usuarios_id,
                tipo_cliente = x.tipo_cliente,
                TarjetasID = x.TarjetasID,
                cbu = x.cbu,
                alias = x.alias

            }).ToList();
        }
    }
}
