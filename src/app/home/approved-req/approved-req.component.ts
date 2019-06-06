import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Shared/user.service';

@Component({
  selector: 'app-approved-req',
  templateUrl: './approved-req.component.html',
  styleUrls: ['./approved-req.component.css']
})
export class ApprovedReqComponent implements OnInit {

  volunteerData:any=[];
  constructor(private userService:UserService) { }
  loadDeclinedComponent() {
    this.userService.GetApproved().subscribe((data:any) =>{
      this.volunteerData = data;
    },
    (err:any)=>{
      console.log(err);
    });
  }
  ngOnInit() {
    this.loadDeclinedComponent();
  }

}
