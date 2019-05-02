import { Component, OnInit } from '@angular/core';
import { User } from '../../Shared/user.model';
import { NgForm } from '@angular/forms';
import { UserService } from '../../Shared/user.service';
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  constructor(private userService:UserService,private toastr : ToastrService) {

   }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?:NgForm) {
    if(form!=null)
    form.reset();
    this.user = {
      Email:'',
      Password:'',
      FirstName:'',
      LastName:'',
      ProfilePic:'',
      AadharNumber:''
    }
  }

  OnSubmit(form:NgForm) {
    this.userService.registerUser(form.value).subscribe((data:any)=>{
      if(data.Succeeded == true) {
        this.resetForm(form);
        this.toastr.success('User Succesfully Registered')
      }
      else {
        this.toastr.error(data.Errors[0]);
      }
    });
  }

}
