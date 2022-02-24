import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-control-counter',
  templateUrl: './control-counter.component.html',
  styleUrls: ['./control-counter.component.css']
})
export class ControlCounterComponent implements OnInit {

  startEvent: boolean = false; // not started initially
  disableInput: boolean = false;
  countStartEvent: number = 0;
  countPauseEvent: number = 0;
  @ViewChild('timerInput', {static: true}) timerInput: ElementRef;
  @Output() startOrPause = new EventEmitter<any>();
  showErrorMsg: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  startPauseCounter(e: any){
    console.log(this.startEvent)
    if(parseInt(this.timerInput.nativeElement.value)){
      this.disableInput = true;
      this.showErrorMsg = '';
      this.startEvent = !this.startEvent;
      if(this.startEvent){
        // Event started
        this.countStartEvent = this.countStartEvent + 1;
      } else{
        // Event Paused 
        this.countPauseEvent = this.countPauseEvent + 1;
      }
  
      console.log("User Input Value--", this.timerInput.nativeElement.value)
      this.startOrPause.emit({
        eventType:this.startEvent ? 'start' : 'pause',
        countStartEvent: this.countStartEvent,
        countPauseEvent: this.countPauseEvent,
        timerDuration: this.timerInput.nativeElement.value
      })
    } else{
      this.showErrorMsg = 'Invalid Input';
    } 
    
  }

  resetTimer(){
    this.disableInput = false; 
    this.startOrPause.emit({
      eventType:'reset',
      countStartEvent: 0,
      countPauseEvent: 0,
      timerDuration: '--'
    });
    this.startEvent = false;
    this.countStartEvent = 0;
    this.countPauseEvent = 0;
    this.timerInput.nativeElement.value = null;
  }
}
