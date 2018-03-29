import { DeployGithubTestPage } from './app.po';

describe('deploy-github-test App', () => {
  let page: DeployGithubTestPage;

  beforeEach(() => {
    page = new DeployGithubTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
