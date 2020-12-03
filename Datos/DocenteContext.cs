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
       
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            
        } 
    }
}