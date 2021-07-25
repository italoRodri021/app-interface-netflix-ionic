import { DrawerComponent } from './drawer/drawer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [DrawerComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [DrawerComponent]
})
export class SharedComponentsModule { }
