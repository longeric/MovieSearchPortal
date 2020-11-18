import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SearchHomeComponent} from './components/search-home/search-home.component';
import {SearchResultComponent} from './components/search-result/search-result.component';
import {SearchBarComponent} from './components/search-bar/search-bar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatButtonModule} from '@angular/material/button';
import {SearchResults} from './dummydata/search-results';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {HttpClientModule} from '@angular/common/http';
import {MatDialogModule, MatTableModule} from '@angular/material';
import {MatPaginatorModule} from '@angular/material';
import {MatIconModule} from '@angular/material';
import { PosterDialogComponent } from './components/poster-dialog/poster-dialog.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MdePopoverModule} from '@material-extended/mde';
import {MatCardModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    SearchHomeComponent,
    SearchResultComponent,
    SearchBarComponent,
    PosterDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatProgressBarModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatDialogModule,
    ReactiveFormsModule,
    MdePopoverModule,
    MatCardModule
  ],
  providers: [
    SearchResults],
  bootstrap: [AppComponent],
  entryComponents: [PosterDialogComponent]
})
export class AppModule {
}
