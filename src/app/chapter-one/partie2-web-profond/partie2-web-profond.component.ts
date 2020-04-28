import { Component, OnInit } from '@angular/core';
import {Source} from '../../source';

@Component({
  selector: 'app-partie2-web-profond',
  templateUrl: './partie2-web-profond.component.html',
  styleUrls: ['./partie2-web-profond.component.css']
})
export class Partie2WebProfondComponent implements OnInit {

  sources: Source[] = [
    {
      name: 'Wikipédia',
      url: 'https://fr.wikipedia.org/wiki/Web_profond'
    },
    {
      name: 'Wiktionnaire',
      url: 'https://fr.wiktionary.org/wiki/web_profond'
    },
    {
      name: 'Site d\'un avocat expliquant bien les différences',
      url: 'https://www.avocats-mathias.com/cyberespace/deep-web-dark-web'
    },
    {
      name: 'Petite anatomie d\'Internet, oboqo.com',
      url: 'https://www.oboqo.com/blog/petite-anatomie-dinternet-le-web-surfacique-et-le-web-invisible/'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
