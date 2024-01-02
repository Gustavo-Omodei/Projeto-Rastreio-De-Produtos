using System;
using System.Collections.Generic;

namespace Rastreio.Models;

public partial class Rastreamento
{
    public int Id { get; set; }

    public string? CodigoRastreio { get; set; }

    public DateTime? DataEvento { get; set; }

    public string? StatusEvento { get; set; }

    public string? FkCliente { get; set; }
    public string? DestinoFinal { get; set; }

    public virtual Cliente? FkClienteNavigation { get; set; }
}
