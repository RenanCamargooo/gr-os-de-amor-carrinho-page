import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CarrinhoService {
  private itens: any[] = [];
  private itensSubject = new BehaviorSubject<any[]>([]);

  // Observable que emite a quantidade de itens
  private quantidadeSubject = new BehaviorSubject<number>(0);
  quantidade$ = this.quantidadeSubject.asObservable();

  obterItens() {
    return this.itens;
  }

  adicionarItem(item: any) {
    this.itens.push(item);
    this.atualizarQuantidade();
  }

  limparCarrinho() {
    this.itens = [];
    this.atualizarQuantidade();
  }

  atualizarItens(novosItens: any[]) {
    this.itens = novosItens;
    this.atualizarQuantidade();
  }

  private atualizarQuantidade() {
    this.quantidadeSubject.next(this.itens.length);
  }
}
