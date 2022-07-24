import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login_form!: FormGroup;
  saurabh: any;
  chosenName = ''
  email : any;
  password : any

  constructor(private formBulder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.formValidator();
  }


  formValidator() {
    this.login_form = this.formBulder.group({
      password: ['', Validators.required],
      email: ['', [Validators.required]],
    })
  }



  onSubmit(){
    if(this.email == "dahakekalyan75112@gmail.com" && this.password == 1234){
      // alert("login");
      this.router.navigateByUrl('/question')
    }else{

    }
  }
}
