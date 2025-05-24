import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent {
  titulo: string = 'Sobre Nós';
  descricao: string = 'Bem-vindo ao Grãos de Amor! Um espaço criado com paixão pelo café e pela arte de compartilhar momentos especiais.';
  missao: string = 'Oferecemos qualidade, aconchego e um toque de carinho em cada xícara servida.';
  valores: string[] = ['Qualidade', 'Acolhimento', 'Amor pelo café', 'Sustentabilidade'];

  // Gerenciamento de visibilidade das respostas
  respostasVisiveis: { [key: number]: boolean } = {};

  constructor() {}

  obterValores(): string {
    return this.valores.join(', ');
  }

  toggleResposta(id: number): void {
    this.respostasVisiveis[id] = !this.respostasVisiveis[id];
  }
}
