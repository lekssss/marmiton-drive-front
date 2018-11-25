import {NgModule} from '@angular/core';

import {
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatListModule
} from '@angular/material';
  

@NgModule({
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatListModule
  ],
  exports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatListModule
  ]
})
export class MaterialModule {}