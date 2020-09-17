import { Component, OnInit } from '@angular/core';
import { ApiFlossesService } from 'src/app/services/api/api-flosses.service';
import { Floss } from 'src/app/models/floss';

@Component({
  selector: 'app-flosses-list',
  templateUrl: './flosses-list.component.html',
  styleUrls: ['./flosses-list.component.scss'],
})
export class FlossesListComponent implements OnInit {

  constructor(private apiFlossesService: ApiFlossesService) {
  }

  ngOnInit() {
    this.apiFlossesService.getAllFlosses()
      .subscribe((flosses: Floss[]) => {
        console.log(JSON.stringify(flosses));
      });
  }
}
