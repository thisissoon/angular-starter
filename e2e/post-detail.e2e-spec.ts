import { PostDetailPage } from './post-detail.po';
import { browser } from 'protractor';

describe('PostDetail', () => {
  let page: PostDetailPage;

  beforeEach(() => {
    page = new PostDetailPage();
    page.navigateTo();
    browser.waitForAngular();
  });

  it('should set post nav item as active', () => {
    const result = page.getNavItemActive('Posts');
    expect(result).toBeTruthy();

    const resultAbout = page.getNavItemActive('About');
    expect(resultAbout).toBeFalsy();
  });

  it('should have list of comments', () => {
    const result = page.getCommentCount();
    expect(result).toBe(5);
  });

  it('should display post image', () => {
    const result = page.getPostImageUrl();
    expect(result).toEqual('https://picsum.photos/640/360?image=501');
  });

  it('should display user name', () => {
    const result = page.getUserName();
    expect(result).toEqual('Leanne Graham (@Bret)');
  });

  it('should display post title', () => {
    const result = page.getTitle();
    expect(result).toEqual(
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit'
    );
  });
});
