import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TheMovieDBHttpService {

  constructor(private http: HttpClient) { }

  get<T>(HttpOptions: any): Promise<any> {
    return this.http.get<T>(`${environment.PosterMovieDB_Host}`, HttpOptions)
      .toPromise()
      .catch(e => {
        console.log(e);
      });
  }
}
