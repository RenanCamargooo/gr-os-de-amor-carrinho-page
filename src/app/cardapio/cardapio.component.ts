import { Component } from '@angular/core';
import { CarrinhoService } from '../services/carrinho.service';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css']
})
export class CardapioComponent {
  produtos = [
    { nome: 'Espresso', preco: 6.00, imagem: 'assets/cafe-expresso.png' },
    { nome: 'Cappuccino', preco: 9.00, imagem: 'assets/cappuccino.png' },
    { nome: 'Latte', preco: 8.00, imagem: 'assets/latte.png' },
    { nome: 'Mocha', preco: 10.00, imagem: 'assets/mocha.png' },
    { nome: 'Café Gelado', preco: 7.00, imagem: 'assets/cafe-gelado.png' },
    { nome: 'Macchiato', preco: 7.50, imagem: 'assets/macchiato.png' }, 
    { nome: 'Affogato', preco: 12.00, imagem: 'assets/affogato.png' },
    { nome: 'Café com Canela', preco: 7.50, imagem: 'assets/cafe-canela.png' }
  ];

  constructor(private carrinhoService: CarrinhoService) {}

  adicionarAoCarrinho(produto: any) {
    
    this.carrinhoService.adicionarItem(produto);
    alert(`${produto.nome} adicionado ao carrinho!`);
  }
}