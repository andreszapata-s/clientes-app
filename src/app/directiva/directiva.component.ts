import { Component } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
})
export class DirectivaComponent {

  listaCurso: string[] = ['TypeScript','JavaScript','c#','python'];

  habilitar: boolean = true;

  constructor() { }

  modificarHabilitar():void{
    this.habilitar=(this.habilitar==true )?false:true;
  }

}
