import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  startedCount = 0; // For 4th Component
  pausedCount = 0; // For 4th Component
  eventsArray: Array<any> = [];
  hideTimeStamps: boolean;
  doRefreshControlCounter: any;

  constructor() { }

  ngOnInit(): void {
  }

  updateOtherComponents(e: any) {
    console.log("Event-", e);
    this.hideTimeStamps = false;
    if (e.eventType == 'start') {
      this.startedCount = e.countStartEvent
    } else if (e.eventType == 'pause') {
      this.pausedCount = e.countPauseEvent;
    } else if (e.eventType == 'reset') {
      this.startedCount = 0;
      this.pausedCount = 0;
      this.hideTimeStamps = true;
    }


    if (e.eventType == 'reset') {
      this.eventsArray = [];
    } else {
      this.eventsArray.push({ eventType: e.eventType, time: Date.now(), duration: e.timerDuration });
    }
  }

  refreshControlCounter() {
    this.resetCounterComponent();
  }

  resetCounterComponent() {
    this.eventsArray = [];
    this.startedCount = 0;
    this.pausedCount = 0;
    this.hideTimeStamps = true;
    this.doRefreshControlCounter = new Object();
    this.doRefreshControlCounter.refresh = true;
  }

}
