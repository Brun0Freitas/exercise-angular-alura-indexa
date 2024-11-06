import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContatoService } from '../../services/contato.service';
import { RouterLink } from '@angular/router';

import { ContainerComponent } from '../../componentes/container/container.component';
import { CabecalhoComponent } from '../../componentes/cabecalho/cabecalho.component';
import { ContatoComponent } from '../../componentes/contato/contato.component';
import { SeparadorComponent } from '../../componentes/separador/separador.component';
import { FormularioContatoComponent } from '../formulario-contato/formulario-contato.component';
import { Icontato } from '../../componentes/contato/icontato';

@Component({
  selector: 'app-lista-contatos',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule,
    CabecalhoComponent,
    SeparadorComponent,
    ContatoComponent,
    FormsModule,
    ContainerComponent,
    FormularioContatoComponent,
    ListaContatosComponent,
  ],
  templateUrl: './lista-contatos.component.html',
  styleUrl: './lista-contatos.component.css',
})
export class ListaContatosComponent implements OnInit {
  alfabeto: string = 'abcdefghijklmnopqrstuvwxyz';
  listaContatos: Icontato[] = [];

  filtroPorTexto: string = '';

  constructor(private contatoService: ContatoService) {}

  ngOnInit() {
    this.listaContatos = this.contatoService.obterContatos();
  }

  filtrarContatoPorTexto(): Icontato[] {
    if (!this.filtroPorTexto) {
      return this.listaContatos;
    }
    return this.listaContatos.filter((contato) => {
      return contato.nome
        .toLowerCase()
        .includes(this.filtroPorTexto.toLowerCase());
    });
  }

  filtrarContatoPorLetra(letra: string): Icontato[] {
    return this.filtrarContatoPorTexto().filter((contato) => {
      return contato.nome.toLowerCase().startsWith(letra);
    });
  }
}
