import {Injectable} from '@angular/core';
import {SearchResults} from '../dummydata/search-results';
import {HttpService} from '../_helper/http.service';
import {OmdbHttpService} from '../_helper/omdb-http.service';
import {environment} from '../../environments/environment';
import {QueryResult} from '../models/query-result';

@Injectable({
  providedIn: 'root'
})
export class SearchResultsService {

  constructor(private searchResults: SearchResults,
              private http: HttpService,
              private OMDbHttp: OmdbHttpService) {
  }

  _getAllSearchResults(data): Promise<string[]> {
    const httpOptions = {
      params: {
        // category
        searchName: data
      }
    };

    return this.http.get('testQuery', httpOptions);
  }

  _getAllQueryResults(data): Promise<QueryResult[]> {
    const httpOptions = {
      params: {
        // category
        searchName: data
      }
    };

    return this.http.get('testQueryResult', httpOptions);
  }

  async _searchResultsAfterFilter(data): Promise<any> {
    const httpOptions = {
      params: {
        apikey: environment.OMDb_APIKEY,
        s: data
      }
    };

    const response = await this.OMDbHttp.get(httpOptions);

    if (response.Response === 'False') {
      return [];
    }

    return [...new Set(response.Search.map(movie => movie.Title))];
  }
}
