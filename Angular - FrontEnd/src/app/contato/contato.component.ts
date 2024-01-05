import { Component } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css'
})
export class ContatoComponent {


  enviarForm(){
    var telInput = document.getElementById('telefone');

    if (telInput instanceof HTMLInputElement) {
      var tel = telInput.value;

    if(tel && tel!== '000'){
      alert("Mensagem enviada com sucesso")

    }
  
  }
}
}


