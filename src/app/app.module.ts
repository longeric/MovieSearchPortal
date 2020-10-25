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
import {MatTableModule} from '@angular/material';
import {MatPaginatorModule} from '@angular/material';
import {MatIconModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    SearchHomeComponent,
    SearchResultComponent,
    SearchBarComponent
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
    MatIconModule
  ],
  providers: [
    SearchResults],
  bootstrap: [AppComponent]
})
export class AppModule {
}
