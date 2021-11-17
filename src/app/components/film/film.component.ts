import { Component, Input, OnInit } from '@angular/core';

import { DataService } from 'src/app/services/data.service';
import { getIdFromUrl } from 'src/app/helpers';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['../pilot/pilot.component.scss']
})
export class FilmComponent implements OnInit {


  @Input() filmUrl: string = '';
  filmId: number | null = 0;
  film: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    // Guard clause to not perfom requests if pilotUrl is empty
    if (!this.filmUrl) { return; }
  
    this.filmId = getIdFromUrl(this.filmUrl);
    // If url is provided but has not a valid format, getIdFromUrl will return null and 
    // we could not perfomr the request
    if (!this.filmId) { return; }
    this.dataService.getFilm(this.filmId).subscribe((data: any) => {
      this.film = data;
    });
  }

}
