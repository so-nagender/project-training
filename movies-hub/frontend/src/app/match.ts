import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';
import { Directive, Input } from '@angular/core';
@Directive({
    selector: '[appMatch]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: Confirmpasswordvalidator,
        multi: true
    }]
})
export class Confirmpasswordvalidator implements Validator{
  @Input() appMatch: string;
  validate(control: AbstractControl): {[key: string]: any} | null{
    const controlToCompare = control.parent.get(this.appMatch);
    if (controlToCompare && controlToCompare.value !== control.value){
        return { 'notEqual' : true};
    }
    return null;
  }
}