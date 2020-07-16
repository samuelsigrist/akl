import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Custom Imports
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MaterialModule
  ]
})
export class SharedModule { }
