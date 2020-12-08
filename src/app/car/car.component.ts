import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarService } from "src/app/car.service";

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  constructor(private carService: CarService, private route: ActivatedRoute) {}

  car_id = this.route['url']['_value'][1]['path'];
  car = this.carService.getCarByID(this.car_id);

  ngOnInit(): void {
  }

}
