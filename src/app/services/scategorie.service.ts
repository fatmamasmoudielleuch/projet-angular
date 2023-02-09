import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ScategorieService {

  constructor(private http:HttpClient) {}
  url="http://localhost:3001/api/scategories/"
  fetchscategories(){
    return this.http.get(this.url)
  }
  deletescategorie(id){
    return this.http.delete(this.url+id)
  }
  addscategorie(scateg){
    return this.http.post(this.url, scateg)
  }
  Putscategorie(scat)
{
return this.http.put(this.url + scat._id,scat)
}


}