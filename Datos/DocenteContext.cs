namespace Datos
{
    using System;
    using Entity;
    using Microsoft.EntityFrameworkCore;   
    public class DocenteContext:DbContext
    {

       public DocenteContext(DbContextOptions options):base(options)
        {
            
        } 
       public DbSet<Docente> Docente { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            
        } 
    }
}