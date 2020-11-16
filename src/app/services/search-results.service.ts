import {Injectable} from '@angular/core';
import {SearchResults} from '../dummydata/search-results';
import {HttpService} from '../_helper/http.service';
import {OMDbHttpServiceService} from '../_helper/omdb-http-service.service';
import {environment} from '../../environments/environment';
import { TheMovieDBHttpService } from '../_helper/the-movie-dbhttp.service';

@Injectable({
  providedIn: 'root'
})
export class SearchResultsService {

  constructor(private searchResults: SearchResults,
              private http: HttpService,
              private OMDbHttp: OMDbHttpServiceService,
              private PostMovieDbHttp: TheMovieDBHttpService) {
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

  async _getPosterResult(element){
    const httpOptions = {
      params: {
        api_key: environment.PosterMovieDB_APIKey,
        query: element//here should be each movie name?
      }
    };
    const response = await this.PostMovieDbHttp.get(httpOptions);
    // console.log(response);
    if(response.total_results == 0){
      return "nothing found";
    }
    return "http://image.tmdb.org/t/p/w500/"+response.results[0].poster_path;
  }
}
