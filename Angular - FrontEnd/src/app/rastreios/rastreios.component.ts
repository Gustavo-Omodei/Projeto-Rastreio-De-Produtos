import { Component } from '@angular/core';
import { Rastreamento } from '../models/rastreamento';
import { RastreamentoService } from '../services/rastreamento.service';
@Component({
  selector: 'app-rastreios',
  templateUrl: './rastreios.component.html',
  styleUrl: './rastreios.component.css'
})
export class RastreiosComponent {
  title = 'Rastreio';
  rastreio = {} as Rastreamento;
  rastreios: Rastreamento[] = [];
  teste : Rastreamento = {} as Rastreamento;
  rastreamentoID: string = '';
  rastreamentoAtualizado: Rastreamento = { statusEvento: '' } as Rastreamento;

  constructor(private rastreamentoService: RastreamentoService){}

  ngOnInit(){
    this.getRastreioByID(this.rastreamentoID)
  }

  getRastreioByID(id: string) {
    this.rastreamentoService.getRastreioByID(id).subscribe((teste: Rastreamento) => {
      this.teste = teste;
    console.log('StatusEvento antes da atualização:', this.rastreamentoAtualizado.statusEvento);

    });
  }

  atualizarRastreio(id: string) {
    console.log('StatusEvento antes da atualização:', this.teste.statusEvento);
    
    // Certifique-se de que o objeto rastreamentoAtualizado está sendo preenchido corretamente
    this.rastreamentoService.atualizarRastreio(this.rastreamentoID, this.rastreamentoAtualizado).subscribe(
      (teste) => {
        console.log('Rastreamento atualizado', teste.statusEvento);
      }
    );
  } 

  pesquisarPorId() {
    if (this.rastreamentoID) {
      this.rastreamentoService.getRastreioByID(this.rastreamentoID).subscribe(
        (resultado: Rastreamento) => {
          this.teste = resultado;
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
