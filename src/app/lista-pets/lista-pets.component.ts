import { AfterViewChecked,Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-lista-pets',
  templateUrl: './lista-pets.component.html',
  styleUrls: ['./lista-pets.component.scss']
})
export class ListaPetsComponent {
  elementos = ELEMENT_DATA;
// displayedColumns: string[] = ['name', 'endereco', 'contato', 'descricao'];
displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

@ViewChild(MatPaginator) paginator!: MatPaginator;

ngAfterViewInit(){
  this.dataSource.paginator = this.paginator;
}
  
}
// export interface PeriodicElement{
//   name: string;
//   endereco: string;
//   contato: number;
//   descricao: string;
// }
// const ELEMENT_DATA: PeriodicElement[] = [
//   {name: 'samuel', endereco: 'rua ssds numero da casa 3', contato: 82993078111, descricao: 'filhote de liao'},
//   {name: 'alexandre', endereco: 'rua sgffd numero da casa 33585', contato: 82993078111, descricao: 'filhote de liao'},
//   {name: 'jesus', endereco: 'rua dsadas numero da casa 300', contato: 82993078111, descricao: 'filhote de liao'},
//   {name: 'emo', endereco: 'rua trtes numero da casa 5', contato: 82993078111, descricao: 'filhote de liao'},
//   {name: 'josue', endereco: 'rua bgfds numero da casa 3', contato: 82993078111, descricao: 'filhote de liao'},
// ]

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'}
];
