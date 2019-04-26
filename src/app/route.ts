
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './user/register/register.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { AuthGuard } from './auth/auth.guard';

export const appRoutes : Routes = [
    {path:'home',component : HomeComponent,canActivate:[AuthGuard]},
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