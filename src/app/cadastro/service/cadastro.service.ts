import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/shared/usuario';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  private API = "api/usuario/cadastrar"


  constructor(private httpClient: HttpClient) { }

  cadastrar(usuario: Usuario) {
    return this.httpClient.post(this.API, usuario)
  }
}
