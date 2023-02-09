import { Component } from '@angular/core';
import { ScategorieService } from '../services/scategorie.service';
@Component({
  selector: 'app-scategorie',
  templateUrl: './scategorie.component.html',
  styleUrls: ['./scategorie.component.css']
})
export class ScategorieComponent {
    constructor(private scatserv: ScategorieService){
    }
    scategories:any
    formHeader=""
    id=null
    nomscategorie=""
    imagescat=""
    showForm=false
    showFormModif=false



    ngOnInit():void{
      this.listscategories()
    }
    listscategories(){
      this.scatserv.fetchscategories().subscribe(
        (data)=>{
          this.scategories=data;
        }
      )
      }
      DeleteScat(id){
        this.scatserv.deletescategorie(id).subscribe(
        (res)=>{
        this.listscategories();
        })
        }
        openForm(){
          this.showForm=true;
          }
          EditForm(data){
            this.showForm=true;
            this.nomscategorie=data['nomscategorie']
            this.imagescat=data['imagescat']
            this.id=data['_id]'];
            }
          clearForm(){
            this.nomscategorie=""
            this.imagescat=""
            }
          closeForm(){
            this.showForm=false
            this.clearForm();
          
            }
            savescategorie(){
              this.showForm=false;
              let cat={
               
              nomscategorie:this.nomscategorie,
              imagescategorie:this.imagescat
              }
              if(this.id){
              cat['_id']=this.id;
              this.scatserv.Putscategorie(cat).subscribe(
              (res)=>{
              this.listscategories();
              }
              )
              }
              else{
              this.scatserv.addscategorie(cat).subscribe(
              (res)=>{
              this.listscategories();
              }
              )
              }
              this.clearForm();
              }
            
          
      }
  
    

      
      

