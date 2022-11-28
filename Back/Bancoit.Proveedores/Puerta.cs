using Banco.AccesoADatos.Contexto;
using Banco.Banco.Unidades;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Banco.Proveedores
{
    public class Puerta
    {
        protected readonly IServiceCollection IService;

        public Puerta(IServiceCollection _IService)
        {
            IService = _IService;
        }

        public void Ejecutar()
        {
            IService.AddScoped<BD_contexto>();
            IService.AddScoped<IUnidadDeTrabajo, UnidadDeTrabajo>();

            IService.AddScoped<IBanco_Unidades, Banco_Unidades>();
        }
       
    }
}
