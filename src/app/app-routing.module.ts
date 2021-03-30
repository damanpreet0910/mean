import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BootstrapformComponent } from './layout/bootstrapform/bootstrapform.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { ListstudentComponent } from './student/liststudent/liststudent.component';

const routes: Routes = [
  { path:'',redirectTo:'login',pathMatch:'full'},
  { path:'login',component:LoginComponent},
  {
    path:'layout',component:LayoutComponent,canActivate:[AuthGuard],
    children:[
      {
        path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard]
      },
      {
        path:'bootstrapform',component:BootstrapformComponent,canActivate:[AuthGuard],
      },
      {
        path:'studentlist',component:ListstudentComponent,canActivate:[AuthGuard],
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
