import { Component, OnInit } from '@angular/core';
import {Source} from '../../../source';

@Component({
  selector: 'app-site-surprise',
  templateUrl: './site-surprise.component.html',
  styleUrls: ['./site-surprise.component.css']
})
export class SiteSurpriseComponent implements OnInit {

  sources: Source[] = [
    {
      url: 'https://www.techn0polis.net/2014/11/04/facebook-cache-dans-tor-pourquoi-cest-une-tres-bonne-nouvelle/',
      name: 'Article de Technopolis sur Facebook dans le Dark-Web'
    },
    {
      url: 'https://www.numerama.com/magazine/31150-facebook-embrasse-le-darkweb-avec-une-adresse-tor.html',
      name: 'Article de Numerama'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
