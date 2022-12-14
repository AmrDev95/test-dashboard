import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewOrderComponent } from './new-order/new-order.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'newOrder',
    pathMatch:'full'
  },
  {
    path:'newOrder',
    component:NewOrderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewOrderRoutingModule { }
