import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchHomeComponent} from "./components/search-home/search-home.component";
import {SearchResultComponent} from "./components/search-result/search-result.component";


const routes: Routes = [
  {path: '', component: SearchHomeComponent},
  {path: 'search', component: SearchResultComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
