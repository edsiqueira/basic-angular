import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Client } from 'src/app/model/client';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

@Input() client: Client;
@Output() updateClient = new EventEmitter<Client>();
@Output() removeClient = new EventEmitter<any>();

onEdit: boolean = false;

name: string;
age: number;

  constructor() { }

  ngOnInit(): void {
  }

  save(){
    this.onEdit = false;
    this.updateClient.emit(
      {name: this.name, age: this.age}
    );
  }

  edit(){
    this.onEdit = true;
    this.name = this.client.name;
    this.age = this.client.age;
  }

  remove(){
    this.removeClient.emit();
  }
}
