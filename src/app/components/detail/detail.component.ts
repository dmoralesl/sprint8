import { BaseDetailComponent } from './../base-detail/base-detail.component';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['../base-detail/base-detail.component.scss']
})
export class DetailComponent extends BaseDetailComponent implements OnInit {
  
  override apiEndpoint: string = 'starships';

}
