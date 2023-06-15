
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Login } from '../modal/login';
//import { AuthenticateServiceService } from '../service/authenticate-service.service';
import { AuthService } from '../service/auth.service';
import { RouterServiceService } from '../service/router-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit
 {
  login: Login = new Login();
  loginForm: FormGroup;
  submitMessage!: string;
  flag: boolean = false;

  constructor(private routerService: RouterServiceService, private authservice: AuthService) {
    this.loginForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl(),
      type: new FormControl()
    });
  }

  ngOnInit(): void {
    if (sessionStorage.getItem('key') != null) {
      this.routerService.tohome();
    }
  }

  onSubmit() 
  {
    console.log("hi from loginsubmit");
    this.login.username = this.loginForm.value.username;
    this.login.password = this.loginForm.value.password;
    this.login.type = this.loginForm.value.type;

    this.submitMessage = this.loginForm.value.username;

    console.log("Login Submit: " + this.loginForm.value);

    this.authservice.getusers(this.login).subscribe((data) => {
      this.authservice.setBearerToken(data['token']);
      console.log(data);

      if (data != null) {
        sessionStorage.setItem("key", this.submitMessage);
        this.flag = true;

        if (this.login.type == 'user') 
        {
          console.log("user");
          this.routerService.touser();
        }
         else if (this.login.type == 'admin') 
        {
          console.log("admin");
          this.routerService.toadmin();
        } 
      }
    },
    error => {
      console.log("error");
      alert('You have entered incorrect Username or Password!');
    });
  }
}



// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$


// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { User } from '../model/user';
// import { AuthService } from '../service/auth.service';@Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit{  username: string = '';
//   password: string = '';
//   role: string = '';  user: User = new User();  roles: string[];  constructor(private authService: AuthService, private route: Router){
//     this.roles=[
//       "admin",
//       "user"
//     ]
//   }  ngOnInit(): void 
//   {
//     this.username = '';
//     this.password = '';
//   }  
//   login(){
//     this.route.navigate(['/assign']);
  // }}























  // *************************************

      // this.user.username = this.username;
    // this.user.password = this.password;
    // this.user.role = this.role;    this.authService.login(this.user).subscribe(res => {
    //   if(res==null){
    //     alert("Username or password is wrong");
    //   }
    //   else{
    //     console.log("Login successfull");
    //     localStorage.setItem("token",res.token);        if(this.role=='user'){
    //       this.route.navigate(['/user']);
    //     }        if(this.role=='admin'){
    //       this.route.navigate(['/admin']);
    //     }
    //   }
    // },err => {
    //   alert("login failed");
    //   this.ngOnInit();
    // })