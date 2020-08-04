import { Component, OnInit } from '@angular/core';
import { Person } from '../../model/person'

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})

export class InputComponent implements OnInit {

  person: Person;

  arrName = []
  constructor() { 
    this.person = new Person();
  }

  ngOnInit(): void {
  }

  save(person: Person){
    console.log(person);
    this.arrName.push(person);
  }

}
