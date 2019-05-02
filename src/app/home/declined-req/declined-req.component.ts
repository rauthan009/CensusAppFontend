import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Shared/user.service';

@Component({
  selector: 'app-declined-req',
  templateUrl: './declined-req.component.html',
  styleUrls: ['./declined-req.component.css']
})
export class DeclinedReqComponent implements OnInit {

  volunteerData:any;

  constructor(private userService:UserService,) { }
  loadDeclinedComponent() {
    this.userService.GetDeclined().subscribe((data:any) =>{
      console.log(data);
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
