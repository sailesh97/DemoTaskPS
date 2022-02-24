import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class Couter2Service {
  counterDetails = new Subject<any>();
  refreshControlCounter = new Subject<any>();
  hideTimeStamps: boolean = false;
  startedCount = 0;
  pausedCount = 0;
  eventsArray: Array<any> = [];
  constructor() { }
   
}
