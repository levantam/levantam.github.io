import { Levantam.Github.IoPage } from './app.po';

describe('levantam.github.io App', () => {
  let page: Levantam.Github.IoPage;

  beforeEach(() => {
    page = new Levantam.Github.IoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
