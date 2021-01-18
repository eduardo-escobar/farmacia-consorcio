import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { ComunaService } from './services/comuna/comuna.service';
import { FarmaciaService } from './services/farmacia/farmacia.service';
import { PharmacyComponent } from './components/pharmacy/pharmacy.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule} from '@angular/material/progress-bar';
import { PharmacyTarjetaComponent } from './components/pharmacy-tarjeta/pharmacy-tarjeta.component';
@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    PharmacyComponent,
    NavbarComponent,
    PharmacyTarjetaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LeafletModule,
    NgSelectModule,
    FormsModule,
    HttpClientModule,
    MatProgressBarModule
  ],
  providers: [ComunaService,FarmaciaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
