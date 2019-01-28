import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'events-Thumbnail',
    templateUrl: './events.component.html'

  })
  export class ThumbnailComponent {
   @Input() event: any;

   @Output() buttonClick = new EventEmitter();
   handleClick() {
  this.buttonClick.emit(this.event.name);

   }
  }
