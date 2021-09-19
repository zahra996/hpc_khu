import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  Form!: FormGroup;

  constructor(private authService: AuthService) {}
  ngOnInit(): void {
     this.Form = new FormGroup({
        email: new FormControl(null,[Validators.required,Validators.email]),
       })  
  }
  resolved(captchaResponse: string) {
    console.log(`Resolved response token: ${captchaResponse}`);
   
  }
  public onSubmit() {
    this.authService.onSignIn(this.Form.value).subscribe(
      (response: any) => {
        alert("Your login was successful.");
      }
    )
  }

}
