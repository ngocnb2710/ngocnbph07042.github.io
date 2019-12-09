import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HeroComponent } from './hero/hero.component';
import { ProductsComponent } from './products/products.component';
import { CollectionComponent } from './collection/collection.component';
import { HeroCollectionComponent } from './hero-collection/hero-collection.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HelpComponent } from './help/help.component';
import { SocialComponent } from './social/social.component';
import { NewComponent } from './new/new.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CantFindComponent } from './cant-find/cant-find.component';
import { ListProductComponent } from './list-product/list-product.component';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NewsComponent } from './news/news.component';
import { NewAddComponent } from './new-add/new-add.component';
import { NewEditComponent } from './new-edit/new-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeroComponent,
    ProductsComponent,
    CollectionComponent,
    HeroCollectionComponent,
    FooterComponent,
    AboutUsComponent,
    HelpComponent,
    SocialComponent,
    NewComponent,
    CopyrightComponent,
    HomeComponent,
    ProductDetailComponent,
    LoginComponent,
    RegisterComponent,
    CantFindComponent,
    ListProductComponent,
    AdminComponent,
    ProductEditComponent,
    ProductAddComponent,
    NewsComponent,
    NewAddComponent,
    NewEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
