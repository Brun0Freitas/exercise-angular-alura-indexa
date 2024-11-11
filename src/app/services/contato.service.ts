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

  salvarContato(novoContato: Icontato): Observable<Icontato> {
    return this.http.post<Icontato>(this.API, novoContato);
  }

  buscarPorId(id: number): Observable<Icontato> {
    const url = `${this.API}/${id}`;
    return this.http.get<Icontato>(url);
  }

  excluirContato(id: number): Observable<Icontato> {
    const url = `${this.API}/${id}`;
    return this.http.delete<Icontato>(url);
  }

  editarContato(contato: Icontato): Observable<Icontato> {
    const url = `${this.API}/${contato.id}`;
    return this.http.put<Icontato>(url, contato);
  }

  editarOuSalvar(contato: Icontato): Observable<Icontato> {
    if (contato.id) {
      return this.editarContato(contato);
    } else {
      return this.salvarContato(contato);
    }
  }
}
