import { EventsComponent } from './events/events.component';
import { EventDetailsComponent } from './events/event-details/eventdetals.component';
import { createEventsComponent } from './events/createEvents.component';
import { Routes} from '@angular/router';
import { Error404Component } from '../error/404.component';
import { EventRouteActivator } from './events/event-details/event-route-Activator';
import { EventResolver } from './events/shared/event-resolver.service';
import { createSessionComponent } from './events/event-details/create-session.component';

export const appRoutes: Routes = [
    // {path :'events/new',component : createEventsComponent,canDeactivate:["EventDeactivate"]},
  //   {path :'events',component : EventsComponent,resolve:{events:EventResolver}},
    {path : 'events', component : EventsComponent, resolve: {EVENTS: EventResolver}},
     {path : 'events/find/:id', component : EventDetailsComponent, canActivate: [EventRouteActivator]},
     {path : 'events/create', component : createEventsComponent},
    {path : 'user', loadChildren: './user/user.module#UserModule' },
    {path : 'events/session/create', component : createSessionComponent},

    // {path:'**',redirectTo:'events/create'} ,
    {path : '', redirectTo : 'events', pathMatch: 'full'},
    {path : '404', component: Error404Component},

];
