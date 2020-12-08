import { Injectable } from '@angular/core';
import { Car } from "src/models/car.model";

@Injectable({
  providedIn: 'root'
})
export class CarService {

  cars: Array<Car> = [
    {id: 0, brandName: "Porsche", modelName: "911 Carrera", priceInRub: 7740000},
    {id: 1, brandName: "Porsche", modelName: "718 Cayman", priceInRub: 4460000},
    {id: 2, brandName: "Mercedes-Benz", modelName: "E 200", priceInRub: 4570000},
    {id: 3, brandName: "BMW", modelName: "5", priceInRub: 3640000},
  ]

  constructor() { }

  getAll() {
    return this.cars;
  }

  getCarByID(id) {
    return this.cars[id];
  }
}
