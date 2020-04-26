import {Component, Input, OnInit} from '@angular/core';
import {Source} from '../../source';


@Component({
  selector: 'app-partie1-web-surface',
  templateUrl: './partie1-web-surface.component.html',
  styleUrls: ['./partie1-web-surface.component.css']
})
export class Partie1WebSurfaceComponent implements OnInit {

  sources: Source[];

  constructor() { }

  ngOnInit() {
  }

}
