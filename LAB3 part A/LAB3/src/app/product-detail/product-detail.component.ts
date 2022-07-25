import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  item: Product | undefined;
  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    const rparams = this.route.snapshot.paramMap;
    const pID = Number(rparams.get('productid'));
    this.item = products.find(item => item.id == pID);
  }

}
