import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpModule, JsonpModule } from '@angular/http';
import { ChartsModule } from 'ng2-charts/ng2-charts';


import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ResultadoComponent } from './formulario/resultado/resultado.component';

import { MongoService } from './mongo.service';

@NgModule({
  declarations: [
    AppComponent,
    ResultadoComponent,
    FormularioComponent
    
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    ChartsModule
    
  ],
  providers: [MongoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
