import { Component } from '@angular/core';
import { ContainerComponent } from '../../componentes/container/container.component';
import { FormularioContatoComponent } from '../formulario-contato/formulario-contato.component';
import { Icontato } from '../../componentes/contato/icontato';

@Component({
  selector: 'app-perfil-contato',
  standalone: true,
  imports: [ContainerComponent, FormularioContatoComponent],
  templateUrl: './perfil-contato.component.html',
  styleUrl: './perfil-contato.component.css',
})
export class PerfilContatoComponent {
  contato: Icontato = {
    id: 0,
    nome: 'dev',
    telefone: '61-9-9999-9999',
    email: 'dev@email.com',
    aniversario: '07/11/2024',
    redes: 'dev.com',
  };
}
