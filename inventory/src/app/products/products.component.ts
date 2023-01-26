import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ProductsService, IProduct } from './../product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'in-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent implements OnInit {

  products$: Observable<IProduct[]> = this.productsService.products$;
  delete = false;
  productToBeDeleted: any;
  selectedProduct!: IProduct;
  productOpen!: boolean;
  constructor(private productsService: ProductsService) { }

  ngOnInit() {
  }

  onDelete(product: any) {
      this.delete = true;
      this.productToBeDeleted = product;
  }

  handleCancel() {
      this.delete = false;
  }

  confirmDelete() {
      this.handleCancel();
      // We need to implement this method removeProduct in our ProductsService
      this.productsService.removeProduct(this.productToBeDeleted);
  }

    addProduct() {
        this.productOpen = true;
        this.selectedProduct!= undefined;
    }

    onEdit(product: IProduct) {
        this.productOpen = true;
        this.selectedProduct = product;
    }

    handleFinish(event: { product: any; }) {
        if (event && event.product) {
            if (this.selectedProduct) {
                // Edit Flow
                this.productsService.editProduct(this.selectedProduct.id, event.product);
            } else {
                // Save New
                this.productsService.addProduct(event.product);
            }
        }
        this.productOpen = false;
    }

    trackById(index: any, item: { id: any; }) {
      return item.id;
    }

}