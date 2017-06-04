import { SvgAngularPage } from './app.po';

describe('svg-angular App', () => {
  let page: SvgAngularPage;

  beforeEach(() => {
    page = new SvgAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
