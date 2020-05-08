import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-mp3-player',
  templateUrl: './mp3-player.component.html',
  styleUrls: ['./mp3-player.component.css']
})
export class Mp3PlayerComponent implements OnInit {


  @Input() nomFile: string;
  @Input() msbapTitle = 'Audio Title';
  @Input() para: string;

  msbapAudioUrl: string;

  msbapDisplayTitle = true;
  msaapDisplayVolumeControls = true;

  constructor() { }

  ngOnInit(): void {
    this.msbapAudioUrl = '../resources/sounds/' + this.nomFile;
  }

}
