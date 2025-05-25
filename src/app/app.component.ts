import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CarrinhoService } from './services/carrinho.service';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'grãos-de-amor';
  quantidadeCarrinho = 0;

  constructor(private router: Router, private carrinhoService: CarrinhoService) {
    // Observa quantidade dinamicamente
    this.carrinhoService.quantidade$.subscribe(qtd => {
      this.quantidadeCarrinho = qtd;
    });
  }

  navegarPara(caminho: string) {
    this.router.navigate([caminho]);  
  }
}
