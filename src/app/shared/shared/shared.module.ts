import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { DragDirective } from '../../directivas/upload-directive';


@NgModule({
  declarations: [
    DragDirective
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    

    
  ],
  exports:[
    RouterModule,
    ReactiveFormsModule,
    DragDirective
  ]
})
export class SharedModule { }
