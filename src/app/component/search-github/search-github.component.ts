import { Component, OnInit } from '@angular/core';

import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {GithubSearch} from '../../models/github-search';
import {SearchServices} from '../../services/search.services';

@Component({
  selector: 'app-search-github',
  templateUrl: './search-github.component.html',
  styleUrls: ['./search-github.component.scss'],
  providers:[SearchServices]
})
export class SearchGithubComponent implements OnInit {
  info:string;
  formData: FormGroup = this.formBuilder.group({
    // total_count:null,
    // items: new FormArray([]),
    title:null

  });
  constructor(private formBuilder: FormBuilder,private  searchServices:SearchServices) { }
result :GithubSearch=new GithubSearch();

  searchResult(){
    this.searchServices.getSearchResult(this.formData.get("title").value).subscribe(res=>{
      this.result=res;
      console.log(res);
    });
  }
  ngOnInit() {
    this.searchResult();
  }

}
