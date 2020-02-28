 import { Validator, NG_VALIDATORS, AbstractControl, FormGroup } from '@angular/forms';
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
// export function MustMatch(email1: string, email2: string) {
//   // Validating Email match function...(Customize validator.)
//   return (formGroup: FormGroup) => {
//     const e = formGroup.controls[email1];
//     const e2 = formGroup.controls[email2];
//     if (e.value !== e2.value) {
//       e2.setErrors({ MustMatch: true });
//     } else {
//       e2.setErrors(null);
//     }
//   };
// }