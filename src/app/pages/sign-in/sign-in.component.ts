import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  Form!: FormGroup;

  constructor(private authService: AuthService) {}
  ngOnInit(): void {
     this.Form = new FormGroup({
        username: new FormControl(null,[Validators.required,Validators.email]),
        password: new FormControl(null,Validators.required),
        confirmPassword: new FormControl(null,Validators.required)
       })  
  }
  // resolved(captchaResponse: string) {
  //   console.log(`Resolved response token: ${captchaResponse}`);
   
  // }
  public onSubmit() {
    this.authService.onSignIn(this.Form.value).subscribe(
      (response: any) => {
        alert("Your login was successful.");
      }
    )
  }
}
