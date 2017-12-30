import { Component, OnDestroy } from '@angular/core';
import { ProductService } from '../../product.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnDestroy {
  products: any[];
  filtered: any[];
  subscription: Subscription

  constructor(private productService: ProductService) {
    this.subscription = this.productService.getAll().subscribe(products => this.products = this.filtered = products);
  }

  filter(query: string) {
    this.filtered = query ?
      this.products.filter(product => product.title.toLowerCase().includes(query.toLowerCase())) :
      this.products;
  }


  ngOnDestroy () {
    this.subscription.unsubscribe();
  }
}
