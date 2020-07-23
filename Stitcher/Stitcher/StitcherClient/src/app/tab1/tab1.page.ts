import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private httpClient: HttpClient) {
    this.httpClient.get<any>("https://localhost:44386/api/Floss/dupa").subscribe(response => {
      console.log(JSON.stringify(response));
    })
  }

}
