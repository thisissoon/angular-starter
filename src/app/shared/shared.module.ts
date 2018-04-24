import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PostCardComponent } from './post-card/post-card.component';
import { UserCardComponent } from './user-card/user-card.component';
import { CommentComponent } from './comment/comment.component';
import { ImagePipe } from './image/image.pipe';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    PostCardComponent,
    UserCardComponent,
    CommentComponent,
    ImagePipe
  ],
  exports: [PostCardComponent, UserCardComponent, CommentComponent, ImagePipe]
})
export class SharedModule {}
