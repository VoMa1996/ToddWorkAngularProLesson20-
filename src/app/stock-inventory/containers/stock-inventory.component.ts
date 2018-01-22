import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-stock-inventory',
  templateUrl: './stock-inventory.component.html',
  styleUrls: ['./stock-inventory.component.scss']
})
export class StockInventoryComponent {

  form = new FormGroup({
    store: new FormGroup({
      branch: new FormControl('V182'),
      code: new FormControl('1234')
    })
  })

  onSubmit() {
    console.log('Submit', this.form.value);
  }
}
