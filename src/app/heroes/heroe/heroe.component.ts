import {Component} from '@angular/core'; /*Siempre importar esto*/

@Component({
  selector: 'app-heroe', /**Le pongo app-nombre para indicar que es un componente que YO hice y crear la etiqueta de HTML */
  templateUrl:'heroe.component.html' /**Siempre tengo que llamar al html que le hará efecto este código*/
})

export class HeroeComponent{ /**Este se exporta a app.modules */
  nombre:string = "Ironman";
  edad: number = 45;

  /**Creo que no se pone como el siguiente ejemplo ya que sería mas que n
   * nada una función y no es bueno asociar funciones a sus valores */
  // nombremayus = this.nombre.toUpperCase();


  /*Como lo que venía explicando; es una función por eso CREO que deben de ir aquí*/
  get nombreCapitalizad(): string{
    return this.nombre.toUpperCase();
  }

  obtenerNombre(): string{
    return `${this.nombre}-${this.edad}`;
  }

  cambiarNombre(): void{
    this.nombre = "Spiderman";
  }
  cambiarEdad():void{
    this.edad = 23;
  }
}