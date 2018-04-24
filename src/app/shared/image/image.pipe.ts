import { Pipe, PipeTransform } from '@angular/core';

import { ImagePipeOptions } from './image-pipe.model';

const defaultOptions: ImagePipeOptions = {
  width: 640,
  height: 360
};

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {
  transform(id: number, args: ImagePipeOptions = defaultOptions): string {
    args = { ...defaultOptions, ...args };
    return `https://picsum.photos/${args.width}/${args.height}?image=${id}`;
  }
}
