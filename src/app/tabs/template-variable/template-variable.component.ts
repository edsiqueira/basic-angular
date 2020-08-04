import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TimerComponent } from './timer/timer.component';

@Component({
  selector: 'app-template-variable',
  templateUrl: './template-variable.component.html',
  styleUrls: ['./template-variable.component.css']
})
export class TemplateVariableComponent implements OnInit {

@ViewChild('stopwatch2')
public mytimer:TimerComponent;
// @ViewChild('TimerComponent')


@ViewChild('pElem')
private pElem: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  start(){
    this.mytimer.start();
  }

  stop(){
   this.mytimer.stop();
  }

  clear(){
    this.mytimer.clear();
  }

  ngAfterViewInit(){
    console.log(this.pElem);
  }
}
