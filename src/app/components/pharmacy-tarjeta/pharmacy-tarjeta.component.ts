import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pharmacy-tarjeta',
  templateUrl: './pharmacy-tarjeta.component.html',
  styleUrls: ['./pharmacy-tarjeta.component.css']
})
export class PharmacyTarjetaComponent implements OnInit {

  @Input() farmacias: any = [];
  @Input() isSubmit: any = false;
  constructor() {
  }

  ngOnInit(): void {
  }

}
