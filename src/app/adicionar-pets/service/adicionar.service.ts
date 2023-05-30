import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Animal } from 'src/app/shared/animal';

@Injectable({
  providedIn: 'root'
})
export class AdicionarService {
  private API = "api/animais/publicar"

  constructor(private httpClient: HttpClient) { }

  cadastrar(animal: Animal) {
    return this.httpClient.post(this.API, animal)
  }
}
