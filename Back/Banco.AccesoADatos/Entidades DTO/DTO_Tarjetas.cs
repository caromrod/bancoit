

using System.Security.Principal;

namespace Banco.AccesoADatos.Entidades_DTO
{
    public partial class DTO_Tarjetas
    {
        public int TarjetasID { get; set; }

        public int Saldo { get; set; }
        public int Saldo_credito { get; set; }
        public int Total_credito { get; set; }
        public int Numero_debito { get; set; }
        public int Numero_credito { get; set; }
        public int Prestamos { get; set; }

        public int Transferencias { get; set; }


    }
}
