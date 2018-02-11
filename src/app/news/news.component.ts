import { Component, OnInit } from '@angular/core';
import { UserService } from "./user.service";
import { Http } from '@angular/http';
import { USER } from "./user_interface.ts";

import { userData } from "./user.json";

@Component({
  selector: 'app-news',
  template:`
  <!-- Starting content from News-->
  <div class="mdl-grid" id="hero-section-news">
    <section id="overlay">
      <h1 id="heading-news">Noticias</h1>
    </section>
  </div>
  <div class="mdl-grid">
    <div class="mdl-cell mdl-cell--4-col-desktop mdl-cell--7-phone" *ngFor="let user of USER">
      <mat-card class="example-card">
        <mat-card-header>
          <div mat-card-avatar class="card-image" [ngStyle]="{'background-image': 'url(' + user.profile_img +')', 'background-size': 'cover'}"></div>
          <mat-card-title>{{ user.name }} {{ user.second_name }}</mat-card-title>
          <mat-card-subtitle>{{ user.title }}</mat-card-subtitle>
        </mat-card-header>
        <img mat-card-image [src]="user.card_img" alt="">
        <mat-card-content>
          <h5 class="card-content-title">{{ user.card_title }}</h5>
          <p>
            The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
            A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
            bred for hunting.
            {{ user.description }}
          </p>
        </mat-card-content>
        <mat-divider></mat-divider>
        <mat-card-actions>
          <button mat-button>ME GUSTA</button>
          <button mat-button>COMPARTIR</button>
        </mat-card-actions>
      </mat-card>
    </div>
  </div>`,
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit{

  /* Displaying static data */
  USER: any[] = [
      {
          "name" : "Jason",
          "second_name": "Martins",
          "profile_img": "../../assets/img/user/jason.png",
          "card_img": "../../assets/img/user/cover1.jpg",
          "title": "Tesla Enviroment",
          "card_title": "Tesla, Inc. The Future.",
          "description": "Lorem ipsum",
          "age" : "24",
          "gender" : "male"
      },
      {
          "name" : "Kyle",
          "second_name": "Jack",
          "profile_img": "../../assets/img/user/jack.png",
          "card_img": "../../assets/img/user/cover2.jpg",
          "card_title": "Velocity with Model S.",
          "title": "Tesla Production",
          "description": "Lorem ipsum",
          "age" : "24",
          "gender" : "male"
      },
      {
          "name" : "Nick",
          "second_name": "Phillips",
          "profile_img": "../../assets/img/user/nick.png",
          "card_img": "../../assets/img/user/cover3.jpg",
          "card_title": "Meet the Starman.",
          "title": "Tesla Thinks.",
          "description": "Lorem ipsum",
          "age" : "23",
          "gender" : "male"
      },
      {
          "name" : "Edd",
          "second_name": "William",
          "profile_img": "../../assets/img/user/nick.png",
          "card_img": "../../assets/img/user/cover4.jpg",
          "card_title": "Creating the charge.",
          "title": "Electric Engineer",
          "description": "Lorem ipsum",
          "age" : "23",
          "gender" : "female"
      },
      {
          "name" : "Addy",
          "second_name": "Osmani",
          "profile_img": "../../assets/img/user/addy.png",
          "card_img": "../../assets/img/user/cover5.jpg",
          "card_title": "Where to buy?",
          "title": "Internal Creator",
          "description": "Lorem ipsum",
          "age" : "23",
          "gender" : "male"
      },
      {
          "name" : "Eva",
          "second_name": "Houston",
          "profile_img": "../../assets/img/user/eva.png",
          "card_img": "../../assets/img/user/cover6.jpg",
          "card_title": "The process of creativity.",
          "title": "Process Observer",
          "description": "Lorem Ipsum.",
          "age" : "23",
          "gender" : "female"
      }
  ];


  constructor() {}


}
