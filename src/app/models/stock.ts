import { Product } from "./product";
import { User } from "./user";

export class Stock {
    id!: number;
    vendeur!: User;
    product!: Product;
    quantite!: number;
    prix!: number
}