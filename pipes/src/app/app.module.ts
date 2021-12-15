import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PipesComponent } from './pipes/pipes.component';
import { TamFicheroPipe } from './pipes/tam-fichero-pipe.component';

@NgModule({
  declarations: [
    AppComponent,
    PipesComponent,
    TamFicheroPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
