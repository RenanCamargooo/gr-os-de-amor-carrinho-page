import { Routes } from '@angular/router';
import { CadastroComponent} from './cadastro/cadastro.component';
import { SobreComponent } from './sobre/sobre.component';
import { CardapioComponent } from './cardapio/cardapio.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { CommonModule } from '@angular/common'; 

import { FinalizacaoComponent } from './finalizacao/finalizacao.component'; 

export const routes: Routes = [
  { path: '', redirectTo: 'cardapio', pathMatch: 'full' },
  { path: 'login', component: CadastroComponent },
  { path: 'cardapio', component: CardapioComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'carrinho', component: CarrinhoComponent },
  { path: 'finalizacao', component: FinalizacaoComponent }, 
  { path: '**', redirectTo: 'cardapio' }
];
