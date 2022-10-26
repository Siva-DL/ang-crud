import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './routes/home/home.component';
import { AboutComponent } from './routes/about/about.component';
import { ExperienceComponent } from './routes/child/experience/experience.component';
import { EducationComponent } from './routes/child/education/education.component';
import { NotfoundComponent } from './routes/notfound/notfound.component';
import { FooterComponent } from './common/footer/footer.component';

const myRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'about',
    component: AboutComponent,
    children: [{ path: 'experience', component: ExperienceComponent }],
  },
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
  ],
  imports: [BrowserModule, RouterModule.forRoot(myRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
