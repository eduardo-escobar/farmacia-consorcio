import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PharmacyComponent } from './components/pharmacy/pharmacy.component';

const routes: Routes = [
  { path: 'pharmacy', component: PharmacyComponent },
  { path: '**', pathMatch: 'full', redirectTo: '/pharmacy' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
