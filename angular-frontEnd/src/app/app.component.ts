import { Component, OnInit } from '@angular/core';
import { serviceLibro } from './services/consumo.service';
import { Libro } from './models/libro.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [serviceLibro]
})
export class AppComponent implements OnInit {
  title = 'app';
  listaLibro: Libro[] = [];

  constructor(private service: serviceLibro) {}
  ngOnInit() {
   this.obtenerLibros();
  }

  obtenerLibros() {
    // tslint:disable-next-line:semicolon
    this.service.listar().subscribe(respuesta => {
      console.warn(respuesta);
      this.listaLibro = respuesta;
    });
  }
}
