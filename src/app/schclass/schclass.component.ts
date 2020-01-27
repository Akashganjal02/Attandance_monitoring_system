import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schclass',
  templateUrl: './schclass.component.html',
  styleUrls: ['./schclass.component.css']
})
export class SchclassComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public submitted(){
    alert("Attendence Submitted Sucessfully...");
  }
  public loginpage(){
    alert("Logged out sucessful.");
  }
  public login(){
    alert("Students display sucessful.");
  }


}
