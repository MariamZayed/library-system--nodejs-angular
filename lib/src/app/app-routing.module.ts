import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBasicAdminComponent } from './Components/basic-admin/add-basic-admin/add-basic-admin.component';

const routes: Routes = [// First-match wins strategy
  {path: 'basicAdmin/add', component: AddBasicAdminComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
