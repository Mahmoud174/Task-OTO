import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {ProductsService} from '../products.service';
import {AddProductComponent} from '../add-product/add-product.component';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit,OnDestroy {

 public products : any;
 private readonly _unsubscribeAll: Subject<any> = new Subject();



  constructor(private _ProductsService:ProductsService,private dialog:MatDialog) {}

  ngOnInit(): void {
 this._ProductsService.getproducts().pipe(takeUntil(this._unsubscribeAll))
 .subscribe((data)=>{
      this.products=data;
    })
  }
  
  openuserDialog(obj?:any)
  {
  this.dialog.open(AddProductComponent,
      {
        width:'50%',
        data:obj
      });
    
}


deleteProduct(id:number)
{
this._ProductsService.deleteProduct(id).pipe(takeUntil(this._unsubscribeAll)).
subscribe(res=>{console.log(res)});
}

sortProduct(data:string)
{
this.products=[];
this._ProductsService.sortProduct(data).pipe(takeUntil(this._unsubscribeAll)).
subscribe(res=>{
  this.products=res;
})
}

ngOnDestroy(): void 
{
  
  this._unsubscribeAll.next();
  this._unsubscribeAll.complete();
  
}  

}
