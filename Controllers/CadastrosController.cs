using Microsoft.AspNetCore.Mvc;
using Rastreio.Models;

namespace Rastreio.Controllers
{
    public class CadastrosController : Controller
    {

        [HttpGet]
        public ActionResult CadastrarCliente()
        {
            return View();
        }

        [HttpPost]
        public ActionResult CadastrarCliente(Cliente cliente)
        {
            RastreioDeProdutosContext contexto = new RastreioDeProdutosContext();
            if (ModelState.IsValid)
            {
                contexto.Clientes.Add(cliente);
                contexto.SaveChanges();

                return RedirectToAction("CadastrarCliente");
            }

            return View(cliente);
        }

        [HttpGet]
        public ActionResult CadastrarProduto()
        {
            return View();
        }


        [HttpPost]
        public ActionResult CadastrarProduto(Produto produtos)
        {
            RastreioDeProdutosContext contexto = new RastreioDeProdutosContext();
            if (ModelState.IsValid)
            {
                contexto.Produtos.Add(produtos);
                contexto.SaveChanges();

                return RedirectToAction("CadastrarProduto");
            }

            return View(produtos);
        }
    }
}
