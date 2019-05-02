import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../Shared/user.service';
import { ToastrService } from 'ngx-toastr';

 class Relation {
  value:number;
  display:string;
}

class NPR {
  FullName :string;
  RelationtoHead :string;
  Gender :string;
  DateOfBirth : string;
  IsMarried :string;
  AgeAtMarriage :number;
  OccupationStatus :string;
  NatureOfOccupation :string;
}

@Component({
  selector: 'app-npr',
  templateUrl: './npr.component.html',
  styleUrls: ['./npr.component.css']
})
export class NPRComponent implements OnInit {

  housenum:any;
  selectedValue:number;
  house:NPR;
  relation:Relation[] = [
    {value:1,display:'Self'},
    {value:2,display:'Spouse'},
    {value:3,display:'Son'},
    {value:4,display:'Daughter'},
  ];

  resetForm(){
    this.house = {
      FullName:'',
      RelationtoHead :'Self',
      Gender :'',
      DateOfBirth :'',
      IsMarried :'',
      AgeAtMarriage :'',
      OccupationStatus :'',
      NatureOfOccupation :''
    }
  }
  constructor(private userservice:UserService, private toastr:ToastrService) { }

  ngOnInit() {
    this.selectedValue=2;
    this.resetForm();
    this.userservice.getHouseListing().subscribe((data)=>{
      this.housenum = data;
    });
  }

  OnSubmit(form:NgForm) {
    console.log(form.value);
    this.userservice.AddNPR(form.value).subscribe((data)=>{
      this.resetForm();
      this.toastr.success('Succefully registered');
    });
  }
}
