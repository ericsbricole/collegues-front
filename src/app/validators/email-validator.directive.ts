import { Directive } from '@angular/core';
import { AsyncValidator, AbstractControl, ValidationErrors, NG_ASYNC_VALIDATORS } from '@angular/forms';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';

@Directive({
  selector: '[appEmailValidator]',
  providers: [{ provide: NG_ASYNC_VALIDATORS, useExisting: EmailValidatorDirective, multi: true }]
})
export class EmailValidatorDirective implements AsyncValidator {


  constructor(private _dataService: DataService) { }

  validate(control: AbstractControl): Observable<ValidationErrors> | null {
    const controlValue: string = control.value;

    return null;
  }


}
