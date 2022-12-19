import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetCallService } from '../get-call.service';

@Component({
  selector: 'app-prodcu-details',
  templateUrl: './prodcu-details.component.html',
  styleUrls: ['./prodcu-details.component.css'],
})
export class ProdcuDetailsComponent implements OnInit {
  showLoader: boolean = true;
  prodcutDetails: any;
  constructor(private route: ActivatedRoute, private getCall: GetCallService) {}

  ngOnInit(): void {
    const id: number = this.route.snapshot.params['id'];
    console.log(id);
    this.getProduct(id);
  }

  getProduct(id: number) {
    this.showLoader = true;
    this.getCall.fetchProduct(id).subscribe((data) => {
      console.log(data);
      this.prodcutDetails = data;
      this.showLoader = false;
    });
  }
}
