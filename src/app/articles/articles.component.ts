import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../services/articles.service';
import { TitleStrategy } from '@angular/router';
import { Scategorie } from '../Models/scategorie';
import { ScategorieService } from '../services/scategorie.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent {

  constructor (private artserv:ArticlesService,private scatserv: ScategorieService){

}
Articles: any;
scategories: any;
term: string;
reference=""
designation=""
prix=""
marque=""
qtestock=""
imageart=""
scategorieID=""
formHeader="ajouter une article"
id=null
nomArticles=""

showForm=false
showFormModif=false
ngOnInit():void{
  this.listarticles()
  this.loadScategorie();
}
loadScategorie(){
  return this.scatserv.fetchscategories().subscribe(data=>{
    this.scategories =data;}),
    (err:any)=> console.log(err)
}
  listarticles(){
    this.artserv.fetcharticles().subscribe(
      (data)=>{
        this.Articles=data;
      }
    )
    }
  
    deletearticles(id){
      this.artserv.deletearticles(id).subscribe(
      (res)=>{
      this.listarticles();
      })
      }
    openForm(){
      this.showForm=true;
    }
      
      EditForm(data){
        this.showForm=true;
        this.reference=data['reference']
        this.designation=data['designation']
        this.prix=data['prix']
        this.marque=data['marque']
        this.qtestock=data['qtestock']
        this.imageart=data['imageart']
        this.scategorieID=data['scategorieID']
        this.id=data['_id]'];
        }
    
      closeForm(){
      this.showForm=false
      this.clearForm();
      }
      clearForm(){
      this.nomArticles=""
      this.imageart=""
      }
      saveArticles(){
        this.showForm=false;
        let art={
        
       reference:this.reference,
designation:this.designation,
prix:this.prix,
qtestock:this.qtestock,
marque:this.marque,
imageart:this.imageart,
scategorieID:this.scategorieID

        }
        if(this.id){
        art['_id']=this.id;
        this.artserv.Putarticles(art).subscribe(
        (res)=>{
        this.listarticles();
        }
        )
        }
        else{
        this.artserv.addarticles(art).subscribe(
        (res)=>{
        this.listarticles();
        }
        )
        }
        this.clearForm();
        }
      
}
      







 
