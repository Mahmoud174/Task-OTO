import { Component, OnDestroy, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Subscription } from 'rxjs';
import {ProductsService} from '../products.service'


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit,OnDestroy {

public id:any;
public productDetails:any;
public isLoad:boolean = false;
public $productDetails!:Subscription;
  constructor(private _ActivatedRoute:ActivatedRoute,private _ProductsService:ProductsService) { }

  ngOnInit(): void {
 this._ActivatedRoute.paramMap.subscribe(params=>{
      this.id = params.get('id');
 this.$productDetails=this._ProductsService.getProductDetails(this.id).subscribe(data => {
  
     this.productDetails = data; 
     this.isLoad = true;

        
        })
        
    })

  }

ngOnDestroy(): void 
{
  this.$productDetails.unsubscribe();
}

}
