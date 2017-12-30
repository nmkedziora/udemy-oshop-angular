import { Component } from '@angular/core';
import { CategoryService } from '../../category.service';
import { ProductService } from '../../product.service';
import { ActivatedRoute, Router} from '@angular/router';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  categories$;
  product$ = {};

  constructor(
    categoryService: CategoryService,
    private productService: ProductService
    private router: Router,
    private route: ActivatedRoute) {

    let id = this.route.snapshot.paramMap.get('id');

    this.categories$ = categoryService.getCategories();

    if(id) {
      this.productService.get(id).take(1).subscribe(product => this.product$ = product);
    }
  }

  save(product) {
    this.productService.create(product);
    this.router.navigate(['/admin/products'])
  }
}
