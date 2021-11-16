import { Component, Input, OnInit } from '@angular/core';

import { DataService } from 'src/app/services/data.service';
import { getIdFromUrl } from 'src/app/helpers';

@Component({
  selector: 'app-pilot',
  templateUrl: './pilot.component.html',
  styleUrls: ['./pilot.component.scss']
})
export class PilotComponent implements OnInit {

  @Input() pilotUrl: string = '';
  pilotId: number | null = 0;
  character: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    // Guard clause to not perfom requests if pilotUrl is empty
    if (!this.pilotUrl) { return; }
  
    this.pilotId = getIdFromUrl(this.pilotUrl);
    // If url is provided but has not a valid format, getIdFromUrl will return null and 
    // we could not perfomr the request
    if (!this.pilotId) { return; }
    this.dataService.getCharacter(this.pilotId).subscribe((data: any) => {
      this.character = data;
    });
  }

    


}
