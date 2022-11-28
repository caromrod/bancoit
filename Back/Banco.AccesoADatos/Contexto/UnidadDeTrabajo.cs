using Banco.AccesoADatos.Repositorio;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Banco.AccesoADatos.Contexto
{
    public class UnidadDeTrabajo : IUnidadDeTrabajo
    {
        protected readonly BD_contexto contexto;

        public UnidadDeTrabajo(BD_contexto _contexto)
        {
            this.contexto = _contexto;
        }

        public IRepo_Usuarios repo_Usuarios =>  new Repo_Usuarios(contexto);
    }
}
