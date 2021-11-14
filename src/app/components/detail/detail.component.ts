import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { DataService } from './../../services/data.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  
  starshipData: any;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id: string | null = params.get('id');
      if (id) {
        this.dataService.getStarship(parseInt(id)).subscribe((data: any) => {
          console.log(data);
          this.starshipData = data;
        });
      }
    });
  }
}
