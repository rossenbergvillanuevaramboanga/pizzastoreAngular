import {Component} from '@angular/core';
import {Cliente} from "../../../core/models/cliente";

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})

export class ClienteListComponent {

  ELEMENT_DATA : Cliente[] =  [
    { id: 1, nome: 'Mario', cognome: 'Rossi', indirizzo: 'indirizzo1', attivo: true},
    { id: 2, nome: 'Mario', cognome: 'Rossi', indirizzo: 'indirizzo1', attivo: true},
    { id: 3, nome: 'Mario', cognome: 'Rossi', indirizzo: 'indirizzo1', attivo: true},
    { id: 4, nome: 'Mario', cognome: 'Rossi', indirizzo: 'indirizzo1', attivo: true}
  ]

  displayedColumns: string[] = ['id', 'nome', 'cognome', 'indirizzo', 'attivo'];
  dataSource = this.ELEMENT_DATA;

}
