import { NgModule } from '@angular/core';
import{MatCardModule} from '@angular/material/card';
import{} from '@angular/material';

import{MatDatepickerModule} from '@angular/material/datepicker';



const MaterialComponent=[MatCardModule,MatDatepickerModule]

@NgModule({
  imports: [MaterialComponent],
  exports:[MaterialComponent]

})
export class MaterialModule { }
