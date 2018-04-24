import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getNavItem(label: string) {
    return element(
      by.cssContainingText(`app-header .nav-list-item-link`, label)
    );
  }

  getNavItemActive(label: string) {
    return this.getNavItem(label)
      .getAttribute('class')
      .then(className => className.includes('active'));
  }

  getPosts() {
    return element.all(by.css('app-post-card'));
  }

  getPostsCount() {
    return this.getPosts().count();
  }

  getPost(i: number) {
    return element.all(by.css('app-post-card')).get(i);
  }

  getPostImageUrl(i: number) {
    return element
      .all(by.css('app-post-card .image'))
      .get(i)
      .getAttribute('src');
  }

  getPostTitle(i: number) {
    return element
      .all(by.css('app-post-card .title'))
      .get(i)
      .getText();
  }

  getFooterCopyrightText() {
    return element(by.css('app-footer .copy-link')).getText();
  }
}
