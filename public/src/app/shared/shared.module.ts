import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Custom Imports
import { MaterialModule } from './material.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LivestreamPlayerComponent } from './livestream-player/livestream-player.component';

@NgModule({
  declarations: [
    SidebarComponent,
    LivestreamPlayerComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MaterialModule,
    SidebarComponent,
    LivestreamPlayerComponent
  ]
})
export class SharedModule { }
