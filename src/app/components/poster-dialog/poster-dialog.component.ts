import {Component, OnInit, Inject, Input} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

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
