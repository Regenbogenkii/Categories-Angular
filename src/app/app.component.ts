import { Component } from '@angular/core';
import { CategoriesService } from './categories.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'show-categories';
  categories:any;
  searchInput = '';
  constructor(public catService:CategoriesService,private http: HttpClient){

  }
  
  ngOnInit(){
    this.getCategories();
  }

  getCategories() {
    this.catService.getCategories().subscribe(res=>{
    this.categories = res
      this.categories = this.categories.filter(ele=>ele.includes(this.searchInput));
    })
  }


  onFilterCate(filter){
    this.searchInput = filter
    this.getCategories()
    
  }
}
