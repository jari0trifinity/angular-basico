import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { heroesModule } from './heroes/heroe.module';
import { contadorModule } from './contadores/contador.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    heroesModule,
    contadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
