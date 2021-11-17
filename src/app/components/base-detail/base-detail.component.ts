import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { DataService } from 'src/app/services/data.service';
import { getIdFromUrl } from 'src/app/helpers';

@Component({
  selector: 'app-base-detail',
  templateUrl: './base-detail.component.html',
  styleUrls: ['./base-detail.component.scss']
})
export class BaseDetailComponent implements OnInit {

  detailData: any;
  id: number | null = 0;
  description: string = '';
  apiEndpoint: string = '';
  

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const _id: string | null = params.get('id');
      if (_id) {
        this.id = parseInt(_id);
        this.dataService.getDataDetail(this.apiEndpoint, this.id).subscribe((data: any) => {
          this.detailData = data;
          // Getting random opening crawl from film if it exists for starship
          if (data.films) {
            const filmUrl = data.films[Math.floor(Math.random() * data.films.length)];
            const filmId = getIdFromUrl(filmUrl);
            if (filmId) {
              this.dataService.getFilm(filmId).subscribe((filmData: any) => {
                this.description = filmData.opening_crawl;
              })
            }
          }
        });
      }
    });
  }

}
