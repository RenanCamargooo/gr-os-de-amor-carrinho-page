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
  titulo = 'Sobre Nós';
  descricao = 'Bem-vindo ao Grãos de Amor! Um espaço criado com paixão pelo café e pela arte de compartilhar momentos especiais.';
  missao = 'Oferecemos qualidade, aconchego e um toque de carinho em cada xícara servida.';
  valores = ['Qualidade', 'Acolhimento', 'Amor pelo café', 'Sustentabilidade'];

  respostasVisiveis: Record<number, boolean> = {};

  constructor() {}

  obterValores(): string {
    return this.valores.join(', ');
  }

  toggleResposta(id: number): void {
    this.respostasVisiveis[id] = !this.respostasVisiveis[id];
  }
}
