import { Component } from '@angular/core';
import { CategorieService } from '../services/categorie.service';
import { TitleStrategy } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {

  constructor (private catserv:CategorieService){

  }
  categories: any
  formHeader="Ajouter une categorie"
id=null
nomcategorie="cosmetique"
imagecategorie=""
showForm=false
showFormModif=false
  ngOnInit():void{
    this.listcategories()
  }
  listcategories(){
    this.catserv.fetchcategories().subscribe(
      (data)=>{
        this.categories=data;
      }
    )
    }
    DeleteCat(id){
      this.catserv.deletecategorie(id).subscribe(
      (res)=>{
      this.listcategories();
      })
      }
      openForm(){
        this.showForm=true;
        }
        EditForm(data){
          this.showForm=true;
          this.nomcategorie=data['nomcategorie']
          this.imagecategorie=data['imagecategorie']
          this.id=data['_id]'];
          }
        clearForm(){
          this.nomcategorie=""
          this.imagecategorie=""
          }
        closeForm(){
          this.showForm=false
          this.clearForm();
        
          }
          savecategorie(){
            this.showForm=false;
            let cat={
            
            nomcategorie:this.nomcategorie,
            imagecategorie:this.imagecategorie
            }
            if(this.id){
            cat['_id']=this.id;
            this.catserv.Putcategorie(cat).subscribe(
            (res)=>{
            this.listcategories();
            }
            )
            }
            else{
            this.catserv.addcategorie(cat).subscribe(
            (res)=>{
            this.listcategories();
            }
            )
            }
            this.clearForm();
            }
          
        
    }

  