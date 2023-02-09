import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor( private http :HttpClient) { }
  url="http://localhost:3001/api/categories/"
  fetchcategories(){
    return this.http.get(this.url)
  }
  deletecategorie(id){
    return this.http.delete(this.url+id)
  }
  addcategorie(categ){
    return this.http.post(this.url, categ)
  }
  Putcategorie(cat)
{
return this.http.put(this.url + cat._id,cat)
}


}
