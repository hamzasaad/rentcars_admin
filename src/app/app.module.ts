import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentComponent } from './component/component.component';
import { HomeComponent } from './component/home/home.component';
import { LayoutComponent } from './component/layout/layout.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { HeaderComponent } from './component/header/header.component';
import { ToolbarComponent } from './component/toolbar/toolbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { VoiturelistComponent } from './component/voiturelist/voiturelist.component';
import { AddvoitureComponent } from './component/addvoiture/addvoiture.component';
import { DetailvoitureComponent } from './component/detailvoiture/detailvoiture.component';
import { VoituregridComponent } from './component/voituregrid/voituregrid.component';
import { MemberComponent } from './component/member/member.component';
import { DetailmemberComponent } from './component/member/detailmember/detailmember.component';
import { AddmemberComponent } from './component/member/addmember/addmember.component';
import { MembergridComponent } from './component/member/membergrid/membergrid.component';
import { CategoryComponent } from './component/category/category.component';
import { MarqueComponent } from './component/marque/marque.component';
import { DetailmarqueComponent } from './component/marque/detailmarque/detailmarque.component';
import { DetailcategoryComponent } from './component/category/detailcategory/detailcategory.component';
import { AddcategoryComponent } from './component/category/addcategory/addcategory.component';
import { AddmarqueComponent } from './component/marque/addmarque/addmarque.component';
import { AuthentificationComponent } from './component/authentification/authentification.component';
import { LoginComponent } from './component/authentification/login/login.component';
import { RegisterComponent } from './component/authentification/register/register.component';
import { ServiceComponent } from './component/service/service.component';
import { AddserviceComponent } from './component/service/addservice/addservice.component';
import { DetailserviceComponent } from './component/service/detailservice/detailservice.component';
import { DemandeComponent } from './component/demande/demande.component';
import { ClientlistComponent } from './component/clientlist/clientlist.component';
import { AddcontractComponent } from './component/addcontract/addcontract.component';
import { DetaildemandeComponent } from './component/detaildemande/detaildemande.component';
import { ProductComponent } from './component/product/product.component';
import { AddproductComponent } from './component/addproduct/addproduct.component';
import { DetailproductComponent } from './component/detailproduct/detailproduct.component';
import { DetailcategoryproductComponent } from './component/categoryproduct/detailcategoryproduct/detailcategoryproduct.component';
import { AddcategoryproductComponent } from './component/categoryproduct/addcategoryproduct/addcategoryproduct.component';
import { CategorylistComponent } from './component/categoryproduct/categorylist/categorylist.component';
import { ProductlistComponent } from './component/productlist/productlist.component';
import { ProductgridComponent } from './component/productgrid/productgrid.component';
import { ReclamationComponent } from './component/reclamation/reclamation.component';
import { DetailreclamationComponent } from './component/detailreclamation/detailreclamation.component';
import { ProfilComponent } from './component/profil/profil.component';
import { UploadcontractComponent } from './component/uploadcontract/uploadcontract.component';
import { ContractlistComponent } from './component/contractlist/contractlist.component';
import { BlogComponent } from './component/blog/blog.component';
import { AddblogComponent } from './component/blog/addblog/addblog.component';
import { DetailblogComponent } from './component/blog/detailblog/detailblog.component';
import { ChartsModule, WavesModule } from 'angular-bootstrap-md';
import {
  coerceBooleanProperty,
  BooleanInput,
  NumberInput,
  coerceNumberProperty,
  coerceElement,
} from '@angular/cdk/coercion';


@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent,
    HomeComponent,
    LayoutComponent,
    SidebarComponent,
    HeaderComponent,
    ToolbarComponent,
    FooterComponent,
    VoiturelistComponent,
    AddvoitureComponent,
    DetailvoitureComponent,
    VoituregridComponent,
    MemberComponent,
    DetailmemberComponent,
    AddmemberComponent,
    MembergridComponent,
    CategoryComponent,
    MarqueComponent,
    DetailmarqueComponent,
    DetailcategoryComponent,
    AddcategoryComponent,
    AddmarqueComponent,
    AuthentificationComponent,
    LoginComponent,
    RegisterComponent,
    ServiceComponent,
    AddserviceComponent,
    DetailserviceComponent,
    DemandeComponent,
    ClientlistComponent,
    AddcontractComponent,
    DetaildemandeComponent,
    ProductComponent,
    AddproductComponent,
    DetailproductComponent,
    DetailcategoryproductComponent,
    AddcategoryproductComponent,
    CategorylistComponent,
    ProductlistComponent,
    ProductgridComponent,
    ReclamationComponent,
    DetailreclamationComponent,
    ProfilComponent,
    UploadcontractComponent,
    ContractlistComponent,
    BlogComponent,
    AddblogComponent,
    DetailblogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    ChartsModule,
    WavesModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
