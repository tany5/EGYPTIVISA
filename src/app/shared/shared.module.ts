import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ThemeService } from './services/theme.service';
import { RouterModule } from '@angular/router';
import { SearchModule } from './components/searchbar/search.module';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MenuComponent } from './components/header/menu/menu.component';
import { NgOptimizedImage } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { LanguageComponent } from './components/language/language.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SearchformComponent } from './components/searchform/searchform.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    LanguageComponent,
    SearchformComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SearchModule,
    MatIconModule,
    MatMenuModule,
    NgOptimizedImage,
    MatExpansionModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    AsyncPipe,
    MatSidenavModule,
  ],
  exports: [HeaderComponent, FooterComponent, MenuComponent, SearchformComponent],
  providers: [ThemeService],
})
export class SharedModule {}
