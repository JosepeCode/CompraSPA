import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CompraComponentComponent } from './components/compra-component/compra-component.component';
import { ArticulosComponentComponent } from './components/articulos-component/articulos-component.component';
import { ArticulosComponent } from './articulos/articulos.component';

@NgModule({
  declarations: [
    AppComponent,
    CompraComponentComponent,
    ArticulosComponentComponent,
    ArticulosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
