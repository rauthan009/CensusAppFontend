import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Shared/user.service';
import { NgForm } from '@angular/forms';
import { House } from 'src/app/Shared/house.model';
import { ToastrService } from 'ngx-toastr';

class StatesOfIndia {
  code:string;
  name:string;
}

@Component({
  selector: 'app-house-listing',
  templateUrl: './house-listing.component.html',
  styleUrls: ['./house-listing.component.css']
})


export class HouseListingComponent implements OnInit {

  noOfRoomsPattern = '^[0-9]';
  house:House;
  states:StatesOfIndia[] = [
  {"code": "AN","name": "Andaman and Nicobar Islands"},
  {"code": "AP","name": "Andhra Pradesh"},
  {"code": "AR","name": "Arunachal Pradesh"},
  {"code": "AS","name": "Assam"},
  {"code": "BR","name": "Bihar"},
  {"code": "CG","name": "Chandigarh"},
  {"code": "CH","name": "Chhattisgarh"},
  {"code": "DH","name": "Dadra and Nagar Haveli"},
  {"code": "DD","name": "Daman and Diu"},
  {"code": "DL","name": "Delhi"},
  {"code": "GA","name": "Goa"},
  {"code": "GJ","name": "Gujarat"},
  {"code": "HR","name": "Haryana"},
  {"code": "HP","name": "Himachal Pradesh"},
  {"code": "JK","name": "Jammu and Kashmir"},
  {"code": "JH","name": "Jharkhand"},
  {"code": "KA","name": "Karnataka"},
  {"code": "KL","name": "Kerala"},
  {"code": "LD","name": "Lakshadweep"},
  {"code": "MP","name": "Madhya Pradesh"},
  {"code": "MH","name": "Maharashtra"},
  {"code": "MN","name": "Manipur"},
  {"code": "ML","name": "Meghalaya"},
  {"code": "MZ","name": "Mizoram"},
  {"code": "NL","name": "Nagaland"},
  {"code": "OR","name": "Odisha"},
  {"code": "PY","name": "Puducherry"},
  {"code": "PB","name": "Punjab"},
  {"code": "RJ","name": "Rajasthan"},
  {"code": "SK","name": "Sikkim"},
  {"code": "TN","name": "Tamil Nadu"},
  {"code": "TS","name": "Telangana"},
  {"code": "TR","name": "Tripura"},
  {"code": "UK","name": "Uttarakhand"},
  {"code": "UP","name": "Uttar Pradesh"},
  {"code": "WB","name": "West Bengal"}
];

  constructor(private userService: UserService,private toastr: ToastrService) { }

  resetForm() {
    this.house = {
      BuildingNumber:'',
      Address:'',
      State:'Delhi',
      Name:'',
      OwnerStatus:'Owned',
      NoOfRoom:null
    }
  }   
  ngOnInit() {
    this.resetForm();
  }
  OnSubmit(form:NgForm) {
    this.userService.createHouseListing(form.value).subscribe((data:any)=>{
      console.log(data);
      if (data === 'Success') {
        this.resetForm();
        this.toastr.success('House succefully Listed');
      } else {
        this.toastr.error(data)
      }
    });
  }

  
  numberOnly(event:any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
}
