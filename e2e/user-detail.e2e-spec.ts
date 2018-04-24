import { UserDetailPage } from './user-detail.po';
import { browser } from 'protractor';

describe('UserDetail', () => {
  let page: UserDetailPage;

  beforeEach(() => {
    page = new UserDetailPage();
    page.navigateTo();
    browser.waitForAngular();
  });

  it('should display name', () => {
    const result = page.getTitle();
    expect(result).toEqual('Leanne Graham @Bret');
  });

  it('should have list of posts', () => {
    const result = page.getPostsCount();
    expect(result).toBe(10);
  });

  it('should display post image', () => {
    const result = page.getPostImageUrl(0);
    expect(result).toEqual('https://picsum.photos/640/360?image=501');
  });

  it('should display post title', () => {
    const result = page.getPostTitle(0);
    expect(result).toEqual(
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit'
    );
  });
});
