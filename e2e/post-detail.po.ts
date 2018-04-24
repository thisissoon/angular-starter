import { browser, by, element } from 'protractor';

export class PostDetailPage {
  navigateTo() {
    return browser.get('/posts/1');
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

  getComments() {
    return element.all(by.css('app-comment'));
  }

  getCommentCount() {
    return this.getComments().count();
  }

  getPostImageUrl() {
    return element(by.css('.image')).getAttribute('src');
  }

  getUserName() {
    return element(by.css('app-user-card .name')).getText();
  }

  getTitle() {
    return element(by.css('.title')).getText();
  }
}
