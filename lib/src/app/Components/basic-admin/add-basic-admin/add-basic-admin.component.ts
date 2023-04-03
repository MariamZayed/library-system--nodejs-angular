import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import {BasicAdminService} from 'src/app/Service/basic-admin.service';
import { BasicAdmin } from '../../../Model/basic-admin';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-basic-admin',
  templateUrl: './add-basic-admin.component.html',
  styleUrls: ['./add-basic-admin.component.css']
})
export class AddBasicAdminComponent implements OnInit {
  // BasicAdminArr: BasicAdmin[] = [];
  newBasicAdmin: BasicAdmin= {} as BasicAdmin;

  constructor(private basicAdminService:BasicAdminService,
              private http:HttpClient,
              private router: Router){
    
  }


  ngOnInit(): void {
    // this.getAllBasicAdmins();
    // this.addBasicAdmin();
  }

  public getAllBasicAdmins()
  {
      this.basicAdminService.getAllBasicAdmins()
      .subscribe(data=>{
        console.log(data);
    })
  }

  public addBasicAdmin(){
    // const observer={
    //   next: (data: BasicAdmin)=>{
    //     console.log("basic admin added successfully");
    //     // this.router.navigateByUrl('/main page');//redirect
    //   },
    //   error: (error:Error)=>{console.log(error.message)}
    // }

      this.basicAdminService.addBasicAdmin(this.newBasicAdmin).subscribe(data=>{
        console.log("basic admin added successfully");
        // this.router.navigateByUrl('/main page');//redirect
      });
        
  }





}
