import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  projeto1: string = "Basic Angular Project";
  projeto2: string = "Advanced Angular Project";
  projeto3: string = "Product CRUD with Angular and .NET";
  projeto4: string = "Incomming";

  constructor() {

  }

  abrirProjeto1() {
    window.open("https://desenvolvimento-spa-com-angular.vercel.app/'", "_blank");
  }

  abrirProjeto2() {
    window.open("https://angular-avancado.vercel.app/", "_blank");
  }

  abrirProjeto3() {
    window.open("https://angular-final.vercel.app/", "_blank");  
  }

  abrirProjeto4() {
    window.open("https://www.google.com", "_blank");
  }
}
