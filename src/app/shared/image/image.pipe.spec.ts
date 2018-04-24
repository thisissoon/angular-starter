import { ImagePipe } from './image.pipe';

describe('ImagePipe', () => {
  let pipe;

  beforeEach(() => (pipe = new ImagePipe()));

  it('create return image url', () => {
    const result = pipe.transform(1);
    expect(result).toEqual('https://picsum.photos/640/360?image=1');
  });

  it('create return image url with set size', () => {
    const result = pipe.transform(1, { width: 200, height: 200 });
    expect(result).toEqual('https://picsum.photos/200/200?image=1');
  });
});
