import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { MainComponent } from './components/main/main.component';
import { HomeRoutingModule } from './home.routing.module';
import { CountrylistComponent } from './components/main/countrylist/countrylist.component';
import { SearchModule } from '../shared/components/searchbar/search.module';
import { MatIcon } from '@angular/material/icon';
import { TestimonialComponent } from './components/main/testimonial/testimonial.component';

@NgModule({
  declarations: [MainComponent, CountrylistComponent, TestimonialComponent],
  imports: [CommonModule, SharedModule, HomeRoutingModule, DatePipe, SearchModule, MatIcon],
  exports: [],
  providers: [],
})
export class HomeModule {}
