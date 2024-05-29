import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, startWith, map } from 'rxjs';

@Component({
  selector: 'app-searchform',
  templateUrl: './searchform.component.html',
  styleUrl: './searchform.component.scss'
})
export class SearchformComponent implements OnInit {
  languageControl = new FormControl('');
  currencyControl = new FormControl('');
  languageOptions: string[] = ['Australia - AU', 'Germany - DE', 'Saudi Arabia - SA', 'Singapore - SG', 'United Kingdom - GB'];
  currencyOptions: string[] = ['AED د.إ', 'AFN ؋', 'ALL Lek', 'AMD ֏', 'ANG ƒ'];
  filteredLanguageOptions!: Observable<string[]>;
  filteredCurrencyOptions!: Observable<string[]>;

  ngOnInit() {
    this.filteredLanguageOptions = this.languageControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '', this.languageOptions)),
    );
    this.filteredCurrencyOptions = this.currencyControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '', this.currencyOptions)),
    );
  }

  private _filter(value: string, options: string[]): string[] {
    const filterValue = value.toLowerCase();
    return options.filter(option => option.toLowerCase().includes(filterValue));
  }
}
