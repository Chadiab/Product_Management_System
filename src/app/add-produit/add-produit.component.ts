import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { IProduit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent implements OnInit {

  newProduit: IProduit;

  constructor(private produitService : ProduitService, private route:Router) {
    this.newProduit = {
      idProduit: 0,
      nomProduit:"",
      prixProduit :0 ,
      dateCreation : new Date(),
    };
   }

  addProduit(){
    this.produitService.addProduit(this.newProduit);
    this.route.navigateByUrl('/produits')
  }


  ngOnInit(): void {
  }

}
