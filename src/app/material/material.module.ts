import { NgModule } from '@angular/core';
 import{MatCardModule} from '@angular/material/card';
//import { MatCardModule } from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';
import {OverlayModule} from '@angular/cdk/overlay';
import {MatButtonToggleModule} from '@angular/material/button-toggle';  
import {MatButtonModule} from '@angular/material/button'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 

const MaterialComponent=[MatCardModule,
  MatFormFieldModule,
  MatMenuModule,OverlayModule,
  MatButtonToggleModule,MatButtonModule]

@NgModule({
  imports: [MaterialComponent],
  exports:[MaterialComponent]

})
export class MaterialModule { }
