import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CarrinhoService {
  private itens: any[] = [];
  private quantidadeSubject = new BehaviorSubject<number>(0);
  quantidade$ = this.quantidadeSubject.asObservable();

  constructor() {
    this.carregarCarrinhoDoLocalStorage();
  }

  obterItens() {
    return [...this.itens]; // Retorna uma cópia para evitar alteração direta
  }

  adicionarItem(item: any) {
    this.itens.push(item);
    this.salvarCarrinhoNoLocalStorage();
    this.atualizarQuantidade();
  }

  limparCarrinho() {
    this.itens = [];
    this.salvarCarrinhoNoLocalStorage();
    this.atualizarQuantidade();
  }

  atualizarItens(novosItens: any[]) {
    this.itens = [...novosItens]; // Garante que é uma cópia
    this.salvarCarrinhoNoLocalStorage();
    this.atualizarQuantidade();
  }

  private atualizarQuantidade() {
    this.quantidadeSubject.next(this.itens.length);
  }

  // 🔥 Persiste no LocalStorage
  private salvarCarrinhoNoLocalStorage() {
    localStorage.setItem('carrinho', JSON.stringify(this.itens));
  }

  // 🔥 Carrega do LocalStorage quando inicia
  private carregarCarrinhoDoLocalStorage() {
    const carrinhoSalvo = localStorage.getItem('carrinho');
    if (carrinhoSalvo) {
      try {
        this.itens = JSON.parse(carrinhoSalvo);
        this.atualizarQuantidade();
      } catch (e) {
        console.error('Erro ao carregar carrinho do localStorage:', e);
        this.itens = [];
      }
    }
  }
}
