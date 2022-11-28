using Banco.AccesoADatos.Contexto;
using Banco.AccesoADatos.Entidades_DTO;

namespace Banco.AccesoADatos.Repositorio
{
    public class Repo_Usuarios : BaseRepositorio<DTO_Usuarios>, IRepo_Usuarios
    {
        public Repo_Usuarios(BD_contexto _contexto) : base(_contexto)
        {

        }

        public List<DTO_Usuarios> ObtenerUsuarios()

        {
            return ObtenerTodo().ToList();
        
        }


    }

}

       