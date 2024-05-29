import { Component, EventEmitter, Input, Output, inject, signal } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { MatDialog } from '@angular/material/dialog';
import { LanguageComponent } from '../language/language.component';
import { Icountry } from '../../models/country';
import { ITravelMenu } from '../../models/travelMenu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input() menuList1: Icountry[] = []
  @Input() travelMenu: ITravelMenu[] = []
  @Output() toggleSideBar: EventEmitter<boolean> = new EventEmitter(false);

  theme = inject(ThemeService);
  showSideNav = signal<boolean>(false);

  constructor(private dialog: MatDialog) {}

  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      this.openLanguageModal();
    }
  }

  handleKeyUp(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      this.openLanguageModal();
    }
  }

  openLanguageModal(
    enterAnimationDuration: string = '300ms',
    exitAnimationDuration: string = '150ms'
  ) {
    this.dialog.open(LanguageComponent, {
      minWidth: '320px',
      maxWidth: '450px',
      hasBackdrop: false,
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  toggleSideNav() {
    this.toggleSideBar.emit(!this.showSideNav());
  }
}
