import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service'; 
import { Usuario } from '../models/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario: Usuario = { username: '', senha: '' };
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService) {}

  fazerLogin() {
  console.log(this.usuario)
    this.authService.autenticar(this.usuario).subscribe(
      (response) => {
        console.log('Autenticação bem-sucedida:', response);
        this.isLoggedIn = this.authService.getIsLoggedIn();
        

      },
      (error) => {
        console.error('Falha na autenticação:', error);
      }
    );
  }
}