import { Directive } from '@angular/core';
import { Validator, FormGroup, NG_VALIDATORS } from '@angular/forms';

@Directive({

    selector: '[validateLocation]',
    providers: [{provide: NG_VALIDATORS, useExisting: locationValidator, multi: true }]

})

export class locationValidator implements Validator {

validate(formGroup: FormGroup): {[key: string]: any} {


  const controlLocation = formGroup.controls['address'];
  const controlCity = formGroup.controls['city'];
  const controlCountry = formGroup.controls['country'];
  const controlOnline = (<FormGroup>formGroup.root).controls['onlineUrl'];
  console.log(controlLocation);
if ((controlLocation && controlLocation.value && controlCity && controlCity.value && controlCountry
    && controlCountry.value ) || (controlOnline && controlOnline.value)) {
        return null;

    } else {
      return { validateLocation: false};
    }

}

}
