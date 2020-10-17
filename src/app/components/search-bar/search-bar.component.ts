import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {fromEvent} from "rxjs";
import {debounceTime, map} from "rxjs/operators";
import {MatAutocompleteSelectedEvent} from "@angular/material/autocomplete";
import {SearchResultsService} from "../../services/search-results.service";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @Input()
  searchResult = "";

  @ViewChild("searchInput", {static: false})
  searchInput: ElementRef<HTMLInputElement>;

  autocompleteResults = [];

  constructor(private router: Router,
              private searchResultsService: SearchResultsService,) { }

  ngOnInit() {
    console.log(environment.production)
  }

  ngAfterViewInit(): void {
    fromEvent(this.searchInput.nativeElement, "keyup")
      .pipe(map(x => this.searchInput.nativeElement.value),
      debounceTime(10))
      .subscribe(async (data) => {
        this.autocompleteResults = await this.searchResultsService._searchResultsAfterFilter(data);
    })
  }

  _selectResult(selectedResult: MatAutocompleteSelectedEvent) {
    selectedResult.source.options.forEach(async (result, index) => {
      if (result.selected) {
        this.searchInput.nativeElement.value = this.autocompleteResults[index]
      }
    })
  }

  _searching() {
    let searchName = this.searchInput.nativeElement.value
    this.router.navigate(['/search',searchName]).then( result => location.reload());
  }
}
