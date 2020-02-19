import { FormGroup } from '@angular/forms';

export function MustMatch(email1: string, email2: string) {
  // Validating Email match function...(Customize validator.)
  return (formGroup: FormGroup) => {
    const e = formGroup.controls[email1];
    const e2 = formGroup.controls[email2];
    if (e.value !== e2.value) {
      e2.setErrors({ MustMatch: true });
    } else {
      e2.setErrors(null);
    }
  };
}