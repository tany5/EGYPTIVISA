import { NgModule } from '@angular/core';
import { SearchbarComponent } from './searchbar.component';
import { SearchoverlayComponent } from './searchoverlay/searchoverlay.component';
import { MatIconModule } from '@angular/material/icon';
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [SearchbarComponent],
  imports: [CommonModule, SearchoverlayComponent, MatIconModule, OverlayModule],
  exports: [SearchbarComponent],
})
export class SearchModule {}
