import { Component, OnInit } from '@angular/core';
import { User } from '../../Shared/user.model';
import { NgForm } from '@angular/forms';
import { UserService } from '../../Shared/user.service';
import { ToastrService } from 'ngx-toastr'
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';

var uploadedImage:string;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  passwordPattern = '^(?=.*?[A-Za-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])(?=.*?[^\w\s]).{8,}$';
  aadharPattern = '^[0-9]{12,12}$';
  namePattern = '^[a-zA-Z ]*$';
  

  constructor(private userService:UserService,private toastr : ToastrService,private db:AngularFireDatabase) {
    
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

  public handleFileInput(event: any) {
    const file:File = event.target.files[0];

    const metadata = {'contentType' : file.type};
    const storageRef:firebase.storage.Reference = firebase.storage().ref('/photos/featured/'+file.name);
    const uploadTask:firebase.storage.UploadTask = storageRef.put(file,metadata);
    console.log("Uploading: ",file.name);


  uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
    console.log('File available at', downloadURL);
      uploadedImage=downloadURL;
    });
}

  

  OnSubmit(form:NgForm) {
    form.value.ProfilePic= uploadedImage;
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
