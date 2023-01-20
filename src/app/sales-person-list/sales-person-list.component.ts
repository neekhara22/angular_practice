import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  //create an array of objects
  salesPersonList: SalesPerson[]=[
    new SalesPerson("Akash","Neekhara","akash2202@gmail.com",50000),
    new SalesPerson("Abhay","Singh","abhay08@gmail.com",40000),
    new SalesPerson("Ayushman","Chandra","ayush14@gmail.com",60000),
    new SalesPerson("Aditya","Roy","aditya55@gmail.com",90000),
    

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
