import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoContainerComponent } from './logo-container/logo-container.component';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  declarations: [LogoContainerComponent, SidebarComponent],
  imports: [
    CommonModule
  ],
  exports: [
    LogoContainerComponent,
    SidebarComponent
  ]
})
export class SharedModule { }
