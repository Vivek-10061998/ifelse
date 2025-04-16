import { Component, Input, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { HighchartsChartModule } from 'highcharts-angular';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-lazy-highchart',
  standalone: true,
  imports: [CommonModule, HighchartsChartModule],
  template: `
    <div *ngIf="isBrowser">
      <highcharts-chart
        [Highcharts]="Highcharts"
        [options]="chartOptions"
        style="width: 100%; height: 300px; display: block">
      </highcharts-chart>
    </div>
  `
})
export class LazyHighchartComponent {
  isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  Highcharts: typeof Highcharts = Highcharts;

  @Input() chartOptions: Highcharts.Options = {};
}
