import { Component } from '@angular/core';
import { DatosService } from './datos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  posts=[];
  constructor(private datosService:DatosService)
  {
    this.datosService.obtenerDatos().subscribe(data=>{
      this.posts=data;

    });
  }
 

}
