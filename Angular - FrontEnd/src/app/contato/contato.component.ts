import { Component } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css'
})
export class ContatoComponent {
conteudo : string = "";
//Aba Comercial
nameComercial : string = "";
emailComercial : string = "";
telComercial : string = "";
textAreaComercial: string = "";
//Aba Clientes
nameCliente : string = "";
emailCliente : string = "";
telCliente : string = "";
textAreaCliente: string = "";



  enviarFormComercial(){
    const checagemNome = this.nameComercial;
    const checagemEmail= this.emailComercial;
    const checagemTel = this.telComercial;
    const checagemText = this.textAreaComercial;

    const regexName = /^[a-zA-Z\s]+$/;
    const regexEmail =  /^\S+$/;
    const regexNumber= /^[0-9]+$/;
    const regexTextArea = /\S/
    
    console.log("Nome:", checagemNome)
    console.log("Email:", checagemEmail)
    console.log("TEl:", checagemTel)
    console.log("TExt:", checagemText)

    if(regexEmail.test(checagemEmail) && regexName.test(checagemNome)&&regexNumber.test(checagemTel)&&regexTextArea.test(checagemText)){
      alert("Mensagem enviada com sucesso");
    }
   else{
    alert("Dados inválidos")
   }
}

enviarFormCliente(){
  const checagemNome = this.nameCliente;
    const checagemEmail= this.emailCliente;
    const checagemTel = this.telCliente;
    const checagemText = this.textAreaCliente;

    const regexName = /^[a-zA-Z\s]+$/;
    const regexEmail =  /^\S+$/;
    const regexNumber= /^[0-9]+$/;
    const regexTextArea = /\S/
    
    console.log("Nome:", checagemNome)
    console.log("Email:", checagemEmail)
    console.log("TEl:", checagemTel)
    console.log("TExt:", checagemText)

    if(regexEmail.test(checagemEmail) && regexName.test(checagemNome)&&regexNumber.test(checagemTel)&&regexTextArea.test(checagemText)){
      alert("Mensagem enviada com sucesso");
    }
   else{
    alert("Dados inválidos")
   }

}
}


