namespace StockLabRegistrarse.Controllers
{
    using Microsoft.AspNetCore.Mvc;
    using Logica;
    using Microsoft.Extensions.Configuration;
    using System.Collections.Generic;
    using System.Linq;
    using Entity;
    using Datos;
    using StockLabRegistrarse.Models;
    using Microsoft.AspNetCore.Http;


    [Route("api/[controller]")]
    [ApiController]
    public class DocenteController : ControllerBase
    {
        private readonly DocenteService service;
        public DocenteController(DocenteContext context)
        {
            service = new DocenteService(context);
        }
        // POST: api/Docente
        [HttpPost]
        public ActionResult<DocenteViewModel> Post(DocenteInputModels docenteInput)
        {
            Docente docente = MapearDocente(docenteInput);
            var response = service.GuardarDocente(docente);
            if (response.Error)
            {
                ModelState.AddModelError("Error al registrar Docente", response.Mensaje);
                var detallesproblemas = new ValidationProblemDetails(ModelState);

                detallesproblemas.Status = StatusCodes.Status500InternalServerError;
                return BadRequest(detallesproblemas);
            }
            return Ok(response.Docente);
        }

        private Docente MapearDocente(DocenteInputModels docenteInput)
        {
            var docente = new Docente
            {
                Identificacion = docenteInput.Identificacion,
                Nombres = docenteInput.Nombres,
                Apellidos = docenteInput.Apellidos,
                Edad = docenteInput.Edad,
                Sexo = docenteInput.Sexo,
                Correo = docenteInput.Correo,
                Password = docenteInput.Password,
            };
            return docente;
        }
    }
}