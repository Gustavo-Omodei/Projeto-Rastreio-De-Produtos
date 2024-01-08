using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Rastreio.Models;
using System.Collections.Generic;

namespace Rastreio.Controllers
{
    public class RastreioController : Controller
    {
        private readonly IJWTAuthenticationManager jwt;

        public RastreioController(IJWTAuthenticationManager jwt)
        {
            this.jwt = jwt;
        }

        [HttpGet]
        [Route("/rastrear/{codigoRastreio}")]
        public async Task<ActionResult> RastrearProdutosAsync(string codigoRastreio) 
        {
            try
            {
                RastreioDeProdutosContext context = new RastreioDeProdutosContext();
                Rastreamento rastreio = new Rastreamento();
                Cliente cliente = new Cliente();

                var rastreamento = await context.Rastreamentos.FirstOrDefaultAsync(c => c.CodigoRastreio == codigoRastreio);

                if (rastreamento == null)
                {
                    return NotFound();
                }

                rastreio.DestinoFinal = cliente.Endereco;

                return Ok(rastreamento);
            }
            catch (Exception ex)
            {
                return StatusCode(500, "Erro interno do servidor");
            }
        }

        [HttpGet]
        public ActionResult CadastrarRastreio()
        {
            return Ok();
        }

        [HttpPost]
        [Route("/cadastrar")]
        public ActionResult CadastrarRastreio([FromBody]Rastreamento rastreio)
        {
            RastreioDeProdutosContext context = new RastreioDeProdutosContext();

            Cliente cliente = context.Clientes.Find(rastreio.FkCliente);

            if( cliente != null)
            {
                rastreio.DataEvento = DateTime.Now;
                rastreio.DestinoFinal = cliente.Endereco;

                if (ModelState.IsValid)
                {
                    context.Rastreamentos.Add(rastreio);
                    context.SaveChanges();
                    return CreatedAtAction(nameof(CadastrarRastreio), new { id = rastreio.Id }, rastreio);
                }
                return BadRequest(ModelState);
            }

            return NotFound("Cliente não encontrado");

        }

        [HttpGet]
        [Route("/atualizar/{codigoRastreio}")]

        public ActionResult AtualizarRastreio()
        {
            return Ok();
        }

        [HttpPut]
        [Route("/atualizar/{codigoRastreio}")]
        public async Task<ActionResult> AtualizarRastreio(string codigoRastreio, [FromBody] Rastreamento rastreamentoAtualizado)
        {
            try
            {
                RastreioDeProdutosContext context = new RastreioDeProdutosContext();

                var rastreamentoExistente = await context.Rastreamentos.FirstOrDefaultAsync(c => c.CodigoRastreio == codigoRastreio);

                if (rastreamentoExistente == null)
                {
                    return NotFound();
                }
                rastreamentoExistente.DataEvento = DateTime.Now;
                rastreamentoExistente.StatusEvento = rastreamentoAtualizado.StatusEvento;
                rastreamentoExistente.DestinoFinal = rastreamentoAtualizado.DestinoFinal;

                await context.SaveChangesAsync();

                return Ok(rastreamentoExistente);
            }
            catch (Exception)
            {
                return StatusCode(500, "Erro interno do servidor");

            }
        }

        [HttpPost("autenticar")]
        public IActionResult Autenticar([FromBody] Usuario usuario)
        {

            if (usuario == null)
            {
                return BadRequest("Usuário não fornecido");
            }
            var token = jwt.Authenticate(usuario.Username, usuario.Senha);


            if (token == null)
            {
                return Unauthorized();
            }

            return Ok(token);
        }
    }
}
