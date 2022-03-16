import { Injectable } from '@angular/core';
import { IProduit } from '../model/produit.model';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  produits : IProduit[];
  produit :IProduit | any;
  

  constructor() {
   


    this.produits = [
      {idProduit : 1, nomProduit : "PC Asus", prixProduit : 3000.600, dateCreation : new Date("01/14/2011")},
      {idProduit : 2, nomProduit : "Imprimante Epson", prixProduit : 450, dateCreation : new Date("12/17/2010")},
      {idProduit : 3, nomProduit :"Tablette Samsung", prixProduit : 900.123, dateCreation : new Date("02/20/2020")}

      ]; 
   }

   listProduits():IProduit[]{
     return this.produits;
   }

   addProduit (prod : IProduit){
     this.produits.push(prod);
    
  }
  supprimerProduit(prod:IProduit){
    const index = this.produits.indexOf(prod,0);
    if(index > -1){
      this.produits.splice(index,1);
    }
}
consulterProduit(id : number) : IProduit|undefined{
  this.produit = this.produits.find(p => p.idProduit == id);
   
return this.produit;
}

trierProduits(){
this.produits = this.produits.sort((n1,n2) => {
  if(n1.idProduit > n2.idProduit){
    return 1;
  }
  if(n1.idProduit<n2.idProduit){
    return -1;
  }
  return 0;
});
  }

updateProduit(p:IProduit){
this.supprimerProduit(p);
this.addProduit(p);
this.trierProduits();

}
}

