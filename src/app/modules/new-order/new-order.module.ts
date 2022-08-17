import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { NewOrderRoutingModule } from './new-order-routing.module';
import { NewOrderComponent } from './new-order/new-order.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from 'src/app/new-order/search.pipe';



@NgModule({
declarations: [
    NewOrderComponent,
    SearchPipe
  ],
  imports: [
    CommonModule,
    NewOrderRoutingModule,
    HttpClientModule,
    FormsModule,
  ]
})
export class NewOrderModule { }
