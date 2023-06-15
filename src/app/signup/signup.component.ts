import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Signup } from '../modal/signup';
import { AuthService } from '../service/auth.service';
import { RouterServiceService } from '../service/router-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

  

  signup: Signup = new Signup();

  signUpArray: Array<Signup> = [];

  signupForm: FormGroup;
  

  constructor(private routerService: RouterServiceService, private authenticateService: AuthService, public formBuilder: FormBuilder) {
    this.signupForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl(),
      conpassword: new FormControl(),
      name: new FormControl(),
      email: new FormControl(),
      type: new FormControl('user')
    });
  }

ngOnInit(): void {
  if (sessionStorage.getItem('key') != null) 
  {
    this.routerService.tohome();  
  } 
  else 
  {
    console.log("hi");
    this.signupForm = this.formBuilder.group({
      type: ['user'], // Set the default value for type to "user"
      name: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      conpassword: ['', Validators.required],
      email: ['', Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]
    });
  }
}
  get f() 
  { 
    return this.signupForm.controls; 
  }

  onSubmit(){
    console.log("Hi");

    this.signup.password = this.signupForm.value.password;
    console.log("password== " + this.signupForm.value.password)
    this.signup.username = this.signupForm.value.username;
    console.log("username== " + this.signupForm.value.username)
    this.signup.name = this.signupForm.value.name;
    console.log("name== " + this.signupForm.value.name)
    this.signup.email = this.signupForm.value.email;
    console.log("email== " + this.signupForm.value.email)
    this.signup.conpassword = this.signupForm.value.conpassword;
    console.log("conpassword== " + this.signupForm.value.conpassword)
    this.signup.type = this.signupForm.value.type;
    console.log("type== " + this.signupForm.value.type)

    this.signUpArray.push(this.signup);
    this.authenticateService.addUser(this.signup).subscribe((data) => 
    {
      // console.log("inside regsiter angular")
      console.log(data)
      this.routerService.tologin();
      alert("User registered succesfully " + data.username);

    },
      (error: any) => {
        console.log(error);
        alert("User already Registered");
      });
  }

}


//code 34-55 codeline
// ngOnInit(): void {
//   if (sessionStorage.getItem('key') != null) 
//   {
//     this.routerService.tohome();  
//   }
//   else {
//     console.log("hi")
//     this.signupForm = new FormGroup(
//       {
//       type: new FormControl(),
//       name: new FormControl('', Validators.required),
//       username: new FormControl('', Validators.required),
//       password: new FormControl('', Validators.required),
//       conpassword: new FormControl('', Validators.required),
//       email: new FormControl('',  Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")),
//     });
//   }
// }