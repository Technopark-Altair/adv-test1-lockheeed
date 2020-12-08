import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarComponent } from "./car/car.component";
import { CarsListComponent } from "./cars-list/cars-list.component";

const routes: Routes = [
  { path: "", component: CarsListComponent},
  { path: "car/:id", component: CarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
