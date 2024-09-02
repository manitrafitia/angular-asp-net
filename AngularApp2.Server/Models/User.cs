using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace AngularApp2.Server.Models
{
    public class User
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        public string? Nom { get; set; }

        public string? Prenoms { get; set; }

        public string? Email { get; set; }

        public string? Tel { get; set; }
    }
}
