import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SearchResultsService} from '../../services/search-results.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit, AfterViewInit {
  searchResult = '';
  progressValue = 0;
  runningTime: number;
  displayedColumns: string[] = ['result'];
  dataSource: any;

  @ViewChild('matPaginator', {static: true})
  paginator: MatPaginator;

  constructor(private route: ActivatedRoute,
              private searchResultsService: SearchResultsService,
              private router: Router) {
  }

  ngOnInit() {
    const running = new Date().getMilliseconds();
    this.route.params.subscribe(params => this.searchResult = params.searchName);
    this.progressValue = 20;
    this.progressValue = 60;
    this._getAllSearchResults().then((results) => {
      this.progressValue = 100;
      this.dataSource = new MatTableDataSource<string>(results);
      this.dataSource.paginator = this.paginator;
      this.runningTime = Math.abs(new Date().getMilliseconds() - running) / 1000;
    });
  }

  ngAfterViewInit() {
  }

  _delay(milliSeconds: number) {
    return new Promise(resolve => setTimeout(resolve, milliSeconds));
  }

  _getAllSearchResults() {
    return this.searchResultsService._getAllSearchResults(this.searchResult);
  }

  _back() {
    this.router.navigate(['/']).catch(e => {
      console.log(e);
    });
  }

  _getUrl(element: string) {
    return 'https://en.wikipedia.org/wiki/' + element;
  }
}
