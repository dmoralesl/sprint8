import { Component, OnInit } from '@angular/core';

import { BaseListComponent } from '../base-list/base-list.component';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss']
})
export class StarshipsComponent extends BaseListComponent implements OnInit {

  
  override apiEndpoint: string = 'starships';
  override detailPage: string = 'starship';

}
