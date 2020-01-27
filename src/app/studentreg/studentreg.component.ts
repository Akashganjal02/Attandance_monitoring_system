import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studentreg',
  templateUrl: './studentreg.component.html',
  styleUrls: ['./studentreg.component.css']
})
export class StudentregComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public signinalert(){
    alert("Welcome ADMIN , Sign In successful");

  }
  public reg(){
    alert("Registration successful");

  }

}
