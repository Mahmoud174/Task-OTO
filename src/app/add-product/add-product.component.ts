import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';

import { FormBuilder, FormControl, Validators } from '@angular/forms';
import {ProductsService} from '../products.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit{

  


  constructor(  private readonly fb: FormBuilder,private _ProductsService:ProductsService,
    @Inject(MAT_DIALOG_DATA) public product:any,
    ) {
     }

  public request = this.fb.group({
    title: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    description : new FormControl('', [Validators.required]),
    image : new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required])

    
   });
  ngOnInit(): void {
    if(this.product)
    this.request.patchValue(this.product)
  }

  submitProduct():void{
    if(this.product)
    {
  this._ProductsService.updateProduct(this.product?.id,this.request.value)
  .subscribe((data)=>{console.log(data)});

    }
    else{
  this._ProductsService.addProduct(this.request.value).subscribe((data)=>{console.log(data)});
    }
  }
  
  


}
