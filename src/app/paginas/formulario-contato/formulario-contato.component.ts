import { Component } from '@angular/core';
import { ContainerComponent } from '../../componentes/container/container.component';
import { SeparadorComponent } from '../../componentes/separador/separador.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-contato',
  standalone: true,
  imports: [ContainerComponent, SeparadorComponent, ReactiveFormsModule],
  templateUrl: './formulario-contato.component.html',
  styleUrl: './formulario-contato.component.css',
})
export class FormularioContatoComponent {
  contatoForm: FormGroup;

  constructor() {
    this.contatoForm = new FormGroup({
      nome: new FormControl('Bruno'),
      telefone: new FormControl('(17)97070-7070'),
      email: new FormControl('bruno@bb.com.br'),
      aniversario: new FormControl('01/01/2021'),
      redes: new FormControl('bruno@instagram.com'),
      observacoes: new FormControl('Olá, mundo!'),
    });
  }
}
