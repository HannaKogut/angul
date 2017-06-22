import { AngulPage } from './app.po';

describe('angul App', function() {
  let page: AngulPage;

  beforeEach(() => {
    page = new AngulPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
