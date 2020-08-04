import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  public miliseconds: number = 0;
  public interval: any;
  public runnig: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  start(){
    if(!this.runnig){
      this.interval = setInterval(() => { this.miliseconds += 50}, 50);
    }
    this.runnig = true;
  }

  stop(){
    if(this.runnig){
      clearInterval(this.interval);
      this.runnig = false;
    }
  }

  clear(){
    this.miliseconds = 0;
  }

  round(n: number): number{
    return Math.round(n);
  }
}
