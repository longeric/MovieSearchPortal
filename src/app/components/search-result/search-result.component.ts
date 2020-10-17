import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SearchResults} from "../../dummydata/search-results";
import {SearchResultsService} from "../../services/search-results.service";

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  searchResult: "EMPTY";
  allSearchResults: string[] = [];
  progressValue: number;

  constructor(private route: ActivatedRoute,
              private searchResultsService: SearchResultsService) { }

  async ngOnInit() {
    this.allSearchResults = [];
    this.progressValue = 20
    this.route.params.subscribe(params => this.searchResult = params["searchName"])
    this.progressValue = 60
    this._delay(1000).then(() => {
      this._getAllSearchResults().then((results) => {
        this.progressValue = 100;
        this.allSearchResults = results;
      })
    })
  }

  _delay(milliSeconds: number) {
    return new Promise( resolve => setTimeout(resolve, milliSeconds) );
  }

  _getAllSearchResults() {
    return this.searchResultsService._getAllSearchResults(this.searchResult);
  }

  _back() {
    window.history.back()
  }
}
