import { Component, OnInit } from '@angular/core';
import { Couter2Service } from '../couter2.service';

@Component({
  selector: 'app-show-timer2',
  templateUrl: './show-timer2.component.html',
  styleUrls: ['./show-timer2.component.css']
})
export class ShowTimer2Component implements OnInit {
  seconds: number = 0;
  activeTimer: any;
  prevLength: number = -1;
  constructor(private counterService: Couter2Service) {}

  ngOnInit(): void {
    this.counterService.counterDetails.subscribe(data => {
      let valid = false, pauseTimer = false;
      let lastIndex = data.eventDetails.length > 0 ? data.eventDetails.length - 1 : 0;
      if (data.eventDetails.length == 0) {
        clearInterval(this.activeTimer);
        this.seconds = 0;
        this.prevLength = -1;
        this.activeTimer = null;
      }
      if (this.prevLength == -1) {
        valid = true;
      } else if (this.prevLength > 0) {
        if (data.eventDetails.length != this.prevLength) {
          valid = true;

          //Pause Timer
          let eventType = data.eventDetails[lastIndex] ? data.eventDetails[lastIndex].eventType : "";
          console.log("Event Type--", eventType)
          if (eventType && eventType.toLowerCase() == 'pause') {
            pauseTimer = true;
          }
        }
      }

      if (valid) {
        if (pauseTimer) {
          let value = this.seconds;
          clearInterval(this.activeTimer);
          this.seconds = value;
        } else {
          if (data.eventDetails.length > 0) {
            this.prevLength = data.eventDetails.length;
          }
          if (this.prevLength > 1 && pauseTimer == false) {
            // Prev to prev trigger was an start event, then a pause event occured and 
            // then another resume event occured.
            // and It was not the 1st trigger. Means it is resumed and not started.
            console.log("Resumed--", this.seconds, this.prevLength)
          } else {
            this.seconds = data.eventDetails[lastIndex] ? data.eventDetails[lastIndex].duration : "--";

          }
          this.startTimer(this.seconds)
        }

      }
    })
  }



  startTimer(seconds: any) {
    let thisObj = this;
    if(seconds != '--'){
      seconds = parseInt(seconds);
      let timerId = setInterval(()=>{
        if(seconds > 0){
          seconds = seconds - 1;
          thisObj.seconds = seconds;
        } else{
          console.log("Clearing timer id--", this.activeTimer);
          this.seconds = 0;
          this.prevLength = -1;
          this.counterService.hideTimeStamps = false;
          this.counterService.startedCount = 0;
          this.counterService.pausedCount = 0;
          this.counterService.eventsArray = [];

          this.counterService.refreshControlCounter.next(true);
          clearInterval(this.activeTimer);
        }
      },1000);
      console.log("Timer Id created is: ", timerId);
      this.activeTimer = timerId;
    }
  }

}
