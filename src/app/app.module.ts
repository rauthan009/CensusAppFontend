import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './user/register/register.component';
import { UserService } from './Shared/user.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './route';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApproverPanelComponent } from './approver-panel/approver-panel.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { DeclinedReqComponent } from './home/declined-req/declined-req.component';
import { ApprovedReqComponent } from './home/approved-req/approved-req.component';
import { PendingReqComponent } from './home/pending-req/pending-req.component';
import { VolunteerHomeComponent } from './volunteer-home/volunteer-home.component';
import { HouseListingComponent } from './volunteer-Home/house-listing/house-listing.component';
import { NPRComponent } from './volunteer-Home/npr/npr.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    UserComponent,
    HomeComponent,
    SignInComponent,
    ApproverPanelComponent,
    ForbiddenComponent,
    DeclinedReqComponent,
    ApprovedReqComponent,
    PendingReqComponent,
    VolunteerHomeComponent,
    HouseListingComponent,
    NPRComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ToastrModule.forRoot(),
    BrowserAnimationsModule

  ],
  providers: [UserService,AuthGuard,{
    provide: HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
