import { AppPage } from './app.po';
import { browser } from 'protractor';

describe('App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
    browser.waitForAngular();
  });

  it('should set post nav item as active', () => {
    const result = page.getNavItemActive('Posts');
    expect(result).toBeTruthy();

    const resultAbout = page.getNavItemActive('About');
    expect(resultAbout).toBeFalsy();
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

  it('should have copyright', () => {
    const result = page.getFooterCopyrightText();
    expect(result).toEqual('© 2018 SOON_');
  });
});
