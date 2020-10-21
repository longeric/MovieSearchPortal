import {Injectable} from '@angular/core';
import {SearchResults} from '../dummydata/search-results';
import {HttpHeaders} from '@angular/common/http';
import {HttpService} from '../_helper/http.service';

@Injectable({
  providedIn: 'root'
})
export class SearchResultsService {

  constructor(private searchResults: SearchResults,
              private http: HttpService,) {
  }

  _getAllSearchResults(data): Promise<string[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      }),
      params: {
        searchName: data
      }
    };

    return this.http.get('searchResult', httpOptions);
  }

  _searchResultsAfterFilter(data) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      }),
      params: {
        searchName: data
      }
    };

    return this.http.get('relevant', httpOptions);
  }
}
