import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Usuario } from '../models/usuario';
import { Router } from '@angular/router';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://localhost:7099/autenticar';
  private isAuthenticated: boolean = false;

  constructor(private http: HttpClient, private router: Router) {}

  autenticar(usuario: Usuario): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(this.apiUrl, usuario, { headers, responseType: 'text' }).pipe(
      map((response) => {
        this.isAuthenticated = true;
        this.router.navigate(['/cadastro']);
        return response;
      }),
      catchError((error) => {
        console.error('Falha na autenticação:', error);
        alert("Usuário ou senha incorreta")
        return of(error);
      })
    );
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  logout(): void {
    this.isAuthenticated = false;
  }
}