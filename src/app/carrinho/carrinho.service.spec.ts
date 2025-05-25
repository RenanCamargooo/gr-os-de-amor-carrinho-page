import { TestBed } from '@angular/core/testing';

import { CarrinhoService } from './carrinho.service';

describe('CarrinhoService', () => {
  let service: CarrinhoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarrinhoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deve adicionar um item ao carrinho', () => {
  service.adicionarItem({ nome: 'Espresso', preco: 6.00 });
  expect(service.obterItens().length).toBe(1);
  expect(service.obterItens()[0].nome).toBe('Espresso');
});

it('deve limpar o carrinho', () => {
  service.adicionarItem({ nome: 'Latte', preco: 8.00 });
  service.limparCarrinho();
  expect(service.obterItens().length).toBe(0);
});


it('deve atualizar os itens do carrinho', () => {
  const novosItens = [
    { nome: 'Mocha', preco: 10.00 },
    { nome: 'Affogato', preco: 12.00 }
  ];
  service.atualizarItens(novosItens);
  expect(service.obterItens().length).toBe(2);
  expect(service.obterItens()[1].nome).toBe('Affogato');
});

it('deve emitir a quantidade correta de itens', (done: DoneFn) => {
  service.quantidade$.subscribe(quantidade => {
    expect(quantidade).toBe(1);
    done();
  });
  service.adicionarItem({ nome: 'Café Gelado', preco: 7.00 });
});

});
