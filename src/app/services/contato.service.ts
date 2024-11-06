import { Injectable } from '@angular/core';
import { Icontato } from '../componentes/contato/icontato';

@Injectable({
  providedIn: 'root',
})
export class ContatoService {
  private contatos: Icontato[] = [
    { id: 1, nome: 'Ana', telefone: '29 278869420', email: 'email@email.com' },
  ];

  constructor() {
    // obter itens do local storage
    const contatosLocalStoreString = localStorage.getItem('contatos');
    const contatosConvertidos = contatosLocalStoreString
      ? JSON.parse(contatosLocalStoreString)
      : null;

    this.contatos = contatosConvertidos || this.contatos;

    // salver itens no local storage
    localStorage.setItem('contatos', JSON.stringify(this.contatos));
  }

  obterContatos() {
    return this.contatos;
  }

  salvarContato(contato: Icontato) {
    this.contatos.push(contato);
    localStorage.setItem('contatos', JSON.stringify(this.contatos));
  }
}
