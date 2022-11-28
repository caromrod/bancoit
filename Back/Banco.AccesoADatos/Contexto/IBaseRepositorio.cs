using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Banco.AccesoADatos.Contexto
{
    public interface IBaseRepositorio<TEntidad> where TEntidad : class
    {
        DbSet<TEntidad> BdSetEntidad { get; }


        IQueryable<TEntidad> ObtenerTodo();
       
    }
   
}
