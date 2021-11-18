import { BaseDetailComponent } from './../base-detail/base-detail.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['../base-detail/base-detail.component.scss']
})
export class CharacterComponent extends BaseDetailComponent implements OnInit {

  override apiEndpoint: string = 'people';
  
}
