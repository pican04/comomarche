import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { Stock } from 'src/app/models/stock';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { FormBuilder, ValidatorFn, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { ProduitsService } from 'src/app/services/produits.service';
import { MarchandService } from 'src/app/services/marchand.service';

@Component({
  selector: 'app-dashbord-vendor',
  templateUrl: './dashbord-vendor.component.html',
  styleUrls: ['./dashbord-vendor.component.css']
})
export class DashbordVendorComponent implements OnInit {
  infosMarchand!: any;
  formPost!: FormGroup;
  listProduits!: any;
  isOk = -1;







  index = 320;
  allProducts!: Product[];
  stocks!: Stock[];

  myProduct!: Product;
  myQuantite!: number;
  myPrix!: number;
  myStock!: Stock;

  constructor(
    private router: Router, 
    private storageService: LocalStorageService, 
    private fb: FormBuilder,
    private produitService: ProduitsService,
    private marchandService: MarchandService
    ) { }

  ngOnInit(): void {

    // creer les champs du formulaire
    this.formPost = this.fb.group({
      prix: [0, Validators.required ],
      prixMax: [0, Validators.required ],
      prixMin: [0, Validators.required ],
      description: ['', Validators.required ],
      unite: [0, Validators.required ],
      productId: [0, Validators.required ],
    });
    
    // recupere les infos mrchand depuis tokenStorage
    this.infosMarchand = this.storageService.getLocalStorage("current_data");

    this.produitService.getProduits().subscribe(
      (response: any) => {
        this.listProduits = response.data;
      },
      error => console.log(`Error ${error}`)
    );

    // this.allProducts = this.storageService.getLocalStorage("products");
    // this.stocks = this.storageService.getLocalStorage("stocks");
    // this.myStock.id = 67
  }

  gotoAccueil() {
    this.router.navigate(['']);
  }

  onDeconnecter() {
    this.storageService.deleteLocalStorage("isAuth");
    this.router.navigate(['']);
  }

  onClickPrix(e: any) {
    this.myPrix = e.target.value;
  }

  onClickQuantite(e: any) {
    this.myQuantite = e.target.value;
  }

  onClickArticle(e: any) {
    this.myProduct = e.target.value;
  }

  onPublierStock() {
    // this.myStock.id = 128;
    // this.myStock.product = this.myProduct;
    // this.myStock.quantite = this.myQuantite;
    // this.myStock.prix = this.myPrix;

    // console.log( this.myStock )
  }

  submitForm() {

    if (this.formPost.valid) {
      let data = this.formPost.value;
      data.marchandId = this.infosMarchand.id;
      
      // request create
      this.marchandService.creerPost(data).subscribe(
        (response: any) => {
          // if created = 1 or If error error = 0
          this.isOk = response.code == 200 ? 1 : 0;
          if (this.isOk) {
            this.formPost.reset(); // form.reset();
          }
        },
        error => console.log(`Error ${error}`)
      );
    }
    
  }

}
