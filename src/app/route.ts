
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './user/register/register.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { AuthGuard } from './auth/auth.guard';
import { ApproverPanelComponent } from './approver-panel/approver-panel.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { PendingReqComponent } from './home/pending-req/pending-req.component';
import { DeclinedReqComponent } from './home/declined-req/declined-req.component';
import { ApprovedReqComponent } from './home/approved-req/approved-req.component';
import { VolunteerHomeComponent } from './volunteer-home/volunteer-home.component';
import { HouseListingComponent } from './volunteer-Home/house-listing/house-listing.component';
import { NPRComponent } from './volunteer-Home/npr/npr.component';
import { DeclinedComponent } from './volunteer-home/declined/declined.component';

export const appRoutes : Routes = [
    {
        path:'ApproverHome',component : HomeComponent,canActivate:[AuthGuard],
        children:[
            {path:'pendingRequests',component:PendingReqComponent},
            {path:'declinedRequests',component:DeclinedReqComponent},
            {path:'approvedRequests',component:ApprovedReqComponent}
        ]
    },
    {
        path:'Dashboard',component : VolunteerHomeComponent,canActivate:[AuthGuard],
        children:[
            {path:'HouseListing',component:HouseListingComponent},
            {path:'NPR',component:NPRComponent},
            {path:'Declined',component:DeclinedComponent}
        ]
    },
    {path:'forbidden',component:ForbiddenComponent,canActivate:[AuthGuard]},
    {path:'approverPanel',component:ApproverPanelComponent,canActivate:[AuthGuard],data:{roles:['Approver']}},
    {
        path:'Register',component:UserComponent,
        children:[{path:'',component:RegisterComponent}]
    },
    {
        path:'Login',component:UserComponent,
        children:[{path:'',component:SignInComponent}]
    },
    {
        path:'',redirectTo:'/Login',pathMatch:'full'
    }
];