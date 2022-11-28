

using Banco.AccesoADatos.Contexto;
using Banco.AccesoADatos.Entidades_DTO;

namespace Banco.AccesoADatos.Repositorio
{
    public interface IRepo_Usuarios : IBaseRepositorio<DTO_Usuarios>
    {
        public List<DTO_Usuarios> ObtenerUsuarios();
    }
}
