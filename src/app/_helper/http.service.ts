import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {
  }

  get<T>(url: string, httpOptions: any): Promise<any> {
    return this.http.get<T>(`${environment.API_HOST}/${url}`, httpOptions).toPromise();
  }
}
