import { Component, Input } from '@angular/core';

import { Comment } from '../../posts/models/comment.model';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent {
  @Input() item: Comment;
}
