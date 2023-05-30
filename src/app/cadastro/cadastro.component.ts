import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { CadastroService } from './service/cadastro.service';
import { Usuario } from '../shared/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent {
  nome = '';
  email = '';
  contato = '';
  senha = '';

  constructor(private cadastroService: CadastroService, private router: Router) {}

  onCadastro() {
    let usuario: Usuario = {
      email: this.email,
      nome: this.nome,
      contato: this.contato,
      senha: this.senha
    } 
    this.cadastroService.cadastrar(usuario).subscribe(
      {
        next: () => this.router.navigateByUrl("/"),
        error: (erro) => console.log(erro.message)
      }
    );
  }
}
