using System;
using System.Collections.Generic;

namespace Rastreio.Models;

public partial class Produto
{
    public int Id { get; set; }

    public string? Tipo { get; set; }

    public decimal? Valor { get; set; }

    public string? StatusRastreamento { get; set; }

    public virtual ICollection<Rastreamento> Rastreamentos { get; set; } = new List<Rastreamento>();
}
