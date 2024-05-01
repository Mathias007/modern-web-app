import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MenuComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  constructor(private authService: AuthService) {}

  isLoggedIn = this.authService.isLoggedIn;
}
