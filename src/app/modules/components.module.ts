import { FooterComponent } from './../components/footer/footer.component';
import { SidebarComponent } from './../components/sidebar/sidebar.component';
import { HeaderComponent } from './../components/header/header.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from '../components/search/search.component';




@NgModule({
  declarations: [
    HeaderComponent,
    SearchComponent,
    SidebarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,


  ],
  exports: [
    HeaderComponent,
    SearchComponent,
    SidebarComponent,
    FooterComponent
  ]
})
export class ComponentsModule { }
