import { Component, OnInit, Input } from '@angular/core';

import { User } from '../../users/models/user.model';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {
  @Input() item: User;
}
