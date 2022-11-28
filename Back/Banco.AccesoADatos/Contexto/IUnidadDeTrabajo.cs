using Banco.AccesoADatos.Repositorio;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Banco.AccesoADatos.Contexto
{
    public interface IUnidadDeTrabajo
    {
        IRepo_Usuarios repo_Usuarios { get; }
    }
}
