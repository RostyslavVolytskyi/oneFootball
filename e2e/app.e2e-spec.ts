import { OneFootballPage } from './app.po';

describe('one-football App', () => {
  let page: OneFootballPage;

  beforeEach(() => {
    page = new OneFootballPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
