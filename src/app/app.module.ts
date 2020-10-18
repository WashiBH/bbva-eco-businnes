import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatModule } from './chat/chat.module';
import { LoginModule } from './login/login.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InicioModule } from './inicio/inicio.module';
import { RegistroModule } from './registro/registro.module';
import { MisArtefactosModule } from './mis-artefactos/mis-artefactos.module';
import { PagoSuministroModule } from './pago-suministro/pago-suministro.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    ChatModule,
    LoginModule,
    InicioModule,
    RegistroModule,
    MisArtefactosModule,
    PagoSuministroModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
