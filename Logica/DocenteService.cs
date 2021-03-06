using System;
using Entity;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using Datos;

namespace Logica
{

    public class DocenteService
    {
        private readonly DocenteContext _context;
        public DocenteService(DocenteContext context)
        {
            _context = context;
        }



        public GuardarDocenteResponse GuardarDocente(Docente docente)
        {
            try
            {
                var buscardocente = _context.Docente.Find(docente.Identificacion);
                if (buscardocente == null)
                {
                    docente.Tipo = "Docente";
                    docente.Estado = "Activo";
                    _context.Docente.Add(docente);
                    _context.SaveChanges();
                    return new GuardarDocenteResponse(docente);
                }
                else
                {
                    return new GuardarDocenteResponse("Duplicado");
                }
            }
            catch (Exception e)
            {
                return new GuardarDocenteResponse($"Error en la aplicacion: {e.Message}");
            }
        }

        public class GuardarDocenteResponse
        {
            public GuardarDocenteResponse(Docente docente)
            {
                Docente = docente;
                Error = false;
            }

            public GuardarDocenteResponse(string mensaje)
            {
                Error = true;
                Mensaje = mensaje;
            }
            public bool Error { get; set; }
            public string Mensaje { get; set; }
            public Docente Docente { get; set; }
        }
    }
}