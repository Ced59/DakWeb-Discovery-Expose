import { Component, OnInit } from '@angular/core';
import {Source} from '../../../source';

@Component({
  selector: 'app-site-pornographiques',
  templateUrl: './site-pornographiques.component.html',
  styleUrls: ['./site-pornographiques.component.css']
})
export class SitePornographiquesComponent implements OnInit {

  sources: Source[] = [
    {
      url: 'https://www.lepoint.fr/high-tech-internet/le-fbi-pirate-un-internet-parallele-07-08-2013-1712193_47.php',
      name: 'Article sur le démantélement de nombreux sites pédo-pornographiques du réseau Tor'
    },
    {
      url: 'https://www.nextinpact.com/news/82375-pedopornographie-fbi-sest-bien-introduit-dans-reseau-tor.htm',
      name: 'Autre article sur le même sujet'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
