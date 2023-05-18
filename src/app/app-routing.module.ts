import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { ListaPetsComponent } from './lista-pets/lista-pets.component';
import { AdicionarPetsComponent } from './adicionar-pets/adicionar-pets.component';


const routes: Routes = [
  {path: "", component: LoginComponent},
  {path: "cadastro", component: CadastroComponent},
  {path: "adiciona-pet", component: AdicionarPetsComponent},
  {path: "lista-pets", component: ListaPetsComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
