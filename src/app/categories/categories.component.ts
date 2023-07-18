import { Component } from '@angular/core';
import { CategorieService } from '../services/categorie.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {

  constructor(private catserv: CategorieService) {}

  categories: any;
  formHeader = "Modifier une catégorie";
  id: any = null;
  nomcategorie: string = "";
  imagecategorie: string = "";
  showForm = false;

  ngOnInit(): void {
    this.listcategories();
  }

  listcategories() {
    this.catserv.fetchcategories().subscribe(
      (data) => {
        this.categories = data;
      }
    );
  }

  DeleteCat(id: any) {
    this.catserv.deletecategorie(id).subscribe(
      (res) => {
        this.listcategories();
      }
    );
  }

  openForm() {
    this.showForm = true;
  }

  EditForm(data: any) {
    this.showForm = true;
    this.nomcategorie = data.nomcategorie;
    this.imagecategorie = data.imagecategorie;
    this.id = data._id;
  }

  clearForm() {
    this.nomcategorie = "";
    this.imagecategorie = "";
  }

  closeForm() {
    this.showForm = false;
    this.clearForm();
  }

  savecategorie() {
    this.showForm = false;
    const cat = {
      nomcategorie: this.nomcategorie,
      imagecategorie: this.imagecategorie
    };
    if (this.id) {
      cat['_id'] = this.id;
      this.catserv.Putcategorie(cat).subscribe(
        (res) => {
          this.listcategories();
        }
      );
    } else {
      this.catserv.addcategorie(cat).subscribe(
        (res) => {
          this.listcategories();
        }
      );
    }
    this.clearForm();
  }
}
