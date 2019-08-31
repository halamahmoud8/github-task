import { Component, OnInit } from '@angular/core';
import {SearchServices} from '../../services/search.services';
import {Search} from '../../models/search';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-search-details',
  templateUrl: './result-details.component.html',
  styleUrls: ['./result-details.component.scss'],
  providers:[SearchServices]
})
export class ResultDetailsComponent implements OnInit {
  data :Search=new Search();
  owner:string;
  fullname:string;

  constructor(private  searchServices:SearchServices,private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params=>{
      this.owner=params.get("owner");
        this.fullname=params.get("repoName");
    });
  }
detail(){
    this.searchServices.getDetails(this.owner,this.fullname).subscribe(res=>{this.data=res;
    console.log(res)});
}
  ngOnInit() {
    this.detail();
  }

}
