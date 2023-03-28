import { Stock } from "./stock";
import { User } from "./user";

export class Commande {
    id!: number;
    vendeur!: User;
    stock?: Stock
    quantite?: number;
    contact!: string;
    fullName?: string;
    prixTotal!: number;
}