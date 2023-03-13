import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddemplyComponent } from './addemply/addemply.component';
import { CartdashboardComponent } from './cartdashboard/cartdashboard.component';
import { DashemplyComponent } from './dashemply/dashemply.component';
import { EditemplyComponent } from './editemply/editemply.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'dashemply',component:DashemplyComponent},
  {path:'',component:LoginComponent},
  {path:'add',component:AddemplyComponent},
  {path:'edit',component:EditemplyComponent},
  {path:'update/:id',component:AddemplyComponent},
  {path:'cart', component:CartdashboardComponent},
  {path:'', redirectTo:'emplylist',pathMatch:"full"}
  // {path:'update/:id',component:EditemplyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
