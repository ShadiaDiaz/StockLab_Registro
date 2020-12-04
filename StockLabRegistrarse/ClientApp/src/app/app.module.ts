import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { AppRoutingModule } from './app-routing.module';
import { AlertModalComponent } from './@base/modal/alert-modal/alert-modal.component';
import { UsuarioRegistroComponent } from './Stocklabre/usuario-registro/usuario-registro.component';


@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    FetchDataComponent,
    AlertModalComponent,
    UsuarioRegistroComponent,

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: UsuarioRegistroComponent, pathMatch: 'full' },
      { path: 'fetch-data', component: FetchDataComponent },
    ], { relativeLinkResolution: 'legacy' }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
