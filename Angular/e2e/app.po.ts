import { browser, element, by } from 'protractor';

export class Angular2CalcularSueldoPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
