
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

export class ValidacionesFlores {
    static soloNumeros(control: AbstractControl): ValidationErrors| null {

  
        const soloNumeros = '^[0-9]+$';
        let isNumber = new RegExp(soloNumeros).test(control.value);
    
        if ( isNumber){
            return null;
    }else{
            return { soloNumeros: true }}
    }

}