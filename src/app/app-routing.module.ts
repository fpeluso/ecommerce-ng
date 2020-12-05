import { CancellaComponent } from './components/cancella/cancella.component';
import { MagazzinoComponent } from './components/magazzino/magazzino.component';
import { LoginComponent } from './components/login/login.component';
import { ProdottoComponent } from './components/prodotto/prodotto.component';
import { ScontrinoComponent } from './components/scontrino/scontrino.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'catalogo/:id', component: ProdottoComponent },
  { path: 'scontrino', component: ScontrinoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'magazzino', component: MagazzinoComponent },
  { path: 'cancella/:id', component: CancellaComponent },
  { path: 'conferma', redirectTo: 'scontrino', pathMatch: 'full' },
  { path: 'annulla', redirectTo: 'scontrino', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
