import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-video-preview',
  templateUrl: './video-preview.component.html',
  styleUrls: ['./video-preview.component.scss']
})
export class VideoPreviewComponent implements OnInit {
  @Input() url;

  constructor() { }

  ngOnInit(): void {
  }

}
