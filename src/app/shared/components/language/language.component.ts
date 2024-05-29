import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, startWith, map } from 'rxjs';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrl: './language.component.scss'
})
export class LanguageComponent implements OnInit {
  languageControl = new FormControl('');
  currencyControl = new FormControl('');
  languageOptions: string[] = ['English', 'Español', 'Français', 'Deutsch', '日本語'];
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