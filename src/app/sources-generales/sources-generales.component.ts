import { Component, OnInit } from '@angular/core';
import {Source} from '../source';

@Component({
  selector: 'app-sources-generales',
  templateUrl: './sources-generales.component.html',
  styleUrls: ['./sources-generales.component.css']
})
export class SourcesGeneralesComponent implements OnInit {

  sources: Source[] = [
    {
      name: 'Wikipédia Surface Web',
      url: 'https://fr.wikipedia.org/wiki/Web_surfacique'
    },
    {
      name: 'Wiktionnaire Surface Web',
      url: 'https://fr.wiktionary.org/wiki/web_de_surface'
    },
    {
      name: 'Site d\'un avocat expliquant bien les différences',
      url: 'https://www.avocats-mathias.com/cyberespace/deep-web-dark-web'
    },
    {
      name: 'Wikipédia Deep Web',
      url: 'https://fr.wikipedia.org/wiki/Web_profond'
    },
    {
      name: 'Wiktionnaire Deep Web',
      url: 'https://fr.wiktionary.org/wiki/web_profond'
    },
    {
      name: 'Petite anatomie d\'Internet, oboqo.com',
      url: 'https://www.oboqo.com/blog/petite-anatomie-dinternet-le-web-surfacique-et-le-web-invisible/'
    },
    {
      name: 'Wikipédia DarkNet',
      url: 'https://fr.wikipedia.org/wiki/Darknet'
    },
    {
      name: 'Article de l\'école Supinfocom',
      url: 'https://www.supinfo.com/articles/single/4912--darknet-deep-web-darkweb'
    },
    {
      name: 'Site consacré aux dark-nets et plus spécifiquement à Tor',
      url: 'https://darknet-tor.com/'
    },
    {
      name: 'Tor',
      url: 'https://www.torproject.org/'
    },
    {
      name: 'Freenet',
      url: 'https://freenetproject.org/fr/index.html'
    },
    {
      name: 'I2P',
      url: 'https://geti2p.net/fr/'
    },
    {
      name: 'GNUNet',
      url: 'https://gnunet.org/fr/index.html'
    },
    {
      name: 'Zeronet',
      url: 'https://zeronet.io/'
    },
    {
      name: 'SafetyGate Invisible',
      url: 'https://fr.wikipedia.org/wiki/SafetyGate_Invisible'
    },
    {
      name: 'NordVPN',
      url: 'https://nordvpn.com'
    },
    {
      name: 'ExpressVPN',
      url: 'https://www.expressvpn.com/'
    },
    {
      name: 'Windscribe',
      url: 'https://windscribe.com/'
    },
    {
      name: 'Tunnelbear',
      url: 'https://www.tunnelbear.com/'
    },
    {
      name: 'Hide.me',
      url: 'https://hide.me/'
    },
    {
      name: 'Site officiel du projet Tor',
      url: 'https://www.torproject.org/'
    },
    {
      name: 'Wikipédia Tor',
      url: 'https://fr.wikipedia.org/wiki/Tor_(r%C3%A9seau)'
    },
    {
      name: 'Doc d\'Ubuntu sur Tor',
      url: 'https://doc.ubuntu-fr.org/tor'
    },
    {
      name: 'Etude complète sur le réseau Tor et le Dark-Web',
      url: 'https://journals.openedition.org/netcom/3134'
    },
    {
      name: 'Moteur de recherche Ahmia',
      url: 'https://ahmia.fi/'
    },
    {
      name: 'GM SEARCH DARK',
      url: 'http://www.aleph-graymatter.com/gm-search-dark-le-moteur-de-recherche-francais-du-dark-web/'
    },
    {
      url: 'https://www.techn0polis.net/2014/11/04/facebook-cache-dans-tor-pourquoi-cest-une-tres-bonne-nouvelle/',
      name: 'Article de Technopolis sur Facebook dans le Dark-Web'
    },
    {
      url: 'https://www.numerama.com/magazine/31150-facebook-embrasse-le-darkweb-avec-une-adresse-tor.html',
      name: 'Article de Numerama sur Facebook'
    },
    {
      url: 'https://www.lepoint.fr/high-tech-internet/le-fbi-pirate-un-internet-parallele-07-08-2013-1712193_47.php',
      name: 'Article sur le démantélement de sites pédo-pornographiques du réseau Tor'
    },
    {
      url: 'https://www.nextinpact.com/news/82375-pedopornographie-fbi-sest-bien-introduit-dans-reseau-tor.htm',
      name: 'Autre article sur le démantelement de sites pédo-pornographiques'
    },
    {
      name: 'Unfriended: Dark Web',
      url: 'http://www.allocine.fr/film/fichefilm_gen_cfilm=263081.html'
    },
    {
      name: 'Dark Web (film)',
      url: 'https://www.cineserie.com/movies/583144/'
    },
    {
      name: 'Pandemia de Franck Thilliez',
      url: 'https://fr.wikipedia.org/wiki/Pandemia'
    },
    {
      name: 'Nox (série française)',
      url: 'http://www.allocine.fr/series/ficheserie_gen_cserie=22329.html'
    },
    {
      name: 'Dark Web (livre)',
      url: 'https://www.renaud-bray.com/Livres_Produit.aspx?id=2376123&def=Dark+web,KOONTZ,+DEAN+RAY,9782809823622'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
