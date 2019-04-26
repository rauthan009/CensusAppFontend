import { Component, OnInit } from '@angular/core';
import { User } from '../../Shared/user.model';
import { NgForm } from '@angular/forms';
import { UserService } from '../../Shared/user.service';
import { NotifierService } from 'angular-notifier'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  constructor(private userService:UserService,private notifierService : NotifierService) {

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
        this.notifierService.notify('success','User Succesfully registored');
      }
      else {
        this.notifierService.notify('error','data.Errors[0]');
      }
    });
  }

}
