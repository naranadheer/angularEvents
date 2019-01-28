import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute, Params } from '@angular/router';
import { ISession } from '../shared';

@Component({

    templateUrl: './eventdetails.component.html',
    styles: [`.container {padding-left : 20px;}`

    ]

})

export class EventDetailsComponent {

     constructor(private eventService: EventService , private route: ActivatedRoute) {


     }
     event: any;
     addMode: boolean;
     filterBy = 'All';
     sortBy = 'name';

     ngOnInit() {
       console.log(this.route.params);
        this.route.params.forEach((params: Params) => {
        this.event = this.eventService.getEvent(+params['id']);
       }

      );
      // this.event=this.eventService.getEvent(+this.route.snapshot.params['id'])
     }

     addSession() {

      this.addMode = true;
     }

     newSessionFromChild(session: ISession) {

        const maxID = Math.max.apply(null, this.event.sessions.map(s => s.id));
          session.id = maxID + 1;
          this.event.sessions.push(session);
          this.addMode = false;
     }

     cancelClick() {
      this.addMode = false;
     }

}

