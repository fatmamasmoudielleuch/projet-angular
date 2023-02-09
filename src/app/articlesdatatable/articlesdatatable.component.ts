import { Component } from '@angular/core';
import { ArticlesService } from '../services/articles.service';


@Component({
  selector: 'app-articlesdatatable',
  templateUrl: './articlesdatatable.component.html',
  styleUrls: ['./articlesdatatable.component.css']
})
export class ArticlesdatatableComponent {
  constructor(private artserv:ArticlesService){}
articles:any;
ngOnInit():void{
this.listarticles()
}
listarticles(){
this.artserv.fetcharticles().subscribe(
(data)=>{
this.articles=data
}
)
}

}
