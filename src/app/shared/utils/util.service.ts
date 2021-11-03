import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }


  public getControl(form:FormGroup,controlName:string):AbstractControl | null{
    return form.get(controlName);
  }

}
