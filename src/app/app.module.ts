import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { HerosectionComponent } from './herosection/herosection.component';
import { FootercomponentComponent } from './footercomponent/footercomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    HerosectionComponent,
    FootercomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
