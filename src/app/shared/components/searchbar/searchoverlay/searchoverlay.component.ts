import { Component, inject } from '@angular/core';
import { MatDivider } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { SearchService } from '../../../services/search.service';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-searchoverlay',
  standalone: true,
  imports: [MatDivider, MatListModule, MatIcon],
  templateUrl: './searchoverlay.component.html',
  styleUrl: './searchoverlay.component.scss',
})
export class SearchoverlayComponent {
  sarchService = inject(SearchService)
}
