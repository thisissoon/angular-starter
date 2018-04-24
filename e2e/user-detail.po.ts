import { browser, by, element } from 'protractor';

export class UserDetailPage {
  navigateTo() {
    return browser.get('/users/1');
  }

  getPosts() {
    return element.all(by.css('app-post-card'));
  }

  getTitle() {
    return element(by.css('h1')).getText();
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
