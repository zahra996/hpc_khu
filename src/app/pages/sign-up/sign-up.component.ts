import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})

export class SignUpComponent implements OnInit {
  
  alert: boolean = false;
  error: boolean = false;
  Form!: FormGroup;

 
  public data_row= {
    firstName:"",
    lastName: "",
    studentProfNumber: "",
    email: "",
    role: '',
    password: "",
    confirmPassword: ""
    };


  constructor(private authService: AuthService,private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.Form= new FormGroup({
        firstName: new FormControl(null,Validators.required),
        lastName: new FormControl(null,Validators.required),
        studentProfNumber: new FormControl(null,Validators.required),
        email: new FormControl(null,[Validators.required,Validators.email]),
        role: new FormControl (null,[Validators.required]),
        password: new FormControl(null,[Validators.required,Validators.minLength(8),Validators.pattern(this.passwordRegix)]), 
        // confirmPassword: new FormControl(null,[Validators.required]), 
     },
     )
     }

     passwordRegix = /^(?=.*[A-Z])(?=.*[\W])(?=.*[0-9])(?=.*[a-z]).{9,}$/;
     passwordErrorMessages = {
       password: [
         {type: 'required', message: 'Enter Password'},
         {type: 'minlength', message: 'Password cannot be less than 8 characters.'},
         {type: 'pattern', message: 'Password must contain uppercase and lowercase Latin letters and special numbers and characters'}
       ],
     };

  public onSubmit() {
    let formData = new FormData();
    formData.append('firstName', this.data_row.firstName);
    formData.append('lastName', this.data_row.lastName);
    formData.append('studentProfNumber', this.data_row.studentProfNumber);
    formData.append('email', this.data_row.email);
    formData.append('role', this.data_row.role);
    formData.append('password', this.data_row.password);
    //formData.append('confirmPassword', this.data_row.confirmPassword);
    this.authService.onSignUp(formData).subscribe(
      (response: any) => {
        //console.log(response);
        this.alert = true;
      } 
    )
    this.error = true;  
  }
}




 




 


