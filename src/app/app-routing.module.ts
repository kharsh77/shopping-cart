import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { CartComponentComponent } from './components/cart-component/cart-component.component';
import { ProductComponentComponent } from './components/product-component/product-component.component';

const routes: Routes = [
  {path : 'cart', component: CartComponentComponent},
  {path : '', component: ProductComponentComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})


export class AppRoutingModule { }
