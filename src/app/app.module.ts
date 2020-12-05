import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { ScontrinoComponent } from './components/scontrino/scontrino.component';
import { ProdottoComponent } from './components/prodotto/prodotto.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { MagazzinoComponent } from './components/magazzino/magazzino.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './components/search/search.component';
import { SearchAdvComponent } from './components/search-adv/search-adv.component';
import { CancellaComponent } from './components/cancella/cancella.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalogoComponent,
    ScontrinoComponent,
    ProdottoComponent,
    LoginComponent,
    MagazzinoComponent,
    SearchComponent,
    SearchAdvComponent,
    CancellaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
