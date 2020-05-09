import { Component, OnInit } from '@angular/core';
import {List} from '../list';

@Component({
  selector: 'app-conclusion',
  templateUrl: './conclusion.component.html',
  styleUrls: ['./conclusion.component.css']
})
export class ConclusionComponent implements OnInit {

  list: List[] = [
    {
      name: 'Unfriended: Dark Web',
      imgName: 'ufdwaffiche.jpg',
      description: 'Un jeune homme trouve un ordinateur portable et, innocemment, le ramène chez lui. Dans les dossiers, il déniche d\'inquiétants fichiers cachés qu\'il s\'empresse de montrer à ses amis sur Skype. Sans le vouloir, tous se retrouvent dans les tréfonds du Dark Web et découvrent rapidement que quelqu\'un les observe et que cet inconnu est prêt à tout pour récupérer son portable et protéger ses secrets.',
      url: 'http://www.allocine.fr/film/fichefilm_gen_cfilm=263081.html'
    },
    {
      name: 'Dark Web',
      imgName: 'filmDW.jpg',
      description: 'Dark Web raconte l’histoire d\'une organisation secrète qui a monté un divertissement pour le moins particulier. Ils kidnappent des jeunes femmes pour vendre aux enchères à des millionnaires assoiffés de sang le droit de les traquer dans une chasse à l’homme diffusée en direct sur le Dark Web grâce aux caméras équipées sur les victimes…',
      url: 'https://www.cineserie.com/movies/583144/'
    },
    {
      name: 'Pandemia de Franck Thilliez',
      imgName: 'pandemia.jpg',
      description: 'Impossible de ne pas se laisser contaminer par Pandemia. Ce thriller du maître du polar français, Franck Thilliez se révèle d\'une efficacité contre laquelle il n\'existe pas d\'antidote ! Mêlant deux peurs contemporaines, bioterrorisme et virus mortel contagieux, l\'auteur nous entraîne dans un suspens redoutable dont on ne sort pas indemne. Le livre fascine autant par son côté très bien documenté que par sa parfaite maîtrise des codes du genre. Paru en 2016, il résonne aujourd\'hui avec la pandémie de Coronavirus comme une prophétie... J\'adore personnellement cet auteur, et je ne saurais que le conseiller...',
      url: 'https://fr.wikipedia.org/wiki/Pandemia'
    },
    {
      name: 'Nox (série française)',
      imgName: 'nox.jpg',
      description: 'Lorsque sa fille Julie disparaît dans les sous-sols de Paris sans laisser de trace, Catherine Suzini est persuadée qu’elle seule pourra la retrouver. Ancienne flic, à la retraite autant qu’à la dérive, elle devra se résoudre à faire équipe avec Raphaël, le coéquipier de sa fille. Ensemble, ils vont quitter la surface et s’enfoncer dans les tréfonds de Paris pour se lancer dans une course terrifiante et effrénée aux allures de descente aux enfers…',
      url: 'http://www.allocine.fr/series/ficheserie_gen_cserie=22329.html'
    },
    {
      name: 'Dark Web',
      imgName: 'livreDW.jpg',
      description: '« Il faut que j\'en finisse. » Tels sont les derniers mots d\'un homme que la vie semblait avoir comblé, mais qui y met fin... subitement.Son épouse, Jane Hawk, du FBI, ne croit pas à la thèse du suicide. D\'autant qu\'ils sont de plus en plus nombreux à connaître le même sort sur le territoire américain... En cherchant des réponses, Jane met au jour - avec l\'aide d\'un hacker spécialiste du Dark Web - un complot visant à manipuler mentalement les êtres humains. Très vite, elle devient la fugitive la plus recherchée des États-Unis. Y compris par sa propre hiérarchie.Ses ennemis semblent posséder un secret si terrifiant qu\'ils semblent prêts à tout pour l\'éliminer. Mais leur influence et leur perversité suffiront-elles pour arrêter cette femme aussi intelligente que déterminée ? L\'amour est comme la vengeance : il ne connaît nulle limite...',
      url: 'https://www.renaud-bray.com/Livres_Produit.aspx?id=2376123&def=Dark+web,KOONTZ,+DEAN+RAY,9782809823622'
    }
  ];



  constructor() { }

  ngOnInit(): void {
  }

}
