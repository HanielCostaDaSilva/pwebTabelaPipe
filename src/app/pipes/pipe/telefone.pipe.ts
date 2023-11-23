import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telefone'
})
export class TelefonePipe implements PipeTransform {

  transform(numero: string): unknown {
    let numeroTransformado: string = "";

    const tamanho= numero.length;
    if (tamanho >= 10) {
      const ddd: string = tamanho === 10 ? numero.substring(0, 2) : numero.substring(0, 3); // (XX) : (XXX);
      const primeiraParte = tamanho === 10? numero.substring(2, tamanho - 4) : numero.substring(3, tamanho - 4) // (XX) XXXX : (XXX) XXXX 
      numeroTransformado += ("(" + ddd + ") " + primeiraParte); 
    }
    else if (tamanho >= 8) {
      numeroTransformado += numero.substring(0, tamanho - 4);
    }
    numeroTransformado+="-"+ numero.substring(tamanho -4);
    return numeroTransformado;

  }

}
