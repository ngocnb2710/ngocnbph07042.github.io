import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CantFindComponent } from './cant-find/cant-find.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ListProductComponent } from './list-product/list-product.component';
import { AdminComponent } from './admin/admin.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { NewsComponent } from './news/news.component';
import { NewAddComponent } from './new-add/new-add.component';
import { NewEditComponent } from './new-edit/new-edit.component';


const routes: Routes = [
  {path: "", redirectTo:"/home", pathMatch:"full"},
  {path: "home", component: HomeComponent},
  {path: "list-product", component: ListProductComponent},
  {path: "about", component: AboutUsComponent},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "admin", component: AdminComponent},
  {path: 'product/add', component: ProductAddComponent},
  {path: 'product/:id', component: ProductDetailComponent},
  {path: 'product/edit/:id', component: ProductEditComponent},
  {path: 'add-product', component:ProductAddComponent},
  {path: 'news', component: NewsComponent},
  {path: 'new/add', component:NewAddComponent},
  {path: 'new/edit/:id', component: NewEditComponent},
  {path: "**", component: CantFindComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
