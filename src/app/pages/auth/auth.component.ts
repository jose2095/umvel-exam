import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ERROR_MESSAGE } from 'src/app/shared/constants';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UtilService } from 'src/app/shared/utils/util.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  public loading=false;

  public loginForm:FormGroup;
  constructor(
    private authService:AuthService,
    private router:Router,
    public utilsService:UtilService) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
   }

  onSubmit() {
    this.loading = true;
    this.authService.login(this.loginForm.value)
      .subscribe(res => {
        this.loading = false;
        this.router.navigate(['/users'])
      },
        error => {
          this.loading = false;
          alert(ERROR_MESSAGE)
        })
  }


}
