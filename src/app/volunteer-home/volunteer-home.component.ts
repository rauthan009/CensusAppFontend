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
  
  constructor(private router:Router,private userservice:UserService) { }
  
  ngOnInit() {
    this.userservice.getUserClaims().subscribe((data:any)=> {
      this.UserClaims = data;
      console.log(data);
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
