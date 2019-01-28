 import { Component, OnInit } from '@angular/core';
 import { AuthService }  from './auth.Service';
 import { Router } from '@angular/router';

@Component({

   templateUrl: './UserLogin.Componenet.html',
   styles: ['em{ float:right;color:#E05C65; padding-left:10px;}']

})
export class UserLoginComponent implements OnInit {
    constructor(private _auth: AuthService, private _router: Router) { }
    mouseoverLogin;
    login(formdata) {
        console.log(this._auth.LoginAuth( formdata.UserName, formdata.Password));
       if ( this._auth.LoginAuth( formdata.UserName, formdata.Password)) {
         this._router.navigate(['events']);
       }
    }

    ngOnInit(): void { }
}
