import {Component} from '@angular/core';

@Component({
  selector: 'app-contador', /*Es mi etiqueta HTML personalizada*/
  
  
  
  template: `
  <h1>{{titulo}}</h1>
  <h3>La base es: <strong>{{base}}</strong></h3>
  
  <button (click)="acumular(base)"> +{{base}}</button>
  
  <span>{{numero}}</span>
  
  <button (click)="acumular(-base)"> -{{base}}</button>`,



  // styleUrls: ['/src/app/app.component.sass']
})
export class ContadorComponent{
  public titulo:string = 'Contador APP';
  public numero:number = 0;
  public base:number = 5;

  public acumular(valor:number){
    this.numero += valor;
  }
}