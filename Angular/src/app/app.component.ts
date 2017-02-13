import { Component } from '@angular/core';
import { Calcular } from './class/calcular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  obj : Calcular;
  public e ;

  objCalcular(event) {
    this.e = event;
  }
}
