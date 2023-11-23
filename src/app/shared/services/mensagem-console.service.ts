import { Injectable } from '@angular/core';
import { IMensagem } from '../modelo/IMensagem';

@Injectable({
  providedIn: 'root',
})
export class MensagemConsoleService extends IMensagem {
  constructor() {
    super();
  }

  info(mensagem: string): void {
    console.info(mensagem);
  }
  sucesso(mensagem: string): void {
    console.log(mensagem);
  }
  erro(mensagem: string): void {
    console.error(mensagem);
  }

}
