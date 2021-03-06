import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Shared/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  isLoginError : boolean = false;
  constructor(private userService: UserService,private router:Router) { }

  ngOnInit() {
  }

  OnSubmit(Email,Password) {
    this.userService.userAuthentication(Email,Password).subscribe((data:any)=>{
      localStorage.setItem('userToken',data.access_token);
      localStorage.setItem('userRoles',data.role);
      if(this.userService.roleMatch(["Approver"]))
      {           this.router.navigate(['/ApproverHome/pendingRequests']);
      }
      else if(this.userService.roleMatch(["Volunteer"]))
      {
           this.router.navigate(['/Dashboard/HouseListing']) ; 
      }
        
      else
        this.router.navigate(['/forbidden']);
    },(err:HttpErrorResponse)=>{
      this.isLoginError = true;
    });
  }
}
