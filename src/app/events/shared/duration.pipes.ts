import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'duration'})


export class durationPipes implements PipeTransform {
 transform(value: number): string {

    switch (value) {
       case 1: return 'One hour';
       case 2: return 'two hour';
       case 3: return 'three hour';

    }

 }

}
