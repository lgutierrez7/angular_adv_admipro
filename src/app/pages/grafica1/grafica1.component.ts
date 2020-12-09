import { Component, OnInit } from '@angular/core';
import { Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  label_grafica1: String[]  = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  data_grafica1 = [  [350, 450, 100],];

  label_grafica2: String[]  = ['Download Purcharse', 'In-Store Purcharse', 'Mail-Order Purcharse'];
  data_grafica2 = [  [100, 600, 200],];

}
