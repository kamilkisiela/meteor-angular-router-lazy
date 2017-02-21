import { NgModule, Type } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

// Fake dynamic import
import { FooModule } from './foo/foo.module';
import { BarModule } from './bar/bar.module';
import dynamicImport from '../fake-dynamic-import';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'foo', loadChildren: dynamicImport(FooModule) },
      { path: 'bar', loadChildren: dynamicImport(BarModule) }
    ])
  ],
  declarations: [
    AppComponent,
    HomeComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
