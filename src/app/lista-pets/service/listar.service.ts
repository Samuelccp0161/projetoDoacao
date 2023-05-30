import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Animal } from 'src/app/shared/animal';

@Injectable({
  providedIn: 'root'
})
export class ListarService {

  private API = "api/animais"


  constructor(private httpClient: HttpClient) { }

  listar(): Observable<Array<Animal>> {
    return this.httpClient.get<Array<Animal>>(this.API, {})
  }
}
