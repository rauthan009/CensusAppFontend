import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Shared/user.service';
import { NgForm } from '@angular/forms';
import { House } from 'src/app/Shared/house.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-house-listing',
  templateUrl: './house-listing.component.html',
  styleUrls: ['./house-listing.component.css']
})

export class HouseListingComponent implements OnInit {

  house:House;
  constructor(private userService: UserService,private toastr: ToastrService) { }

  resetForm() {
    this.house = {
      BuildingNumber:'',
      Address:'',
      State:'',
      Name:'',
      OwnerStatus:'',
      NoOfRoom:''
    }
  }
  ngOnInit() {
    this.resetForm();
  }
  OnSubmit(form:NgForm) {
    this.userService.createHouseListing(form.value).subscribe((data)=>{
      this.resetForm();
      this.toastr.success('House succefully Listed');
    });
  }

}
