import { Component, Inject } from '@angular/core';
import { AuthService }  from '../app/user/auth.Service';
import { ISession, EventService } from './events/shared';
import { JQ_TOKEN  } from '../common/jquery.service';

@Component({
    selector: 'nav-bar',
    templateUrl: './nav.component.html'
  })


  export class navBarComponent {

    rana = true;
    searchItems = '';
    foundSession: ISession[];
    constructor(private _auth: AuthService, private _eventService: EventService ) {

      //console.log('Home'+_auth.LoginAuth('Rana','123'))
    }

   /*  btnClick()
    {
        this.$('#simple-modal').modal()

    } */


    searchSession(searchItems) {
      this._eventService.searchSession(searchItems).subscribe(session => {
        this.foundSession = session;
      // console.log(this.foundSession)

      } );




    }



  }
