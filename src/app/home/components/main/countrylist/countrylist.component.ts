/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-countrylist',
  templateUrl: './countrylist.component.html',
  styleUrl: './countrylist.component.scss',
})
export class CountrylistComponent implements OnInit {
  filterTerm = signal<string>('all');
  countryList = signal<any>([]);
  filterCountryList = signal<any>([]);
  constructor(private httpClinet: HttpClient) {}

  ngOnInit(): void {
    this.httpClinet.get('/assets/country.json').subscribe({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      next: (result: any) => {
        console.table(result);
        this.countryList.set(result.countries);
        this.filterCountryList.set(result.countries);
      },
      error: (error: HttpErrorResponse) => {
        console.log(error);
      },
    });
  }

  filter(term: string = 'all') {
    this.filterTerm.set(term);
    const filterList = this.countryList().filter((item: any) => {
      return item.category === term;
    });

    this.filterCountryList.set(filterList);
  }

  search(searchTerm: string) {
    console.log(searchTerm);
    searchTerm = searchTerm.toLowerCase();

    const filterList = this.countryList().filter((item: any) => {
      console.log(item.name);
      return (
        item.name.toLowerCase().includes(searchTerm) ||
        item.iso2_code.toLowerCase().includes(searchTerm) ||
        item.purpose.toLowerCase().includes(searchTerm) ||
        item.category.toLowerCase().includes(searchTerm) ||
        item.visas_done_in_k == searchTerm ||
        item.price == searchTerm
      );
    });

    this.filterCountryList.set(filterList);
  }
}
