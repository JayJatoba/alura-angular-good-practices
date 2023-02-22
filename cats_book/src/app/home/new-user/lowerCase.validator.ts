import { AbstractControl } from '@angular/forms';

export function lowerCaseValidator(control: AbstractControl) {
  const value = control.value as string;
  if (value !== value.toLowerCase()) {
    return { lowCase: true };
  } else {
    return null;
  }
}
