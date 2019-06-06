import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  readonly rootUrl = 'http://localhost:64781';
  constructor(private http: HttpClient) { }

  registerUser(user: User) { 
    
    const body :User = {
      Email:user.Email,
      FirstName:user.FirstName,
      LastName:user.LastName,
      ProfilePic:user.ProfilePic,
      AadharNumber:user.AadharNumber,
      Password:user.Password
    }

    console.log(body);
    var reqHeader = new HttpHeaders({'No-Auth':'True'});
    return this.http.post(this.rootUrl+'/api/User/Register',body,{headers:reqHeader});
  }

  GetPendingUser() {
    var reqHeader = new HttpHeaders({'Authorization':'bearer '+localStorage.getItem('userToken')});
    return this.http.get(this.rootUrl+'/api/GetPendingUsers',{headers:reqHeader});
  }

  GetDeclined() {
    var reqHeader = new HttpHeaders({'Authorization':'bearer '+localStorage.getItem('userToken')});
    return this.http.get(this.rootUrl+'/api/GetDeclinedUsers',{headers:reqHeader});
  }

  GetApproved() {
    var reqHeader = new HttpHeaders({'Authorization':'bearer '+localStorage.getItem('userToken')});
    return this.http.get(this.rootUrl+'/api/GetApprovedUsers',{headers:reqHeader});
  }

  userAuthentication(Email,Password) {
    var data = "username=" + Email+"&password="+Password+"&grant_type=password";
    var reqHeader =  new HttpHeaders({'Content-Type':'application/json','No-Auth':'True'}); 
    return this.http.post(this.rootUrl+'/token',data,{headers:reqHeader});
  }

  getUserClaims() {
    var header = new HttpHeaders({'Authorization':'bearer '+localStorage.getItem('userToken')});
    return this.http.get(this.rootUrl+'/api/GetUserClaims');
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

  statusMatch(allowedStatus):boolean {
    var isMatch = false;
    return isMatch;
  }

  changeStatus(status:string,userId:string) {
    var reqHeader = new HttpHeaders("Content-Type: application/json");
    var data = {
      userId : userId,
      status : status
    }
    var result= this.http.post(this.rootUrl+'/api/user/updateStatus',data,{headers:reqHeader});
    console.log(result );
    return result;
  }

  createHouseListing(data:any) {
    console.log("I'm called");
    var reqHeader = new HttpHeaders({'Authorization':'bearer '+localStorage.getItem('userToken')});
    return this.http.post(this.rootUrl+'/api/census/addHouse',data,{headers:reqHeader});
  }

  getHouseListing(){
    var reqHeader = new HttpHeaders({'Authorization':'bearer '+localStorage.getItem('userToken')});
    return this.http.get(this.rootUrl+'/api/census/getHouse',{headers:reqHeader});
  }

  AddNPR(data:any) {

    console.log(data);
    var reqHeader = new HttpHeaders({'Authorization':'bearer '+localStorage.getItem('userToken')});
    return this.http.post(this.rootUrl+'/api/census/addNPR',data,{headers:reqHeader});
  }
}
 