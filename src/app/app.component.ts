import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CarrinhoService } from './services/carrinho.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'grãos-de-amor';
  quantidadeCarrinho = 0;

  constructor(private router: Router, private carrinhoService: CarrinhoService) {
    this.quantidadeCarrinho = this.carrinhoService.obterItens().length;
  }

  navegarPara(caminho: string) {
    this.router.navigate([caminho]);
  }
}
