import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OmdbHttpService {

  constructor(private http: HttpClient) {
  }

  get<T>(httpOptions: any): Promise<any> {
    return this.http.get<T>(`${environment.OMDb_HOST}`, httpOptions)
      .toPromise()
      .catch(e => {
        console.log(e);
      });
  }
}
