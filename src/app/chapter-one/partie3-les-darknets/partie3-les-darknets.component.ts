import { Component, OnInit } from '@angular/core';
import {Source} from '../../source';
import {List} from '../../list';

@Component({
  selector: 'app-partie3-les-darknets',
  templateUrl: './partie3-les-darknets.component.html',
  styleUrls: ['./partie3-les-darknets.component.css']
})
export class Partie3LesDarknetsComponent implements OnInit {

  sources: Source[] = [
    {
      name: 'Wikipédia',
      url: 'https://fr.wikipedia.org/wiki/Darknet'
    },
    {
      name: 'Article de l\'école Supinfocom',
      url: 'https://www.supinfo.com/articles/single/4912--darknet-deep-web-darkweb'
    },
    {
      name: 'Site d\'un avocat expliquant bien les différences',
      url: 'https://www.avocats-mathias.com/cyberespace/deep-web-dark-web'
    },
    {
      name: 'Site consacré aux dark-nets et plus spécifiquement à Tor',
      url: 'https://darknet-tor.com/'
    }
  ];


  list: List[] = [
    {
      name: 'Tor',
      imgName: 'tor.jpg',
      description: 'Tor est une forme de mixnet développée au début des années 2000 par l\'armée américaine. Le réseau rassemble plus de 2 millions d\'utilisateurs chaque jour. Tor permet de surfer anonymement sur le web ouvert et intègre un darkweb très actif. C\'est là que se trouvent notamment les principaux marchés noirs, mais on y trouve aussi des sites d\'expression politique, des ressources techniques, etc.',
      url: 'https://www.torproject.org/'
    },
    {
      name: 'Freenet',
      imgName: 'freenet.png',
      description: 'Freenet propose un écosystème anonyme complet (mails, blogs, messagerie, IRC, web) et intègre un mode F2F (ami à ami). Dès l\'origine, Freenet a été orienté vers la politique et on y trouve de nombreuses ressources associées.',
      url: 'https://freenetproject.org/fr/index.html'
    },
    {
      name: 'I2P',
      imgName: 'I2P.png',
      description: 'I2P se comporte comme un proxy. Il intègre un darkweb (les DeepSites) et permet l\'échange de fichiers, l\'édition de blogs et une messagerie anonyme. Il permet également de surfer anonymement sur le web ouvert.',
      url: 'https://geti2p.net/fr/'
    },
    {
      name: 'GNUNet',
      imgName: 'gnunet-logo-dark-text.png',
      description: 'GNUnet est le système d\'anonymisation proposé par le projet GNU. Il est essentiellement utilisé pour le partage de fichiers.',
      url: 'https://gnunet.org/fr/index.html'
    },
    {
      name: 'Zeronet',
      imgName: 'zeronet.jpeg',
      description: 'Zeronet propose de créer un web ouvert et anonyme à partir d\'une technologie inspirée des Bitcoins.',
      url: 'https://zeronet.io/'
    },
    {
      name: 'SafetyGate Invisible',
      imgName: 'logo-SG-Invisible.png',
      description: 'SafetyGate Invisible est une solution professionnelle commerciale.',
      url: 'https://fr.wikipedia.org/wiki/SafetyGate_Invisible'
    }
  ];



  constructor() { }

  ngOnInit() {
  }

}
