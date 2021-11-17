import { Component, OnInit } from '@angular/core';

import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { getIdFromUrl } from 'src/app/helpers';

@Component({
  selector: 'app-base-list',
  templateUrl: './base-list.component.html',
  styleUrls: ['./base-list.component.scss']
})
export class BaseListComponent implements OnInit {


  constructor(
    private dataService: DataService,
    private router: Router) { }


  data: any;
  list: any;
  currentDataPage: number = 1;
  apiEndpoint: string = '';
  detailPage: string = '';

  ngOnInit(): void {
    this.dataService.getDataList(this.apiEndpoint ,this.currentDataPage).subscribe((data: any) => {
      this.data = { 
        count: data.count,
        next: data.next,
        previous: data.previous,
      };
      this.list = data.results;
    });
  }

  getNextPage() {
    // Guard clause to avoid getting new data if there is no next page
    if (!this.data.next) { return; }

    this.currentDataPage++;
    this.dataService.getDataList(this.apiEndpoint, this.currentDataPage).subscribe((data: any) => {
      this.data = { 
        count: data.count,
        next: data.next,
        previous: data.previous,
      };
      this.list = [...this.list,  ...data.results];
    });
  }

  // For performance reasons, it will better to had detail of child of component and pass starship data
  // with input directive. But for learning purpose we are using router to navigate with dynamic parameters in the url
  goToDetail(url: string) {
    const idInUrl = getIdFromUrl(url);
    if (idInUrl) {
      this.router.navigate([`/${this.detailPage}/`, idInUrl]);
    }
  }

}
