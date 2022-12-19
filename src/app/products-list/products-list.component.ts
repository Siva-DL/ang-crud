import { Component, OnInit } from '@angular/core';
import { GetCallService } from '../get-call.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit {
  prodctsList: any;
  showLoader: boolean = true;
  prductRecord = {
    id: 15,
    title: 'Sample',
    price: 94,
    description:
      'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016',
    category: {
      id: 4,
      name: 'Shoes',
      image: 'https://api.lorem.space/image/shoes?w=640&h=480&r=7430',
    },
    images: [
      'https://api.lorem.space/image/shoes?w=640&h=480&r=7091',
      'https://api.lorem.space/image/shoes?w=640&h=480&r=7155',
      'https://api.lorem.space/image/shoes?w=640&h=480&r=5176',
    ],
  };

  constructor(private products: GetCallService) {}

  ngOnInit(): void {
    this.getProductsList();
  }

  getProductsList() {
    this.showLoader = true;
    this.products.fetchAllProducts().subscribe((data) => {
      console.log(data.slice(0, 10));
      // print only 10/20 records;
      this.prodctsList = data.splice(0, 8);
      this.showLoader = false;
    });
  }
}
