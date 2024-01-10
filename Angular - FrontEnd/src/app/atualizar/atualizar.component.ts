import { Component } from '@angular/core';
import { Rastreamento } from '../models/rastreamento';
import { RastreamentoService } from '../services/rastreamento.service';

@Component({
  selector: 'app-atualizar',
  templateUrl: './atualizar.component.html',
  styleUrl: './atualizar.component.css'
})
export class AtualizarComponent {

  title = 'Rastreio';
  rastreio = {} as Rastreamento;
  rastreios : Rastreamento = {} as Rastreamento;
  rastreamentoID: string = '';
  rastreamentoAtualizado: Rastreamento = { statusEvento: '' } as Rastreamento;

  constructor(private rastreamentoService: RastreamentoService){}

  ngOnInit(){
    this.getRastreioByID(this.rastreamentoID)
  }

  getRastreioByID(id: string) {
    this.rastreamentoService.getRastreioByID(id).subscribe((teste: Rastreamento) => {
      this.rastreios = teste;
    console.log('StatusEvento antes da atualização:', this.rastreamentoAtualizado.statusEvento);

    });
  }

  atualizarRastreio(id: string) {
    console.log('StatusEvento antes da atualização:', this.rastreios.statusEvento);
    this.rastreamentoService.atualizarRastreio(this.rastreamentoID, this.rastreamentoAtualizado).subscribe(
      (response) => {
        console.log('Rastreamento atualizado', response.statusEvento);
      }
    );
  } 

  pesquisarPorId() {
    if (this.rastreamentoID) {
      this.rastreamentoService.getRastreioByID(this.rastreamentoID).subscribe(
        (resultado: Rastreamento) => {
          this.rastreios = resultado;
        },
        (erro) => {
          alert("Código não encontrado");
        }
      );
    } else {
      alert("Por favor, insira um código antes de pesquisar");
    }
  }
}
