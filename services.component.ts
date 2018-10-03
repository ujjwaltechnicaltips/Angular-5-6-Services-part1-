import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

public biodata = [
{"name":"Pushpendra","age":23,"address":"Noida"},
{"name":"Tripti","age":32,"address":"Noida"}
];








}
