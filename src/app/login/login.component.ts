import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  onSubmit(): void {
    if (this.username && this.password) {
      console.log('Usuário:', this.username);
      console.log('Senha:', this.password);
    } else {
      console.warn('Usuário ou senha não preenchido.');
    }
  }
}
