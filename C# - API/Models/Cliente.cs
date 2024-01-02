using System;
using System.Collections.Generic;

namespace Rastreio.Models;

public partial class Cliente
{
    public string? Cpf { get; set; }

    public string? Nome { get; set; }

    public string? Endereco { get; set; }
    public string? Cep { get; set; }
    public string? Pais { get; set; }

    public virtual ICollection<Rastreamento> Rastreamentos { get; set; } = new List<Rastreamento>();

}
