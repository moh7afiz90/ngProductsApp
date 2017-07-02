import { NgProcutsAppPage } from './app.po';

describe('ng-procuts-app App', () => {
  let page: NgProcutsAppPage;

  beforeEach(() => {
    page = new NgProcutsAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
