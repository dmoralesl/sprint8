import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private dataService: DataService,
    private router: Router) { }
  
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
    // Guard clause to avoid getting new data if there is no next page
    if (!this.starShipsData.next) { return; }

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

  // For performance reasons, it will better to had detail of child of component and pass starship data
  // with input directive. But for learning purpose we are using router to navigate with dynamic parameters in the url
  goToDetail(url: string) {
    console.log(url);
    const idInUrl: RegExpMatchArray | null = url.match(/\/[000-999]\/$/);
    if (idInUrl) {
      const id: number = parseInt(idInUrl[0].replace('/', ''));
      this.router.navigate(['/starship/', id])
    }
  }

}
