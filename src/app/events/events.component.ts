import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/events/shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent  } from '../events/shared/event.model';


declare let toastr;

@Component({

    template: `<div *ngFor="let event of events">
    <events-Thumbnail (click)=ToasterClick(event.name) [event]="event" >
    </events-Thumbnail>


    </div>`,

    styles: ['.thumbnail {min-height : 210px;}']
  })
  export class EventsComponent implements OnInit {
  events: any;
    constructor (private eventService: EventService, private route: ActivatedRoute) {

    }
    ngOnInit() {

      // setTimeout(() => { this.events=this.route.snapshot.data['events']}, 0);
console.log(this.route.snapshot);

      // this.events=this.route.snapshot.data['EVENTS']
      //ToDo:Resolver
       this.eventService.getEvents().subscribe((events: IEvent[]) => {
        this.events =  events;
         }
        );

    }

    ToasterClick(eventname) {

      toastr.warning(eventname, 'Warning');
    }

  }
