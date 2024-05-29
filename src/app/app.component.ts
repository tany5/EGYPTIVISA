import { Component, HostBinding, ViewChild, inject, signal } from '@angular/core';
import { ThemeService } from './shared/services/theme.service';
import { MatDrawer } from '@angular/material/sidenav';
import { environment } from '../environments/environment';
import { ITravelMenu } from './shared/models/travelMenu';
import { Icountry } from './shared/models/country';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  @ViewChild('drawer') drawer!: MatDrawer;
  theme = inject(ThemeService);

  @HostBinding('class.dark') get mode() {
    return this.theme.darkMode();
  }
  @HostBinding('class.light') get lightMode() {
    return !this.theme.darkMode();
  }

  // menus

  menuList1 = signal<Icountry[]>([
    {
      name: 'India',
      code: `${environment.COUNTRY_FLAG_URL}/IN.svg`,
    },
    {
      name: 'Turkey',
      code: `${environment.COUNTRY_FLAG_URL}/TR.svg`,
    },
    {
      name: 'United States',
      code: `${environment.COUNTRY_FLAG_URL}/US.svg`,
    },
    {
      name: 'Australia',
      code: `${environment.COUNTRY_FLAG_URL}/AU.svg`,
    },
    {
      name: 'Colombia',
      code: `${environment.COUNTRY_FLAG_URL}/CO.svg`,
    },
  ]);

  travelMenu = signal<ITravelMenu[]>([
    {
      label: 'What is a visa?',
      url: '/',
    },
    {
      label: 'Common travel visas and documents?',
      submenu: [
        {
          label: 'Electronic Visa (eVisa)',
          url: '/',
        },
        {
          label: 'Visa on Arrival',
          url: '/',
        },
        {
          label: 'Appointment Required Visa',
          url: '/',
        },
        {
          label: 'Invitation Letter',
          url: '/',
        },
        {
          label: 'Arrived Card',
          url: '/',
        },
      ],
    },

    {
      label: 'Featured content',
      submenu: [
        {
          label: 'Electronic Visa (eVisa)',
          url: '/',
        },
        {
          label: 'Visa on Arrival',
          url: '/',
        },
        {
          label: 'Appointment Required Visa',
          url: '/',
        },
        {
          label: 'Invitation Letter',
          url: '/',
        },
        {
          label: 'Arrived Card',
          url: '/',
        },
      ],
    },
  ]);

  toggleSideNav(event: boolean) {
    console.log(event);
    if (event) {
      this.drawer.toggle();
    }
  }
}
