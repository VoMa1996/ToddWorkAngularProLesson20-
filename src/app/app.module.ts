import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { CreditCardDirective } from './creditDirective/credit-card.directive';
import { TooltipDirective } from './tooltip/tooltip.directive';
import { MyForDirective } from './myFor/my-for.directive';

import { FileSizePipe } from './filesize.pipe'


@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    TwoComponent,
    CreditCardComponent,
    CreditCardDirective,
    TooltipDirective,
    MyForDirective,
    FileSizePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
