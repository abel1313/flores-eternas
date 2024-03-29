import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SharedModule } from '../../../../shared/shared/shared.module';
import { CommonModule } from '@angular/common';

import { validando,ValidacionesFlores } from '../../../../validators/index';
import { DragDirective, FileHandle } from '../../../../directivas/upload-directive';

@Component({
  selector: 'app-add-productos',
  standalone: true,
  imports: [
    SharedModule,
    CommonModule,
    
  ],
  templateUrl: './add-productos.component.html',
  styleUrl: './add-productos.component.scss'
})
export class AddProductosComponent implements OnInit{
  name = 'Angular 5';
  files: FileHandle[] = [];

  constructor(private readonly formBuilder: FormBuilder ){

  }

  filesDropped(files: FileHandle[]): void {
    this.files = files;
  }

  upload(): void {
    //get image upload file obj;
  }

  profileForm = this.formBuilder.group({
    nombreProduto: ['',[Validators.required, Validators.minLength(5)]],
    precioProducto: ['',[Validators.required, ValidacionesFlores.soloNumeros]],
    existeciasProducto: ['',[Validators.required]],
    address: this.formBuilder.group({
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
    }),
  }, 
  { 
    validators: [validando, ValidacionesFlores.soloNumeros]
  } );


  ngOnInit(): void {
      
  }

   saveProducto(): void{
    
  }


  
}
