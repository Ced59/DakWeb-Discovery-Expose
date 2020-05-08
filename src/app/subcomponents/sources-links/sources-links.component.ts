import {Component, Input, OnInit} from '@angular/core';
import {Source} from '../../source';

@Component({
  selector: 'app-sources-links',
  templateUrl: './sources-links.component.html',
  styleUrls: ['./sources-links.component.css']
})
export class SourcesLinksComponent implements OnInit {

  @Input() sources: Source[];
  @Input() titleSection: string;

  constructor() { }

  ngOnInit() {
  }

}
