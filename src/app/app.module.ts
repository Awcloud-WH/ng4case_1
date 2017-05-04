import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import * as ng from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppToolbarComponent } from './toolbar/toolbar.component';
import { HoverDirective, AWStackDirective } from './directives';


@NgModule({
  declarations: [
    AppComponent,
    AppToolbarComponent,
    HoverDirective,
    AWStackDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

@NgModule({

})
export class App2Module {

}