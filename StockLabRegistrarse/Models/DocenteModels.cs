using Entity;
namespace StockLabRegistrarse.Models
{
    public class DocenteInputModels
    {
        public string Identificacion { get; set; }
        public string Nombres { get; set; }
        public string Apellidos { get; set; }
        public int Edad { get; set; }
        public string Sexo { get; set; }
        public string Correo { get; set; }
        public string Password { get; set; }
    }
    public class DocenteViewModel : DocenteInputModels
    {
        public DocenteViewModel()
        {

        }

        public DocenteViewModel(Docente docente)
        {

            Identificacion = docente.Identificacion;
            Nombres = docente.Nombres;
            Edad = docente.Edad;
            Sexo = docente.Sexo;
            Correo = docente.Correo;
            Password = docente.Password;


        }
    }
}