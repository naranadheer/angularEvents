import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule } from '@angular/router';


import { AppComponent } from './app.EventComponent';
import { EventsComponent } from './events/events.component';
import { ThumbnailComponent } from './events/events.ThumbnailComponent';
import { navBarComponent } from './nav.component';
import { EventService} from './events/shared/index';
import { voterService} from './events/shared/index';
import { createSessionComponent } from './events/event-details/create-session.component';

import { EventDetailsComponent } from './events/event-details/eventdetals.component';
import { appRoutes } from './routes';
import { createEventsComponent } from './events/createEvents.component';
import { Error404Component } from '../error/404.component';
import { EventRouteActivator } from './events/event-details/event-route-Activator';
import { EventResolver } from './events/shared/event-resolver.service';
import { AuthService } from './user/auth.Service';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { sessionlistComponent } from './events/event-details/sessionList-component';
import { durationPipes } from './events/shared/duration.pipes';
import {JQ_TOKEN, TOASTER_TOKEN, Toastr, collapseComponent, modalTrigger } from '../common/index';
import { simpleModalComponent  } from '../common/simpleModal.component';
import { upvoteComponent } from './events/event-details/upvote.component';
import { locationValidator } from './events/validate.directive';
import { HttpClientModule }  from '@angular/common/http';


 const toastr: Toastr = window['toastr'];
 const jquery = window['$'];

 //declare let toastr:Toastr

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    ThumbnailComponent,
    navBarComponent,
    EventDetailsComponent,
    createEventsComponent,
    Error404Component,
    createSessionComponent,
    sessionlistComponent,
    collapseComponent,
    durationPipes, simpleModalComponent, modalTrigger, upvoteComponent, locationValidator

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes), FormsModule, ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    EventService, EventRouteActivator,
    { provide : TOASTER_TOKEN, useValue: toastr},
    { provide : JQ_TOKEN, useValue: jquery},
     EventResolver,
    {
      provide : 'EventDeactivate',
      useValue: checkDirtyState
    },
    AuthService, voterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

 export function checkDirtyState(component: createEventsComponent) {
    if (component.isDirty) {
    return window.confirm('Are you sure');
    }
  }

