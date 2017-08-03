import {ApplicationRef, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [],
  entryComponents: [AppComponent],
})
export class AppModule {
  ngDoBootstrap(app: ApplicationRef) {
    this.bootstrapRootComponent(app, 'app-posts');
  }

  bootstrapRootComponent(app: ApplicationRef, name: string) {
    const options = {
      'app-posts': AppComponent,
    };

    const queryElement = document.querySelector(`${name}`);
    if (!!queryElement) {
      app.bootstrap(options[name]);
    }
  }
}
