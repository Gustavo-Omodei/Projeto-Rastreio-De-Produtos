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
    const valorCodigo = this.rastreio.codigoRastreio
    const valorCPF = this.rastreio.fkCliente

    const regex = /^[0-9]+$/;

    if (regex.test(valorCodigo)){
      this.rastreamentoService.cadastrarRastreio(this.rastreio).subscribe(
        (response) => {
          alert("Rastreio cadastrado com sucesso")
          this.getRastreio();
        },
        (error) => {
          console.error('Erro ao cadastrar rastreio:', error);
        }
      );
    }
    else{
      alert("O código de rastreio deve conter apenas números")
    }

    if (regex.test(valorCPF)){
      this.rastreamentoService.cadastrarRastreio(this.rastreio).subscribe(
        (response) => {
          alert("Rastreio cadastrado com sucesso")
          this.getRastreio();
        },
        (error) => {
          console.error('Erro ao cadastrar rastreio:', error);
        }
      );
    }
    else{
      alert("O CPF do cliente deve conter apenas números")
    }
  }
}
