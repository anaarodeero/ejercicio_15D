import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html'
})
export class PipesComponent implements OnInit {

  fichero = {
    nombre: "Ana",
    tam: 75748376,
    directorio: "/home"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
