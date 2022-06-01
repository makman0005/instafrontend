import { Component, OnInit } from '@angular/core';
import { IgserviceService } from './service/igservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'insta';

try1:boolean=true;
fry:boolean=false;

  user_id:any;
  password:any;
  msg:any;


  constructor(private ig:IgserviceService, private route: ActivatedRoute , private router: Router){}

  login(){

    this.try1 = false;
    this.fry = true;
    
const data = {
  userId : this.user_id,
  password: this.password

}
this.ig.loginInfo(data).subscribe(
  response => {
    this.msg = response;
    console.log(this.msg)
  }
)

  }

}
