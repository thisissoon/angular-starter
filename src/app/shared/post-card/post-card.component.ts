import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Post } from '../../posts/models/post.model';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent {
  @Input() item: Post;

  @Input()
  @HostBinding('class.is-hero')
  hero = false;
}
