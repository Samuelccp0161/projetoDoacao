import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-adicionar-pets',
  templateUrl: './adicionar-pets.component.html',
  styleUrls: ['./adicionar-pets.component.scss']
})
export class AdicionarPetsComponent {
  forms!: FormGroup;
  onSubmit(): void {
  }

}
