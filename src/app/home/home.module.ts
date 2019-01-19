import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';

// For MDB Angular Free
import { NavbarModule, WavesModule, CarouselModule, ButtonsModule, CollapseModule } from 'angular-bootstrap-md';


// Components
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './header/navigation/navigation.component';
import { AboutComponent } from './main/about/about.component';
import { GalleryComponent } from './main/gallery/gallery.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HomeComponent,
      },
    ]
  }
];

@NgModule({
  declarations: [HomeComponent, HeaderComponent, MainComponent, FooterComponent, NavigationComponent, AboutComponent, GalleryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NavbarModule,
    WavesModule,
    CarouselModule,
    ButtonsModule,
    CollapseModule,
  ]
})
export class HomeModule { }
