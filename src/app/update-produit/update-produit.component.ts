import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduit} from '../model/produit.model';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styles: [
  ]
})
export class UpdateProduitComponent implements OnInit {
  currentProduit :IProduit|any;

  constructor(private activatedRoute : ActivatedRoute,
    private produitService : ProduitService,
    private route:Router
    ) {


   }

  ngOnInit(): void {
    this.currentProduit = this.produitService.consulterProduit(this.activatedRoute.snapshot.params['id']);
    console.log(this.currentProduit);

  }
  updateProduit(){
    this.produitService.updateProduit(this.currentProduit);
    this.route.navigateByUrl('/produits');
  }


}
