import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  openOverlay = signal<boolean>(false);
  recentSearchs = signal<string[]>([
    'angular',
    'rxjs',
    'signals',
    'components',
  ]);

  constructor() {}
}
