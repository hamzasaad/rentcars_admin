import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcontractComponent } from './component/addcontract/addcontract.component';
import { AddproductComponent } from './component/addproduct/addproduct.component';
import { AddvoitureComponent } from './component/addvoiture/addvoiture.component';
import { LoginComponent } from './component/authentification/login/login.component';
import { RegisterComponent } from './component/authentification/register/register.component';
import { AddblogComponent } from './component/blog/addblog/addblog.component';
import { BlogComponent } from './component/blog/blog.component';
import { DetailblogComponent } from './component/blog/detailblog/detailblog.component';
import { AddcategoryComponent } from './component/category/addcategory/addcategory.component';
import { CategoryComponent } from './component/category/category.component';
import { DetailcategoryComponent } from './component/category/detailcategory/detailcategory.component';
import { AddcategoryproductComponent } from './component/categoryproduct/addcategoryproduct/addcategoryproduct.component';
import { CategorylistComponent } from './component/categoryproduct/categorylist/categorylist.component';
import { DetailcategoryproductComponent } from './component/categoryproduct/detailcategoryproduct/detailcategoryproduct.component';
import { ClientlistComponent } from './component/clientlist/clientlist.component';
import { ContractlistComponent } from './component/contractlist/contractlist.component';
import { DemandeComponent } from './component/demande/demande.component';
import { DetaildemandeComponent } from './component/detaildemande/detaildemande.component';
import { DetailproductComponent } from './component/detailproduct/detailproduct.component';
import { DetailreclamationComponent } from './component/detailreclamation/detailreclamation.component';
import { DetailvoitureComponent } from './component/detailvoiture/detailvoiture.component';
import { HomeComponent } from './component/home/home.component';
import { LayoutComponent } from './component/layout/layout.component';
import { AddmarqueComponent } from './component/marque/addmarque/addmarque.component';
import { DetailmarqueComponent } from './component/marque/detailmarque/detailmarque.component';
import { MarqueComponent } from './component/marque/marque.component';
import { AddmemberComponent } from './component/member/addmember/addmember.component';
import { DetailmemberComponent } from './component/member/detailmember/detailmember.component';
import { MemberComponent } from './component/member/member.component';
import { MembergridComponent } from './component/member/membergrid/membergrid.component';
import { ProductgridComponent } from './component/productgrid/productgrid.component';
import { ProductlistComponent } from './component/productlist/productlist.component';
import { ProfilComponent } from './component/profil/profil.component';
import { ReclamationComponent } from './component/reclamation/reclamation.component';
import { AddserviceComponent } from './component/service/addservice/addservice.component';
import { DetailserviceComponent } from './component/service/detailservice/detailservice.component';
import { ServiceComponent } from './component/service/service.component';
import { UploadcontractComponent } from './component/uploadcontract/uploadcontract.component';
import { VoituregridComponent } from './component/voituregrid/voituregrid.component';
import { VoiturelistComponent } from './component/voiturelist/voiturelist.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'home', canActivate: [AuthGuard], component: HomeComponent, children: [
      { path: '', component: LayoutComponent },
      { path: 'voiturelist', component: VoiturelistComponent },
      { path: 'addvoiture', component: AddvoitureComponent },
      { path: 'detailvoiture/:id', component: DetailvoitureComponent },
      { path: 'voituregrid', component: VoituregridComponent },
      { path: 'member', component: MemberComponent },
      { path: 'addmember', component: AddmemberComponent },
      { path: 'detailmember/:id', component: DetailmemberComponent },
      { path: 'membergrid', component: MembergridComponent },
      { path: 'detailmarque/:id', component: DetailmarqueComponent },
      { path: 'marque', component: MarqueComponent },
      { path: 'category', component: CategoryComponent },
      { path: 'detailcategory/:id', component: DetailcategoryComponent },
      { path: 'addcategory', component: AddcategoryComponent },
      { path: 'addmarque', component: AddmarqueComponent },
      { path: 'service', component: ServiceComponent },
      { path: 'ddservice', component: AddserviceComponent },
      { path: 'demande', component: DemandeComponent },
      { path: 'detailservice/:id', component: DetailserviceComponent },
      { path: 'clientlist', component: ClientlistComponent },
      { path: 'addcontract/:id', component: AddcontractComponent },
      { path: 'detaildemande/:id', component: DetaildemandeComponent },
      { path: 'addcategoryproduct', component: AddcategoryproductComponent },
      { path: 'detailcategoryproduct/:id', component: DetailcategoryproductComponent },
      { path: 'categorylist', component: CategorylistComponent },
      { path: 'addproduct', component: AddproductComponent },
      { path: 'productlist', component: ProductlistComponent },
      { path: 'productgrid', component: ProductgridComponent },
      { path: 'detailproduct/:id', component: DetailproductComponent },
      { path: 'detailreclamation/:id', component: DetailreclamationComponent },
      { path: 'reclamation', component: ReclamationComponent },
      { path: 'profil', component: ProfilComponent },
      { path: 'upload/:id', component: UploadcontractComponent },
      { path: 'contractlist', component: ContractlistComponent },
      { path: 'blog', component: BlogComponent },
      { path: 'detailblog/:id', component: DetailblogComponent },
      { path: 'addblog', component: AddblogComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
