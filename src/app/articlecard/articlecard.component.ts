import { Component } from '@angular/core';
import { ArticlesService } from '../services/articles.service';
@Component({
  selector: 'app-articlecard',
  templateUrl: './articlecard.component.html',
  styleUrls: ['./articlecard.component.css']
})
export class ArticlecardComponent {

constructor(private artserv:ArticlesService){}
articles:any;
ngOnInit():void{
this.listarticlecard()
}
listarticlecard(){
this.artserv.fetcharticles().subscribe(
(data)=>{
this.articles=data
}
)
}
}