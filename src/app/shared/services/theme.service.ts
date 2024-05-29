import { Injectable, signal } from '@angular/core';

@Injectable()
export class ThemeService {
  constructor() {}
  darkMode = signal<boolean>(false);  
}
