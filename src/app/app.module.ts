import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './routes/home/home.component';
import { AboutComponent } from './routes/about/about.component';
import { ExperienceComponent } from './routes/child/experience/experience.component';
import { EducationComponent } from './routes/child/education/education.component';
import { NotfoundComponent } from './routes/notfound/notfound.component';
import { FooterComponent } from './common/footer/footer.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProdcuDetailsComponent } from './prodcu-details/prodcu-details.component';

const myRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'about',
    component: AboutComponent,
    children: [{ path: 'experience', component: ExperienceComponent }],
  },
  { path: 'products', component: ProductsListComponent },
  { path: 'product/:id', component: ProdcuDetailsComponent },
  { path: '**', component: NotfoundComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ExperienceComponent,
    EducationComponent,
    NotfoundComponent,
    FooterComponent,
    ProductsListComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(myRoutes), HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
