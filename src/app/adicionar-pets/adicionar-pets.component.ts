import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Animal } from '../shared/animal';
import { AdicionarService } from './service/adicionar.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-adicionar-pets',
  templateUrl: './adicionar-pets.component.html',
  styleUrls: ['./adicionar-pets.component.scss']
})
export class AdicionarPetsComponent {
  animal = new Animal(0, '', '', '')

  constructor(private adicionarService: AdicionarService, private router: Router) {}

  onSubmit() {
    this.adicionarService.cadastrar(this.animal).subscribe(
      {
        next: () => this.router.navigateByUrl('lista-pets'),
        error: (erro) => console.log(erro.error.message)
      }
    )
  }

}
