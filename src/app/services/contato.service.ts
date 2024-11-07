import { Injectable } from '@angular/core';
import { Icontato } from '../componentes/contato/icontato';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContatoService {
  private readonly API = 'http://localhost:3000/contatos';

  constructor(private http: HttpClient) {}

  obterContatos(): Observable<Icontato[]> {
    return this.http.get<Icontato[]>(this.API);
  }

  salvarContato(novoContato: Icontato) {
    return this.http.post<Icontato>(this.API, novoContato);
  }
}
