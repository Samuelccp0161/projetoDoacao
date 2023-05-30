import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LoginService } from './service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email = '';
  senha = '';

  constructor(private loginService: LoginService, private router: Router) {}


  onLogin() {
    let loginSucesso = false;
    this.loginService.logar(this.email, this.senha).subscribe(
      {
        next: () => this.router.navigateByUrl("lista-pets"),
        error: (erro) => console.log(erro)
      }
    )
    
  }

}
