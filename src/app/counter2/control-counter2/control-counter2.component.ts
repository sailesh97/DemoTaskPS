import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Couter2Service } from '../couter2.service';

@Component({
  selector: 'app-control-counter2',
  templateUrl: './control-counter2.component.html',
  styleUrls: ['./control-counter2.component.css'],
})
export class ControlCounter2Component implements OnInit {

  startEvent: boolean = false; // not started initially
  disableInput: boolean = false;
  countStartEvent: number = 0;
  countPauseEvent: number = 0;
  eventDetails: Array<any> =[];
  @ViewChild('timerInput', { static: true }) timerInput: ElementRef;
  showErrorMsg: string = '';

  constructor(private counterService: Couter2Service) { }

  ngOnInit(): void {
  }

  startPauseCounter() {
    if (parseInt(this.timerInput.nativeElement.value)) {
      this.disableInput = true;
      this.showErrorMsg = '';
      this.startEvent = !this.startEvent;

      // this.counterService.hideTimeStamps = false;

      if (this.startEvent) {
        // Event started
        this.countStartEvent = this.countStartEvent + 1;
        // this.counterService.startedCount = this.countStartEvent;
      } else {
        // Event Paused 
        this.countPauseEvent = this.countPauseEvent + 1;
        // this.counterService.pausedCount = this.countPauseEvent;
      }
      let eventItem = {
        eventType: this.startEvent ? 'start' : 'pause',
        time: Date.now(),
        duration: this.timerInput.nativeElement.value
      };
      this.eventDetails.push(eventItem);
    /*   this.counterService.eventsArray.push(
        eventItem
      ); */


      this.counterService.counterDetails.next({
        hideTimeStamps: false, startedCount: this.countStartEvent,
        pausedCount: this.countPauseEvent, eventDetails: this.eventDetails
      })

    } else {
      this.showErrorMsg = 'Invalid Input';
    }

  }

  resetTimer() {
    this.eventDetails = [];
    this.counterService.counterDetails.next({
      hideTimeStamps: true, startedCount: 0,
      pausedCount: 0, eventType:'reset', eventDetails: []
    })
   /*  this.counterService.startedCount = 0;
    this.counterService.pausedCount = 0;
    this.counterService.hideTimeStamps = true; */

    this.disableInput = false;
    this.startEvent = false;
    this.countStartEvent = 0;
    this.countPauseEvent = 0;
    this.timerInput.nativeElement.value = null;
  }

}
