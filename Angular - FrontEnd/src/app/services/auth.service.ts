import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://localhost:7099/autenticar';
  private isAuthenticated: boolean = false;

  login() {
    this.isAuthenticated = true;
  }

  logout() {
    this.isAuthenticated = false;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  constructor(private http: HttpClient, private router: Router) {}

  autenticar(usuario: Usuario): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    this.isAuthenticated = true;
    this.router.navigate(['/cadastro']);
    
    return this.http.post(this.apiUrl, usuario, { headers, responseType: 'text' });
  }

  getIsLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}