import { Component , OnInit, inject, Inject} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Toastr , TOASTER_TOKEN} from '../../common/toaster.service';

@Component({
  templateUrl: './UserProfile.Component.html',
  styles: [`em{ float:right;color:#E05C65; padding-left:10px;}
  .error input {background-color:#E3C3C5; }
  `]

})
export class ProfileComponent implements OnInit {
  ProfileForm: FormGroup;
 private firstName: FormControl;
 private lastName: FormControl;

 constructor(@Inject(TOASTER_TOKEN) private toastr: Toastr) {

 }

    ngOnInit() {

      this.firstName = new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z].*')]);
      this.lastName = new FormControl('123');

      this.ProfileForm = new FormGroup({
        firstName: this.firstName,
        lastName: this.lastName

      });

    }

    validateFirstName() {
      return !this.ProfileForm.controls.firstName.invalid;
    }

    saveClick() {
      console.log('saves');
      this.toastr.success('Saved');
    }

}
