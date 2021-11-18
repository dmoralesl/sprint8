import { BaseDetailComponent } from '../base-detail/base-detail.component';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-starship',
  templateUrl: './starship.component.html',
  styleUrls: ['../base-detail/base-detail.component.scss']
})
export class StarshipComponent extends BaseDetailComponent implements OnInit {
  
  override apiEndpoint: string = 'starships';

}
