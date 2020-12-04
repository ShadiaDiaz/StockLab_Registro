using Microsoft.EntityFrameworkCore.Migrations;

namespace Datos.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Docente",
                columns: table => new
                {
                    Identificacion = table.Column<string>(type: "varchar(13)", maxLength: 13, nullable: false),
                    Nombres = table.Column<string>(type: "varchar(25)", maxLength: 25, nullable: false),
                    Apellidos = table.Column<string>(type: "varchar(25)", maxLength: 25, nullable: false),
                    Edad = table.Column<int>(type: "int", nullable: false),
                    Sexo = table.Column<string>(type: "varchar(11)", maxLength: 11, nullable: true),
                    Correo = table.Column<string>(type: "varchar(30)", nullable: true),
                    Password = table.Column<string>(type: "varchar(15)", nullable: true),
                    Estado = table.Column<string>(type: "varchar(8)", nullable: true),
                    Tipo = table.Column<string>(type: "varchar(15)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Docente", x => x.Identificacion);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Docente");
        }
    }
}
