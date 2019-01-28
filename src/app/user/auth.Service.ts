import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    IsUser: boolean;
    username;
    password;
    currentUser: string;

    LoginAuth(username, password) {

       if (username == 'Rana' && password === '123') {
          this.currentUser = 'Rana';
          console.log(!this.IsUser);
            return !this.IsUser;

       }
    }

    IsAuthenticated() {

      return  !this.IsUser;
    }



}
