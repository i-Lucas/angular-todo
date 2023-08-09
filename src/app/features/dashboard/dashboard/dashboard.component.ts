import { Component } from '@angular/core';
import { UserContextService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'jv-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {

  constructor(protected userContext: UserContextService) {}

  get userName() {
    return this.userContext.user?.name ? this.userContext.user.name : "";
  }
}
