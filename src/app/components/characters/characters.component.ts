import { BaseListComponent } from './../base-list/base-list.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent extends BaseListComponent implements OnInit {

  override apiEndpoint: string = 'people';
  override detailPage: string = 'character';
}
