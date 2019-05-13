import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../Shared/user.service';

@Component({
  selector: 'app-volunteer-home',
  templateUrl: './volunteer-home.component.html',
  styleUrls: ['./volunteer-home.component.css']
})
export class VolunteerHomeComponent implements OnInit {

  UserClaims : any;
  statshow:boolean= true;
  constructor(private router:Router,private userservice:UserService) { }
  
  ngOnInit() {
    this.userservice.getUserClaims().subscribe((data:any)=> {
      this.UserClaims = data;
      if(this.UserClaims.Status !== "approved") {
        this.statshow= false;
        this.router.navigateByUrl('Dashboard/Declined');
      }
    },
    (err:any)=>{
      console.log(err);
    });
}
Logout() {
  localStorage.removeItem('userToken');
  this.router.navigate(['/Login']);
}
}
