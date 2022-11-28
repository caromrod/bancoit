using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Banco.AccesoADatos.Contexto
{
    using Banco.AccesoADatos.Entidades_DTO;
    using Microsoft.EntityFrameworkCore;
    public partial class BD_contexto : DbContext
    {
        public BD_contexto(DbContextOptions<BD_contexto> opts) : base(opts) { }


            protected override void OnModelCreating(ModelBuilder modelBuilder)
            {
                modelBuilder.Entity<DTO_Usuarios>(entity =>
                {
                    entity.ToTable("Usuarios");

                    entity.Property(e => e.tipo_cliente)
                    .HasColumnName("tipo_cliente")
                    .HasMaxLength(255);




                    entity.Property(e => e.cbu)
                    .HasColumnName("cbu");


                    entity.Property(e => e.alias)
                    .HasColumnName("alias");


                    entity.Property(e => e.TarjetasID)
                    .HasColumnName("TarjetasID");


                    entity.HasKey(e => e.usuarios_id);

                

  
                    

                    /* para llaves foraneas
                    entity.HasOne(d => d.tipo_cliente)
                    .WithMany(p. => p.Tarjetas)
                    */


                });
            /*
           modelBuilder.Entity<DTO_Registro>(entity =>
           {
               entity.ToTable("Registro");

               

               entity.Property(e => e.tipo_cliente)
               .HasColumnName("tipo_cliente")
               .HasMaxLength(255);




               entity.HasKey(e => e.registro_id);
               

        });

            modelBuilder.Entity<DTO_Tarjetas>(entity =>
            {
                entity.ToTable("Tarjetas");
               

                entity.Property(e => e.tipo_cliente)
                .HasColumnName("tipo_cliente")
                .HasMaxLength(255);




                entity.HasKey(e => e.registro_id);
                

            });

                */

                OnModelCreatingPartial(modelBuilder);
            }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);

        public virtual DbSet<DTO_Usuarios> Usuarios { get; set; }
        /*
        public virtual DbSet<DTO_Registro> Registro { get; set; }
        public virtual DbSet<DTO_Tarjetas> Tarjetas { get; set; }
        */

    }



}



    
