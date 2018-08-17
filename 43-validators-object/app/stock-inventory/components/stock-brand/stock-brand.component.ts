import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'stock-brand',
  styleUrls: ['stock-brand.component.scss'],
  template: `
    <div [formGroup]="parent">
      <div formGroupName="store">
        <input
          type="text"
          placeholder="Branch ID"
          formControlName="branch">
        <div *ngIf="required('branch')" class="error">
          Brand ID is required
        </div>
        <input
          type="text"
          placeholder="Manager Code"
          formControlName="code">
        <div *ngIf="required('code')" class="error">
          Manager code is required
        </div>
      </div>
    </div>
  `
})
export class StockBrandComponent {
  @Input() parent: FormGroup;

  required(name: string) {
    return this.parent.get(`store.${name}`).touched
      && this.parent.get(`store.${name}`).hasError('required');
  }
}
