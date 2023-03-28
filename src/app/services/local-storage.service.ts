import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Stock } from '../models/stock';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  users: User[] = [
    {
      id: 1,
      name: "Nadia",
      prenom: "Georgette",
      identifiant: "nadia",
      password: "1234"
    },
    {
      id: 2,
      name: "Daniel",
      prenom: "Stephane",
      password: "1234",
      identifiant: "daniel",
    }
  ]

  products: Product[] = [
    {
      id: 1,
      name: "Banane",
      imageUrl: "../../../assets/img/products/banane.jpg",
      imageUrl2: "../../../assets/img/products/banane2.jpg",
    },
    {
      id: 2,
      name: "Manioc",
      imageUrl: "../../../assets/img/products/manioc.jpg",
      imageUrl2: "../../../assets/img/products/manioc2.jpg"
    },
    {
      id: 3,
      name: "Igname",
      imageUrl: "../../../assets/img/products/igname.jpg",
      imageUrl2: "../../../assets/img/products/igname2.jpg",
    },
    {
      id: 4,
      name: "Tomate",
      imageUrl: "../../../assets/img/products/tomate.jpg",
      imageUrl2: "../../../assets/img/products/tomate2.jpg",
    },
  ]

  constructor() { }

  setLocalStorage(name: string, value: any) {
    localStorage.setItem(name, value);
  }

  getLocalStorage(name: string) {
    return JSON.parse(localStorage.getItem(name)!); 
  }

  deleteLocalStorage(name: string) {
    localStorage.removeItem(name);
  }

  viderLocalStorage(name: string) {
    localStorage.clear();
  }

  initialisationDefaultsUsersDatas() {

    let stocks: Stock[] = [
      {
        id: 1,
        vendeur: this.users[0],
        product: this.products[3],
        quantite: 96,
        prix: 455
      },
      {
        id: 2,
        vendeur: this.users[0],
        product: this.products[1],
        quantite: 135,
        prix: 1500
      },
      {
        id: 3,
        vendeur: this.users[0],
        product: this.products[2],
        quantite: 40,
        prix: 940
      },
      {
        id: 4,
        vendeur: this.users[1],
        product: this.products[2],
        quantite: 135,
        prix: 900
      },
      {
        id: 5,
        vendeur: this.users[1],
        product: this.products[2],
        quantite: 135,
        prix: 430
      },
      {
        id: 6,
        vendeur: this.users[0],
        product: this.products[1],
        quantite: 135,
        prix: 1500
      },
      {
        id: 7,
        vendeur: this.users[1],
        product: this.products[0],
        quantite: 135,
        prix: 2100
      },
      {
        id: 8,
        vendeur: this.users[0],
        product: this.products[3],
        quantite: 345,
        prix: 250
      },
    ]

    this.setLocalStorage("users", JSON.stringify(this.users));
    this.setLocalStorage("products", JSON.stringify(this.products));
    this.setLocalStorage("stocks", JSON.stringify(stocks));
  }

}
