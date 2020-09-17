import { Injectable } from '@angular/core';
import { ApiEndpointsService } from 'src/app/core/services/api-endpoints.service';
import { Controllers, Actions } from 'src/app/app-constants';
import { Floss } from 'src/app/models/floss';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiFlossesService {

  constructor(private httpClient: HttpClient,
    private apiEndpointsService: ApiEndpointsService) {
  }

  public getAllFlosses(): Observable<Floss[]> {
    return this.httpClient.get<Floss[]>(
      this.apiEndpointsService.createUrl(Controllers.FLOSS, Actions.GET_ALL)
    )
      .pipe(
        map(x => x.map(y => new Floss(y)))
      );
  }
}
