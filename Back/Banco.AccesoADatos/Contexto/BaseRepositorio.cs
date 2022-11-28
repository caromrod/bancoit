using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Banco.AccesoADatos.Contexto
{
    public class BaseRepositorio<TEntidad> : IBaseRepositorio<TEntidad> where TEntidad : class
    {
        private DbSet<TEntidad> _dbSet;
        public DbSet<TEntidad> BdSetEntidad {
            get {
                _dbSet = _dbSet ?? contexto.Set<TEntidad>();
                return _dbSet; }
            
             }


        protected readonly BD_contexto contexto;

        public BaseRepositorio(BD_contexto _contexto)
        {
            this.contexto = _contexto;
            _dbSet = _contexto.Set<TEntidad>();
        }


        public IQueryable<TEntidad> ObtenerTodo()
        {
            return _dbSet.AsNoTracking();

        }
    }

 
}
