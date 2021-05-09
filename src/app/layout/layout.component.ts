import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  products: string[];

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      product: ['', [Validators.required]]
    });

    this.products = [];
  }

  submit(): void {
    this.products.push(this.form.value.product);
    this.form.reset();
  }

  deleteProduct(i: number): void {
    this.products.splice(i, 1);
  }
}
