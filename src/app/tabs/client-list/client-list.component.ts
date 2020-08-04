import { Component, OnInit } from '@angular/core';
import {Client} from '../../model/client';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})

export class ClientListComponent implements OnInit {

  name: string;
  age: number;

  clients: Client[] = [];

  constructor() { }



  ngOnInit(): void {
  }

  save(){
    this.clients.push(
      {name: this.name, age: this.age}
    );

    this.name = "";
    this.age = 0;
  }

  deleteClient(i){
    this.clients.splice(i, 1);
  }

  updateClient(c: Client, i){
    this.clients[i] = c;
  }

}
