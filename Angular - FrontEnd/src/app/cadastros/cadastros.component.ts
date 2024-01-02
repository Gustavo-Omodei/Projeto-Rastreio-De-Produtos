import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { Rastreamento } from '../models/rastreamento';
import { RastreamentoService } from '../services/rastreamento.service';

@Component({
  selector: 'app-cadastros',
  templateUrl: './cadastros.component.html',
  styleUrl: './cadastros.component.css'
})
export class CadastrosComponent {
  title = 'Rastreio';
  rastreio = {} as Rastreamento;
  rastreios: Rastreamento[] = [];

  constructor(private rastreamentoService: RastreamentoService){}

  ngOnInit(){
    this.getRastreio()
  }

  getRastreio(){
    this.rastreamentoService.getRastreio().subscribe((rastreios: Rastreamento[]) =>{
      this.rastreios = rastreios;
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
}
