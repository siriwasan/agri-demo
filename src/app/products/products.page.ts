import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss']
})
export class ProductsPage implements OnInit {
  id: string;
  product: ProductContent;

  constructor(private route: ActivatedRoute, private httpClient: HttpClient) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.httpClient
    .get<ProductContent>(
      'https://workflowtemp-rdev.azurewebsites.net/api/DemoAgri/GetProduct/' + this.id
    )
    .subscribe(
      item => {
        // SUCCESS: Do something
        this.product = item;
        console.log(this.product);
      },
      error => {
        // ERROR: Do something
        console.log('error call api');
      }
    );
  }
}