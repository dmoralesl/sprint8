import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { DataService } from './../../services/data.service';
import { getIdFromUrl } from 'src/app/helpers';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  
  starshipData: any;
  id: number | null = 0;
  description: string = '';


  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const _id: string | null = params.get('id');
      if (_id) {
        this.id = parseInt(_id);
        this.dataService.getStarship(this.id).subscribe((data: any) => {
          this.starshipData = data;
          // Getting random opening crawl from film if it exists for starship
          if (data.films) {
            const filmUrl = data.films[Math.floor(Math.random() * data.films.length)];
            const filmId = getIdFromUrl(filmUrl);
            if (filmId) {
              this.dataService.getFilm(filmId).subscribe((filmData: any) => {
                console.log(filmData);
                this.description = filmData.opening_crawl;
              })
            }
          }
        });
      }
    });
  }
}
