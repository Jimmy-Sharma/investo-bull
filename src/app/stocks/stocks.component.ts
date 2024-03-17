import { NgIf } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
interface Stock {
  symbol: string;
  openHigh: string;
  openLow: string;
  openHigh2: string;
  openLow2: string;
  openHigh3: string;
  openLow3: string;
}
@Component({
  selector: 'app-stocks',
  standalone: true,
  imports: [HttpClientModule,NgIf],
  templateUrl: './stocks.component.html',
  styleUrl: './stocks.component.css'
})
export class StocksComponent implements OnInit {

  httpClient = inject(HttpClient)
  data: any[] = []

  ngOnInit(): void {
    this.fetchData()
  }
  fetchData() {
    this.httpClient.get('https://intradayscreener.com/api/openhighlow/cash').subscribe((data: any) => {
      console.log(data);
      this.data = data
    })
  }

}

