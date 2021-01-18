import { Component, Input, OnInit } from '@angular/core';
import {latLng, MapOptions, tileLayer, Map, Marker, icon} from 'leaflet';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {
  @Input() latitud: any;
  @Input() longitud: any;

  map: Map;
  mapOptions: MapOptions;
  constructor() { }

  ngOnInit(): void {
    this.initializeMapOptions();
  }

  onMapReady(map: Map) {
    this.map = map;
    this.addSampleMarker();
  }

  private initializeMapOptions() {
    this.mapOptions = {
      center: latLng(this.latitud, this.longitud),
      zoom: 18,
      layers: [
        tileLayer(
          'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          {
            maxZoom: 20,
            attribution: 'Map data © OpenStreetMap contributors'
          })
      ],
    };
  }

  private addSampleMarker() {
    const marker = new Marker([this.latitud, this.longitud])
      .setIcon(
        icon({
          iconSize: [45, 41],
          iconAnchor: [13, 41],
          iconUrl: 'assets/marker-icon.png'
        }));
    marker.addTo(this.map);
  }

}
