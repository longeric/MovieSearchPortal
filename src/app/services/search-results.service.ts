import { Injectable } from '@angular/core';
import {SearchResults} from "../dummydata/search-results";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SearchResultsService {

  constructor(private searchResults: SearchResults,
              private http: HttpClient,) { }

  _getAllSearchResults(data): Promise<any> {
    return this.http.get(`${environment.API_HOST}/searchResult`, {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    }).toPromise()
      .catch((e) => {
      console.log(e);
    })
    // return this.searchResults._getAllSearchResults(data);
  }

  _searchResultsAfterFilter(data) {
    return this.searchResults._searchResultsAfterFilter(data)
  }
}
