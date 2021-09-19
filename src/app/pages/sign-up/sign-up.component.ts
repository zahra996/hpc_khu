import { Component, Injectable, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})

export class SignUpComponent implements OnInit {


  Form!: FormGroup;

 
  public data_row= {
    firstName:"",
    lastName: "",
    studentProfNumber: "",
    email: "",
    role: '',
    password: ""
    // confirmPassword: ""
    };

  constructor(private authService: AuthService) {}
  ngOnInit(): void {
     this.Form = new FormGroup({
        firstName: new FormControl(null,Validators.required),
        lastName: new FormControl(null,Validators.required),
        studentProfNumber: new FormControl(null,Validators.required),
        email: new FormControl(null,[Validators.required,Validators.email]),
        role: new FormControl (null,[Validators.required]),
        password: new FormControl(null,Validators.required), 
        // confirmPassword: new FormControl(null,Validators.required), 
     })
    
  }
  public onSubmit() {
    let formData = new FormData();
    formData.append('firstName', this.data_row.firstName);
    formData.append('lastName', this.data_row.lastName);
    formData.append('studentProfNumber', this.data_row.studentProfNumber);
    formData.append('email', this.data_row.email);
    formData.append('role', this.data_row.role);
    formData.append('password', this.data_row.password);
    this.authService.onSignUp(formData).subscribe(
      (response: any) => {
        console.log(response);
      }
    )
    
  }
}




 




 


