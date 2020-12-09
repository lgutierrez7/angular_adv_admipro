import { Component, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent   {
/*
public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
public doughnutChartData: MultiDataSet = [
  [350, 450, 100],
];*/
public doughnutChartType: ChartType = 'doughnut';

public colors: Color[] = [{
  backgroundColor : ['#FFA000','#CAA080','#FD1000']
}]

@Input() titulo: string = "Sin titulo";
@Input() labels: Label[]  = ['Label1', 'Label2', 'Label3'];
@Input() data: MultiDataSet = [  [350, 450, 100],];

}
