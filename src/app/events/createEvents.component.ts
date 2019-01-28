import { Component , OnInit} from '@angular/core';


@Component({

    templateUrl: './createEvents.component.html',
    styles: [`em{ float:right;color:#E05C65; padding-left:10px;}
    .error input {background-color:#E3C3C5; }
    `]

  })
  export class createEventsComponent {
    isDirty = false;

    saveEvent(formValues) {
         console.log(formValues);
    }
  }
