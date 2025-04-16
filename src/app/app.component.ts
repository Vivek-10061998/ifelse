import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,DashboardComponent,SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'if-else';
}
