import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBasicAdminComponent } from './Components/basic-admin/add-basic-admin/add-basic-admin.component';
import { AddBookComponent } from './Components/book/add-book/add-book.component';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';


const routes: Routes = [// First-match wins strategy
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {path: 'basicAdmin/add', component: AddBasicAdminComponent},
  { path: 'add-book', canActivate: [root], component: AddBookComponent },


];

function root() {
  // This is the Autherization !!!
  let userType = localStorage.getItem('user_type');
  if (userType == 'Root' || userType == "basicAdmin") {
    return true;
  } else {
    return false;
  }
}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
