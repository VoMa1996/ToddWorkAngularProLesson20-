import { Component } from '@angular/core';
import { FormBuilder, FormArray, FormGroup } from '@angular/forms';

import { Product } from './models/product.interface';

@Component({
  selector: 'app-stock-inventory',
  templateUrl: './stock-inventory.component.html',
  styleUrls: ['./stock-inventory.component.scss']
})
export class StockInventoryComponent {

  products: Product[] = [
    {"id":1, "price": 2800, "name":"MacBook Pro"},
    {"id":2, "price": 50, "name":"USB"},
    {"id":3, "price": 400, "name":"AirPods"},
    {"id":4, "price": 900, "name":"Ipad"},
    {"id":5, "price": 600, "name":"Charger"}
  ];

  form = this.fb.group({
    store: this.fb.group({
      branch: '',
      code: ''
    }),
    selector: this.createStock({}),
    stock: this.fb.array([
    
      this.createStock({product_id: 1, quantity: 10}),
      this.createStock({product_id: 3, quantity: 50}),

      // new FormGroup({
      //   product_id: new FormControl(3),
      //   quantity: new FormControl(50)
      // })
    ])
  })

  constructor(
    private fb: FormBuilder
  ) {

  }

  createStock(stock) {
    return this.fb.group({
      product_id: parseInt(stock.product_id,10) || '',
      // product_id: new FormControl(stock.product_id || ''),
      quantity: stock.quantity || 10
    });
  }

  addStock(stock) {
    const control = this.form.get('stock') as FormArray; 
    // console.log(stock);
    control.push(this.createStock(stock));
  }

  removeStock({group, index}: {group: FormGroup, index: number}) {
    // console.log(group, index);
    const control = this.form.get('stock') as FormArray;
    control.removeAt(index);
  }

  onSubmit() {
    console.log('Submit', this.form.value);
  }
}
