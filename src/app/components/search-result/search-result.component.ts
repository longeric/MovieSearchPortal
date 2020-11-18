import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SearchResultsService} from '../../services/search-results.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material';
import {PosterDialogComponent} from '../poster-dialog/poster-dialog.component';
import {QueryResult} from '../../models/query-result';

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
  dataSource: MatTableDataSource<QueryResult>;
  running: number;

  postUrl: any;

  @ViewChild('matPaginator', {static: true})
  paginator: MatPaginator;

  constructor(private route: ActivatedRoute,
              private searchResultsService: SearchResultsService,
              private router: Router,
              private dialog: MatDialog) {
  }

  async ngOnInit() {
    this.running = new Date().getMilliseconds();
    this.route.params.subscribe(params => this.searchResult = params.searchName);
    this.progressValue = 20;
    this.progressValue = 60;
  }

  async ngAfterViewInit() {
    const results = await this._getAllSearchResults();
    this.progressValue = 100;
    // this.dataSource = new MatTableDataSource<string>(results);
    this.dataSource = new MatTableDataSource<QueryResult>(results);
    this.dataSource.paginator = this.paginator;
    this.runningTime = Math.abs(new Date().getMilliseconds() - this.running) / 1000;
  }

  _delay(milliSeconds: number) {
    return new Promise(resolve => setTimeout(resolve, milliSeconds));
  }

  async _getAllSearchResults() {
    // return this.searchResultsService._getAllSearchResults(this.searchResult);
    return this.searchResultsService._getAllQueryResults(this.searchResult);
  }

  _back() {
    this.router.navigate(['/']).catch(e => {
      console.log(e);
    });
  }

  _getUrl(element: string) {
    return 'https://en.wikipedia.org/wiki/' + element;
  }

  async _getPosterResult(element: string) {

    const result = await this.searchResultsService._getPosterResult(element);

    if (result === 'nothing found') {
      this.postUrl = 'assets/nothing_found.png';
    } else {
      this.postUrl = result;
    }
  }
}
