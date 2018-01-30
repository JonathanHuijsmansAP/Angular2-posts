import { Angular2PostsPage } from './app.po';

describe('angular2-posts App', function() {
  let page: Angular2PostsPage;

  beforeEach(() => {
    page = new Angular2PostsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
