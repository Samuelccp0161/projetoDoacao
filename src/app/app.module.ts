import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { ContentHeaderComponent } from './content-header/content-header.component';
import { MatButtonModule } from '@angular/material/button';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { ListaPetsComponent } from './lista-pets/lista-pets.component';
import { AdicionarPetsComponent } from './adicionar-pets/adicionar-pets.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';  
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion'; 
import { HttpClientModule } from "@angular/common/http";
import {TextFieldModule} from '@angular/cdk/text-field';

@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    ContentHeaderComponent,
    CadastroComponent,
    LoginComponent,
    ListaPetsComponent,
    AdicionarPetsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatListModule,
    MatExpansionModule,
    HttpClientModule,
    TextFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
