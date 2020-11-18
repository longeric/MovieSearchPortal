import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-poster-dialog',
  templateUrl: './poster-dialog.component.html',
  styleUrls: ['./poster-dialog.component.css']
})
export class PosterDialogComponent implements OnInit {
  @Input()
  url: string;

  constructor() { }

  ngOnInit() {
  }

}
