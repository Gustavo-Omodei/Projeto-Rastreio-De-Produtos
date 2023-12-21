using Microsoft.AspNetCore.Mvc;
using Rastreio.Models;

namespace Rastreio.Controllers
{
    public class RastreioController : Controller
    {
        [HttpGet]
        public ActionResult RastrearProdutos(Rastreamento rastreio)
        {
            RastreioDeProdutosContext context = new RastreioDeProdutosContext();
            Cliente cliente = new Cliente();
            rastreio.DestinoFinal = cliente.Endereco;


            context.Rastreamentos.ToList();

            return View(rastreio);
        }



    }
}
