import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { EventService } from './event.service';
import { map } from 'rxjs/operators';
import { IEvent } from './event.model';




@Injectable()
export class EventResolver implements Resolve<any> {
constructor (private eventService: EventService) {

}

data: any;
resolve() {

    // this.data=this.eventService.getEvents()

}

}


