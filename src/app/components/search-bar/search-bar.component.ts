import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild
} from '@angular/core';
import {Router} from '@angular/router';
import {fromEvent} from 'rxjs';
import {debounceTime, map} from 'rxjs/operators';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {SearchResultsService} from '../../services/search-results.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit, AfterViewInit {

  @Input()
  searchResult = '';

  @ViewChild('searchInput', {read: ElementRef, static: true})
  searchInput: ElementRef<HTMLInputElement>;

  autocompleteResults: string[] = [];

  constructor(private router: Router,
              private searchResultsService: SearchResultsService) {
  }

  ngOnInit() {
    this.searchInput.nativeElement.value = this.searchResult;
  }

  ngAfterViewInit(): void {
    fromEvent(this.searchInput.nativeElement, 'keyup')
      .pipe(map(x => this.searchInput.nativeElement.value),
        debounceTime(10))
      .subscribe(async (data) => {
        this.autocompleteResults = await this.searchResultsService._searchResultsAfterFilter(data);
      });
  }

  _selectResult(selectedResult: MatAutocompleteSelectedEvent) {
    selectedResult.source.options.forEach(async (result, index) => {
      if (result.selected) {
        this.searchInput.nativeElement.value = this.autocompleteResults[index];
        this._routeToNewSearchPage(this.searchInput.nativeElement.value);
      }
    });
  }

  _searching() {
    const searchName = this.searchInput.nativeElement.value;
    this._routeToNewSearchPage(searchName);
  }

  _routeToNewSearchPage(searchName: string) {
    if (this.router.url === '/') {
      this.router.navigate(['/search', searchName]);
    } else {
      this.router.navigate(['/search', searchName]).then(() => location.reload());
    }
  }
}
