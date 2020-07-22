import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatVideoModule } from 'mat-video';

// Custom Imports
import { MaterialModule } from './material.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LivestreamPlayerComponent } from './livestream-player/livestream-player.component';
import { LogoContainerComponent } from './logo-container/logo-container.component';
import { VideoPreviewComponent } from './video-preview/video-preview.component';

@NgModule({
  declarations: [
    SidebarComponent,
    LivestreamPlayerComponent,
    LogoContainerComponent,
    VideoPreviewComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MatVideoModule
  ],
  exports: [
    MaterialModule,
    SidebarComponent,
    LivestreamPlayerComponent,
    LogoContainerComponent,
    MatVideoModule
  ]
})
export class SharedModule { }
