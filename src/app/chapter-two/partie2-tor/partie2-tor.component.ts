import { Component, OnInit } from '@angular/core';
import {Source} from '../../source';

@Component({
  selector: 'app-partie2-tor',
  templateUrl: './partie2-tor.component.html',
  styleUrls: ['./partie2-tor.component.css']
})
export class Partie2TorComponent implements OnInit {


  sources: Source[] = [
    {
      name: 'Site officiel du projet Tor',
      url: 'https://www.torproject.org/'
    },
    {
      name: 'Wikipédia',
      url: 'https://fr.wikipedia.org/wiki/Tor_(r%C3%A9seau)'
    },
    {
      name: 'Doc d\'Ubuntu sur Tor',
      url: 'https://doc.ubuntu-fr.org/tor'
    },
    {
      name: 'Etude complète sur le réseau Tor et le Dark-Web',
      url: 'https://journals.openedition.org/netcom/3134'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
