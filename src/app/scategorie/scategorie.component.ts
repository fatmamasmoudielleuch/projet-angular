import { Component, OnInit } from '@angular/core';
import { ScategorieService } from '../services/scategorie.service';

@Component({
  selector: 'app-scategorie',
  templateUrl: './scategorie.component.html',
  styleUrls: ['./scategorie.component.css']
})
export class ScategorieComponent implements OnInit {
  scategories: any;
  formHeader = "";
  id = null;
  nomscategorie = "";
  imagescat = "";
  showForm = false;
  showFormModif = false;

  constructor(private scatserv: ScategorieService) {}

  ngOnInit(): void {
    this.listscategories();
  }

  listscategories() {
    this.scatserv.fetchscategories().subscribe(
      (data) => {
        this.scategories = data;
      }
    );
  }

  DeleteScat(id) {
    this.scatserv.deletescategorie(id).subscribe(
      (res) => {
        this.listscategories();
      }
    );
  }

  openForm() {
    this.id = null;
    this.nomscategorie = "";
    this.imagescat = "";
    this.showForm = true;
  }

  EditForm(data) {
    this.showForm = true;
    this.nomscategorie = data['nomscategorie'];
    this.imagescat = data['imagescat'];
    this.id = data['_id'];
  }

  clearForm() {
    this.id = null;
    this.nomscategorie = "";
    this.imagescat = "";
  }

  closeForm() {
    this.showForm = false;
    this.clearForm();
  }

  savescategorie() {
    this.showForm = false;
    let cat = {
      nomscategorie: this.nomscategorie,
      imagescategorie: this.imagescat
    };

    if (this.id) {
      cat['_id'] = this.id;
      this.scatserv.Putscategorie(cat).subscribe(
        (res) => {
          this.listscategories();
        }
      );
    } else {
      this.scatserv.addscategorie(cat).subscribe(
        (res) => {
          this.listscategories();
        }
      );
    }

    this.clearForm();
  }
}
