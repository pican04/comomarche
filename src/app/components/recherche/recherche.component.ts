import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Stock } from 'src/app/models/stock';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Product } from 'src/app/models/product';
import { Commande } from 'src/app/models/commande';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {
  lisPosts!: any;
  formRecherche!: FormGroup;


  totalItem = 0
  stocks: Stock[] = [];
  itemCommande!: Commande;
  isAuth = false;

  selectNameProduct = "-";
  selectPrixProduct = 0;
  montantState = 0;


  commandeForm = this.fb.group({
    fullName: ['', [Validators.required]],
    adresse: ['', [Validators.required]],
    contact: ['', [Validators.required]],
    quantite: [1, { nonNullable: true }, Validators.required],
  })

  constructor(private router: Router, private localStorageService: LocalStorageService, 
    private fb: FormBuilder,
    private postService: PostService
    ) { }

    ngOnInit(): void {

      // creer les champs du formulaire
      this.formRecherche = this.fb.group({
        produitLibelle: ['']
      });
    }

    gotoLogin() {
      this.router.navigate(['/login']);
    }
  
    gotoInscription() {
      this.router.navigate(['/nouveau-compte']);
    }

    gotoAccueil() {
      this.router.navigate(['']);
    }
  
    onModalShow(data: Stock) {
      this.selectNameProduct = data.product.name
      this.selectPrixProduct = data.prix;
  
      this.itemCommande.vendeur = data.vendeur;
      this.itemCommande.stock = data;
      this.itemCommande.id = data.id;
    }

    onCloseModal() {
      this.commandeForm.reset();
      this.commandeForm.value.quantite = 1;
    }
  
    onCommander() {
      this.montantState = this.selectPrixProduct * this.selectPrixProduct
    }
  
    onCalcul() {
      this.montantState = Number(this.commandeForm.value.quantite) * this.selectPrixProduct;
    }

    submitSerch() {

      // recuperes tous mes posts
      this.postService.recherchePost(this.formRecherche.value).subscribe(
        (response: any) => {
          this.lisPosts = response.data;
        },
        error => console.log(`Error ${error}`)
      );
    }

}
