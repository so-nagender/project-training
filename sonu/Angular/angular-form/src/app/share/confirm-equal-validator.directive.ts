// import { Validators , NG_VALIDATORS, AbstractControl } from '@angular/forms';
// import { Directive, Input } from '@angular/core';

// @Directive({
//    selector: '[appConfirmEqualValidor]',
//    providers: [{
//        provide: NG_VALIDATORS,
//        useExisting: ConfirmEqualValidatorDirective,
//        multi: true
//    }]
// })
// export class ConfirmEqualValidatorDirective implements Validators {
//     @Input appConfirmEqualValidor: string;
//     validate(control: AbstractControl) { [key: String]: any} | null {
//     const controlToCompare = control.parent.get(this.appConfirmEqualValidor);
//     if(controlToCompare && controlToCompare.value  !== control.value) {
//         return { 'notEqual': true };
//     }
//         return null;
//     }
// }