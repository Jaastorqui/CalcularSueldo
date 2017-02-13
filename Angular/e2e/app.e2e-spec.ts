import { Angular2CalcularSueldoPage } from './app.po';

describe('angular2-calcular-sueldo App', function() {
  let page: Angular2CalcularSueldoPage;

  beforeEach(() => {
    page = new Angular2CalcularSueldoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
