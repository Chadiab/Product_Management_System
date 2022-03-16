import { Component, OnInit } from '@angular/core';
import { IProduit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {

  produits : IProduit[];

  constructor(private produitService : ProduitService) { 
    this.produits = this.produitService.listProduits();
  }

  supprimerProduit(prod:IProduit){
    //console.log(p);
    let conf = confirm("Etes-vous sure ?");
    if(conf){
      this.produitService.supprimerProduit(prod);
    }
  }
  ngOnInit(): void {
  }

}
