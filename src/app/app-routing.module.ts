import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleDetailComponent } from './people-detail/people-detail.component';
import { SearchComponent } from './search/search.component';


const routes: Routes = [
  {path: 'search', component: SearchComponent},
  {path: 'detail/:id', component: PeopleDetailComponent},
  {path: '', redirectTo: 'search', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
