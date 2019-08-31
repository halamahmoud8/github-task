import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {GithubSearch} from '../models/github-search';
import {Search} from '../models/search';


@Injectable()

export class SearchServices {


  constructor(private httpClient:HttpClient) {
  }

  getSearchResult(title: string){
    let queryParameter: HttpParams = new HttpParams();
    queryParameter = queryParameter.append("q",title);
    return this.httpClient.get<GithubSearch>("https://api.github.com/search/repositories",{params: queryParameter})


  }
  getDetails(owner:string,fullname :string){
    return this.httpClient.get<Search>("https://api.github.com/repos/"+owner +"/"+fullname)

  }
}
