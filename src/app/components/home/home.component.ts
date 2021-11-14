import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private dataService: DataService) { }
  
  starShipsData: any;
  starShipsList: any;
  currentDataPage: number = 1;

  ngOnInit(): void {
    this.dataService.getStarships(this.currentDataPage).subscribe((data: any) => {
      console.log(data);
      this.starShipsData = { 
        count: data.count,
        next: data.next,
        previous: data.previous,
      };
      this.starShipsList = data.results;
    });
  }

  getNextPage() {
    this.currentDataPage++;
    this.dataService.getStarships(this.currentDataPage).subscribe((data: any) => {
      this.starShipsData = { 
        count: data.count,
        next: data.next,
        previous: data.previous,
      };
      this.starShipsList = [...this.starShipsList,  ...data.results];
    });
  }

}
