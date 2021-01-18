import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ComunaService } from 'src/app/services/comuna/comuna.service';
import { FarmaciaService } from 'src/app/services/farmacia/farmacia.service';

@Component({
  selector: 'app-pharmacy',
  templateUrl: './pharmacy.component.html',
  styleUrls: ['./pharmacy.component.css']
})
export class PharmacyComponent implements OnInit {

  /** Comuna seleccionada */
  selectedCommune: string;
  /** Lista de comunas */
  optionsCommunes: any[] = [];
  farmacias = [];
  loading = false;
  isSubmit = false;

  farmaciaTurno = {
    comuna: 'Santiago',
    nombrelocal: ''
  }

  constructor(private comunaSv: ComunaService,
    private farmaciaSv: FarmaciaService) {

    this.comunaSv.getAllCommunes().subscribe((cm) => {
      this.optionsCommunes = cm;
    });
  }

  ngOnInit(): void {
  }

  /**
   * Busca las farmacias de turno
   */
  buscarFarmacias = (forma: NgForm) => {
    if (forma.invalid) {
      Object.values(forma.controls).forEach(control => {
        control.markAsTouched();
      });
      return;
    }

    this.loading = true;
    this.farmaciaSv.getAllPharmacy4Filter(forma.value.inputComuna,forma.value.inputNombreLocal).subscribe(fm => {
      this.isSubmit = true;
      console.log(fm);      
      this.farmacias = fm;
      this.loading = false;
    });
   
  }



}
