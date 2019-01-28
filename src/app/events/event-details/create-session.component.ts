import { Component, OnInit, Output, EventEmitter, OnChanges } from '@angular/core';
import { ISession  } from '../shared/event.model';
import { FormGroup, FormControl, Validators  }  from '@angular/forms';


@Component({

    selector: 'create-sessionList',
    templateUrl: './create-session.component.html',
    styles: [`em{ float:right;color:#E05C65; padding-left:10px;}
    .error input {background-color:#E3C3C5; }
    .errorArea textarea {background-color:#E3C3C5; }

    `]
})
export class createSessionComponent implements OnInit {
    sessionGroup: FormGroup;
    sessionName: FormControl;
    presenter: FormControl;
    duration: FormControl;
    level: FormControl;
    abstract: FormControl;

    @Output() newSessionFromChild = new EventEmitter();
    @Output() cancelClickEmit = new EventEmitter();

   
    ngOnInit(): void {
        this.sessionName = new FormControl('', [Validators.required, Validators.maxLength(4), this.restrictedWords]);
        this.presenter = new FormControl('', [Validators.required, Validators.maxLength(4), this.restrictedWords]);
        this.duration = new FormControl();
        this.level = new FormControl();
        this.abstract = new FormControl('', [Validators.required, Validators.maxLength(20), this.restrictedWords]);

    this.sessionGroup = new FormGroup({
    sessionName: this.sessionName,
    presenter: this.presenter,
    duration: this.duration,
    level: this.level,
    abstract: this.abstract
});


    }

    private restrictedWords  (control: FormControl): {[key: string]: any} {

        return control.value.includes('foo') ? {'restrictedWords': 'foo'} : null;
    }


    saveClick(formValues) {
          const session: ISession = {
            id: undefined,
            name: formValues.sessionName,
            presenter: formValues.presenter,
            duration: formValues.duration,
            level: formValues.level,
            abstract: formValues.abstract,
            voters: []
          };

          this.newSessionFromChild.emit(session);

    }

    cancelClick() {
        this.cancelClickEmit.emit();
    }
}
