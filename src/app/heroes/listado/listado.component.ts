import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[]= ['Spiderman', "ironman", "hulk", "Thor"];
  heroeBorrado: string = ''/**ngif puede detectar si tiene null, false, undefined, y hacer que la ocnfidión no se cumpla */;

  borrarHeroe() {
    this.heroeBorrado = this.heroes.shift()|| ""; 
  }

  
}
