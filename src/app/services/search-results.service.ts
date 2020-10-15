import { Injectable } from '@angular/core';
import {SearchResults} from "../dummydata/search-results";

@Injectable({
  providedIn: 'root'
})
export class SearchResultsService {

  constructor(private searchResults: SearchResults) { }

  _getAllSearchResults(data): string[] {
    return this.searchResults._getAllSearchResults(data);
  }

  _searchResultsAfterFilter(data) {
    return this.searchResults._searchResultsAfterFilter(data)
  }
}
