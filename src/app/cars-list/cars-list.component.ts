import { Component, OnInit } from '@angular/core';
import { CarService } from "src/app/car.service"; 

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {

  constructor(private carService: CarService) { }

  cars = this.carService.getAll();

  ngOnInit(): void {
  }

}
