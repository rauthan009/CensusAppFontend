import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../Shared/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  UserClaims : any;
  constructor(private router:Router,private userservice:UserService) { }
  ngOnInit() {
    this.userservice.getUserClaims().subscribe((data:any)=> {
      this.UserClaims = data;
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
