import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pending-req',
  templateUrl: './pending-req.component.html',
  styleUrls: ['./pending-req.component.css']
})
export class PendingReqComponent implements OnInit {

  volunteerData:any;
  userId:any;
  constructor(private userService:UserService,private router:Router) { }
  
  loadPendingComponent() {
    console.log("Called me");
    this.userService.GetPendingUser().subscribe((data:any) =>{
      console.log(data);
      this.volunteerData = data;
    },
    (err:any)=>{
      console.log(err);
    });
  }

  ngOnInit() {
    this.loadPendingComponent();
  }

  approveVolunteer(id:string) {  
    this.userService.changeStatus("approved",id).subscribe((data)=>{
      this.loadPendingComponent();
    });
  }

  declineVolunteer(id:string) {
    this.userService.changeStatus("declined",id).subscribe(()=> {
      this.loadPendingComponent();
    });
  }

}
