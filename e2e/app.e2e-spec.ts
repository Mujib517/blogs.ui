import { Blogs.UiPage } from './app.po';

describe('blogs.ui App', () => {
  let page: Blogs.UiPage;

  beforeEach(() => {
    page = new Blogs.UiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
