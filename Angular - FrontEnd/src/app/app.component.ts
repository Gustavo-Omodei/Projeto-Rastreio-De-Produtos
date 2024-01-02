import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Rastreamento } from './models/rastreamento';
import { RastreamentoService } from './services/rastreamento.service';
import { error } from 'console';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rastreio';
  rastreio = {} as Rastreamento;
  rastreios: Rastreamento[] = [];
  teste : Rastreamento = {} as Rastreamento;
  rastreamentoID: string = '';

  constructor(private rastreamentoService: RastreamentoService){}

  ngOnInit(){
    this.getRastreioByID(this.rastreamentoID)
  }

  getRastreio(){
    this.rastreamentoService.getRastreio().subscribe((rastreios: Rastreamento[]) =>{
      this.rastreios = rastreios;
    });
  }
  
  getRastreioByID(id: string) {
    this.rastreamentoService.getRastreioByID(id).subscribe((teste: Rastreamento) => {
      this.teste = teste;
    });
    
  }

  cadastrarRastreio() {
    this.rastreamentoService.cadastrarRastreio(this.rastreio).subscribe(
      (response) => {
        console.log('Rastreio cadastrado:', response);
        this.getRastreio();
      },
      (error) => {
        console.error('Erro ao cadastrar rastreio:', error);
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

