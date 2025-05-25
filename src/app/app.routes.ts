import { Routes } from '@angular/router';

import { SobreComponent } from './sobre/sobre.component';
import { CardapioComponent } from './cardapio/cardapio.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { LoginComponent } from './login/login.component';
import { FinalizacaoComponent } from './finalizacao/finalizacao.component';

export const routes: Routes = [
  { path: '', redirectTo: 'cardapio', pathMatch: 'full' },
  { path: 'cardapio', component: CardapioComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'carrinho', component: CarrinhoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'finalizacao', component: FinalizacaoComponent },
  { path: '**', redirectTo: 'cardapio' }
];
