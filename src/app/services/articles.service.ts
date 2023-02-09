import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor( private http :HttpClient) {}
    url="http://localhost:3001/api/articles/"
    fetcharticles(){
      return this.http.get(this.url)
    }
    deletearticles(id){
      return this.http.delete(this.url+"/"+id)
    }
    addarticles(art){
      return this.http.post(this.url, art)
    }
    Putarticles(art)
  {
  return this.http.put(this.url + art._id,art)
  }
  
  
  }
  
   

