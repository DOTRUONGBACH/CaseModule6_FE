import {Component, OnInit} from '@angular/core';
import {ShowTotalBillService} from "../../service/show-total-bill.service";


// @ts-ignore
import {Chart} from 'chart.js';

@Component({
  selector: 'app-show-total-bill',
  templateUrl: './show-total-bill.component.html',
  styleUrls: ['./show-total-bill.component.css']
})
export class ShowTotalBillComponent implements OnInit {
  constructor(private showTotalBillService: ShowTotalBillService) {
  }

  chartdata: any;

  monthdata: any[] = [];

  totaldata: any[] = [];


  colordata: any[] = ['red','yellow','grey','black','orange','blue','while'];

  ngOnInit(): void {
    this.showTotalBillService.getShowTotalBill().subscribe(data => {
      this.chartdata = data;
      if (this.chartdata != null) {
        for (let i = 0; i < this.chartdata.length; i++) {
          this.monthdata.push(this.chartdata[i].month);
          this.totaldata.push(this.chartdata[i].totalBill);
          this.colordata.push(this.chartdata[i].colordata);

        }
        this.RenderChart(this.monthdata, this.totaldata,this.colordata,'bar','barchart');
        this.RenderChart(this.monthdata, this.totaldata,this.colordata,'pie','piechart');

      }
    });
  }

  RenderChart(monthdata:any,totaldata:any,colordata:any,type:any,id:any) {

    const myChart = new Chart(id, {
      type: type,
      data: {
        labels: monthdata,

        datasets: [{
          label: '',
          data: totaldata,
          backgroundColor:colordata,
          borderColor: ['rgba(255,99,132,1)'],
          borderWidth: 1
        },

        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
