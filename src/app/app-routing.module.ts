import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchGithubComponent} from './component/search-github/search-github.component';
import {ResultDetailsComponent} from './component/result-details/result-details.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'github/repositories'},
  {path:'github/repositories', children: [
      {path: '', component: SearchGithubComponent},
      {path: ':owner/:repoName', component: ResultDetailsComponent }
    ]}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
