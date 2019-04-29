import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
// import 'rxjs/add/operator/map';
import { User } from './user.model';
import { Profile } from 'selenium-webdriver/firefox';
import { element } from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly rootUrl = 'http://localhost:64781';
  constructor(private http: HttpClient) { }

  registerUser(user: User) {   
    const body :User = {
      Email:user.Email,
      Password:user.Password,
      FirstName:user.FirstName,
      LastName:user.LastName,
      ProfilePic:user.ProfilePic,
      AadharNumber:user.AadharNumber
    }
    var reqHeader = new HttpHeaders({'No-Auth':'True'});
    return this.http.post(this.rootUrl+'/api/User/Register',body,{headers:reqHeader});
  }

  userAuthentication(Email,Password) {
    var data = "username=" + Email+"&password="+Password+"&grant_type=password";
    var reqHeader =  new HttpHeaders({'Content-Type':'application/json','No-Auth':'True'}); 
    var result= this.http.post(this.rootUrl+'/token',data,{headers:reqHeader});
    return result;
  }

  getUserClaims() {
    var header = new HttpHeaders({'Authorization':'bearer '+localStorage.getItem('userToken')});
    console.log(localStorage.getItem('UserToken'));
    console.log(header);
    return this.http.get(this.rootUrl+'/api/GetUserClaims',);
  }

  roleMatch(allowedRoles): boolean {
    var isMatch = false;
    var userRoles:string[] = JSON.parse(localStorage.getItem('userRoles'));
    allowedRoles.forEach(element => {
      if (userRoles.indexOf(element) > -1) {
        isMatch = true;
        return false;
      }
    });
    return isMatch;
  }
}
 