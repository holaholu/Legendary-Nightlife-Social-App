import { NightPage } from './app.po';

describe('night App', () => {
  let page: NightPage;

  beforeEach(() => {
    page = new NightPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
