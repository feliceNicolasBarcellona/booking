import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SearchComponent } from "./search.component";
import { NoResultsComponent } from "./no-results.component";

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: SearchComponent},
    { path: 'no-results', component: NoResultsComponent},
  ])],
  exports: [
    RouterModule
  ]
})

export class SearchRoutingModule {

}
