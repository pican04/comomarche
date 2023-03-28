import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Stock } from 'src/app/models/stock';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Product } from 'src/app/models/product';
import { Commande } from 'src/app/models/commande';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  lisPosts!: any;




  isOk = -1;
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

    // recuperes tous mes posts
    // request create
    this.postService.getPosts().subscribe(
      (response: any) => {
        this.lisPosts = response.data;
      },
      error => console.log(`Error ${error}`)
    );

    this.stocks = this.localStorageService.getLocalStorage("stocks");
    this.isAuth = this.localStorageService.getLocalStorage("isAuth") ? true : false;
  }

  gotoLogin() {
    this.router.navigate(['/login']);
  }

  gotoInscription() {
    this.router.navigate(['/nouveau-compte']);
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

    alert("Votre commande a été enregistrée,vous recevrez votre code de commande par SMS")
  }

  onCalcul() {
    this.montantState = Number(this.commandeForm.value.quantite) * this.selectPrixProduct;
  }

}
