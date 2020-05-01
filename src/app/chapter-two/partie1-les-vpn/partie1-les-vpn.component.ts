import { Component, OnInit } from '@angular/core';
import {List} from '../../list';

@Component({
  selector: 'app-partie1-les-vpn',
  templateUrl: './partie1-les-vpn.component.html',
  styleUrls: ['./partie1-les-vpn.component.css']
})
export class Partie1LesVpnComponent implements OnInit {

  listVPNs: List[] = [
    {
      name: 'NordVPN',
      imgName: '01-nordvpn.png',
      description: 'Un des VPN les plus populaire. Basé au Panama qui n\'exige pas la conservation des données. ',
      url: 'https://nordvpn.com'
    },
    {
      name: 'ExpressVPN',
      imgName: 'expresseVPN.jpg',
      description: 'VPN n°1 pour un streaming rapide et illimité et des fonctionnalités de sécurité avancées – gratuit pendant 30 jours !',
      url: 'https://www.expressvpn.com/'
    },
    {
      name: 'Windscribe',
      imgName: 'logo-windscribe.png',
      description: 'Téléchargement de torrents pris en charge & 10 Go de données par mois, mais ne peut pas débloquer Netflix.',
      url: 'https://windscribe.com/'
    },
    {
      name: 'Tunnelbear',
      imgName: 'tunnelbear.png',
      description: 'Des serveurs dans plus de 23 pays, dont la France, mais seulement 500 Mo de données par mois.',
      url: 'https://www.tunnelbear.com/'
    },
    {
      name: 'Hide.me',
      imgName: 'hideme-avis.jpg',
      description: 'Gratuit, sécurisé et sans publicité, mais il ne permet qu’une seule connexion par compte.',
      url: 'https://hide.me/'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
