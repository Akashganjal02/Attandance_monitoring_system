import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public login(){
    alert("Students display sucessful.");
  }
  public submitted(){
    alert("Attendence Submitted Sucessfully...");
  }
  public loginpage(){
    alert("Logged out sucessful.");
  }
}
