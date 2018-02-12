import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <footer class="mdl-mini-footer">
    <div class="mdl-mini-footer__left-section">
      <div class="mdl-logo">Tesla Motors Inc.</div>
      <ul class="mdl-mini-footer__link-list">
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Compra</a></li>
        <li><a href="#">Ayuda</a></li>
        <li><a href="#">Modelos</a></li>
        <li><a href="#">Historia</a></li>
        <li><a href="#">Marca</a></li>

      </ul>
    </div>
  </footer>
  `,
  styles: ['']
})
export class FooterComponent implements OnInit {

  title = "footer";

  constructor() { }

  ngOnInit() {
  }

}
