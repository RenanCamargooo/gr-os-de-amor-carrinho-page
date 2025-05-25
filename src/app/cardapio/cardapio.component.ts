import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CarrinhoService } from '../services/carrinho.service';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css']
})
export class CardapioComponent {
  produtos = [
    {
      nome: 'Espresso',
      preco: 6.0,
      imagem: 'assets/cafe-expresso.png',
      descricao: 'Café forte e concentrado em pequena dose.',
    },
    {
      nome: 'Cappuccino',
      preco: 9.0,
      imagem: 'assets/cappuccino.png',
      descricao: 'Café com leite vaporizado e espuma.',
    },
    {
      nome: 'Latte',
      preco: 8.0,
      imagem: 'assets/latte.png',
      descricao: 'Café com mais leite que o cappuccino.',
    },
    {
      nome: 'Mocha',
      preco: 10.0,
      imagem: 'assets/mocha.png',
      descricao: 'Latte com calda de chocolate.',
    },
    {
      nome: 'Café Gelado',
      preco: 7.0,
      imagem: 'assets/cafe-gelado.png',
      descricao: 'Café frio com gelo e açúcar.',
    },
    {
      nome: 'Macchiato',
      preco: 7.5,
      imagem: 'assets/macchiato.png',
      descricao: 'Espresso com um toque de leite.',
    },
    {
      nome: 'Affogato',
      preco: 12.0,
      imagem: 'assets/affogato.png',
      descricao: 'Bola de sorvete com café quente.',
    },
    {
      nome: 'Café com Canela',
      preco: 7.5,
      imagem: 'assets/cafe-canela.png',
      descricao: 'Espresso com um toque de canela.',
    },
  ];

  constructor(
    private carrinhoService: CarrinhoService,
    private router: Router
  ) {}

  adicionarAoCarrinho(produto: any) {
    this.carrinhoService.adicionarItem(produto);
    this.router.navigate(['/carrinho']); // Redireciona para o carrinho
  }
}
