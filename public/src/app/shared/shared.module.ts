import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoContainerComponent } from './logo-container/logo-container.component';



@NgModule({
  declarations: [LogoContainerComponent],
  imports: [
    CommonModule
  ],
  exports: [
    LogoContainerComponent
  ]
})
export class SharedModule { }
