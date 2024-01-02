import { Injectable, ɵɵsetComponentScope } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, catchError, retry, tap } from 'rxjs';
import { Rastreamento } from '../models/rastreamento';


@Injectable({
  providedIn: 'root'
})

export class RastreamentoService {
  url = 'https://localhost:7099/rastrear'

  urlPut = 'https://localhost:7099/atualizar'

  urlPost = 'https://localhost:7099/cadastrar'

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type':'application/json' })
  }


  getRastreio(): Observable<Rastreamento[]>{
   console.log('fazendo solicitação');
   
   return this.httpClient.get<Rastreamento[]>(this.url);
  }

  getRastreioByID(id:string): Observable<Rastreamento>{
   console.log('fazendo solicitação:', id);
    
    return this.httpClient.get<Rastreamento>(this.url + '/' + id )
  }
  

  cadastrarRastreio(rastreio: Rastreamento): Observable<any> {
    return this.httpClient.post<any>(this.urlPost, rastreio, this.httpOptions).pipe(
      tap(response => console.log('Resposta do POST:', response))
    );
  }

  atualizarRastreio(id: string, rastreamentoAtualizado: Rastreamento): Observable<Rastreamento> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.put<Rastreamento>(this.urlPut + '/' + id, rastreamentoAtualizado, { headers });
  }
}
