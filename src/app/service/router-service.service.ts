import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class RouterServiceService 
{
 
  constructor(private router:Router) { }

  tologin() {
    this.router.navigate(['/login']);
  }

  tohome() {
    this.router.navigate(['home']);
  }
  touser() {
    this.router.navigate(['/assign']);
  }
  toadmin(){
    this.router.navigate(['/nav']);
  }

}
