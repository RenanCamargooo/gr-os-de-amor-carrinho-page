import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { CarrinhoService } from '../services/carrinho.service';

@Component({
  selector: 'app-carrinho',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  itens: any[] = [];

  constructor(private carrinhoService: CarrinhoService, private router: Router) {}

  ngOnInit() {
    this.itens = this.carrinhoService.obterItens();
  }

  finalizarPedido() {
    this.carrinhoService.limparCarrinho();
    this.router.navigate(['/finalizacao']);
  }

  calcularTotal() {
    return this.itens.reduce((soma, item) => soma + item.preco, 0);
  }

  removerItem(index: number) {
    this.itens.splice(index, 1);
    this.carrinhoService.atualizarItens(this.itens);
  }
}
