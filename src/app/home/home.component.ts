import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  ngOnInit() {

    let side1 = document.getElementById('side1');
    let side2 = document.getElementById('side2');
    let titulo1 = document.getElementById('titulo1');
    let arrow = document.getElementById('arrow');

    window.addEventListener('scroll', function () {
      if (side1 != null && side2 != null && titulo1 != null && arrow != null) {
        side1.style.left = -window.pageYOffset * 1.5 + 'px';
        side2.style.left = window.pageYOffset * 1.5 + 'px';
        titulo1.style.top = -window.pageYOffset * 1.5 + 'px';
        arrow.style.top = -window.pageYOffset * 1.5 + 'px';
      }

    });
  }
}
