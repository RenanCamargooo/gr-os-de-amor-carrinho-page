import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div class="paddings-container">
      <div class="padding-section" routerLink="/cadastro" style="background-image: url('/assets/Cadastro.png')">
        <h2>Vamos</h2>
      </div>
      <div class="padding-section" routerLink="/cardapio" style="background-image: url('/assets/Cardapio.jpeg')">
        <h2>Fazer</h2>
      </div>
      <div class="padding-section" routerLink="/sobre-nos" style="background-image: url('/assets/img-sobrenos.jpeg')">
        <h2>O cadastro lusquinhas (antes de quarta feira)</h2>
      </div>
    </div>
  `,
})
export class CadastroComponent {}
