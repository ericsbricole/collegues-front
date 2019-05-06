import { Directive, Input } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appUrlValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: UrlValidatorDirective, multi: true }]
})
export class UrlValidatorDirective implements Validator {


  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    const photoUrl: string = control.value;
    if (photoUrl !== null && photoUrl.startsWith('http')) {
      return null;
    } else {
      return { urlInvalide: true };
    }
  }


}
