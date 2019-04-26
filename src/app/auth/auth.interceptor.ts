import { HttpInterceptor, HttpRequest, HttpHandler, HttpEventType, HttpEvent } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {tap} from 'rxjs/internal/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private router:Router) {  }

         intercept(req: HttpRequest<any>, next:HttpHandler):Observable<HttpEvent<any>> {
            if(req.headers.get('No-Auth') == 'True')
                return next.handle(req.clone());

            if(localStorage.getItem('userToken')!= null) {
                const clonedreq = req.clone({
                    headers:req.headers.set("Authorization","Bearer "+localStorage.getItem('userToken'))
                });
                return next.handle(clonedreq)
                .pipe(tap(
                    succ=> {},
                    err => {
                        debugger;
                        if(err.status===401)
                        this.router.navigateByUrl('/Login');
                    }
                ))
            }
            else {
                this.router.navigateByUrl('/Login')
            }
         }
    }

// import { HttpInterceptor, HttpRequest, HttpHandler, HttpUserEvent, HttpEvent } from "@angular/common/http";
// import { Observable } from "rxjs/";
// import { UserService } from "../shared/user.service";
// import 'rxjs/add/operator/do';
// import { Injectable } from "@angular/core";
// import { Router } from "@angular/router";
// import {tap} from 'rxjs/internal/operators';

// @Injectable()
// export class AuthInterceptor implements HttpInterceptor {

//     constructor(private router: Router) { }

//     intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//         if (req.headers.get('No-Auth') == "True")
//             return next.handle(req.clone());

//         if (localStorage.getItem('userToken') != null) {
//             const clonedreq = req.clone({
//                 headers: req.headers.set("Authorization", "Bearer " + localStorage.getItem('userToken'))
//             });
//             return next.handle(clonedreq)
//                 .pipe(tap(
//                 succ => { },
//                 err => {
//                     if (err.status === 401)
//                         this.router.navigateByUrl('/login');
//                 }
//                 ));
//         }
//         else {
//             this.router.navigateByUrl('/login');
//         }
//     }
// }