import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-poc-form',
  templateUrl: './poc-form.component.html',
  styleUrls: ['./poc-form.component.scss'],
})
export class PocFormComponent implements OnInit {
  @Output() aoTransferir = new EventEmitter<any>();
  @Output() valoresComErro = new EventEmitter<string>();

  valor: number = 0;
  destino: number = 0;
  constructor() {}

  ngOnInit(): void {}

  transferir() {
    console.log('Solicitada nova transferência ');
    if(this.ehValido()){
      const emitirValor = { valor: this.valor, destino: this.destino };
      this.aoTransferir.emit(emitirValor);
    }
    this.limparCampos();
  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }

  private ehValido() {
    const valido = this.valor > 0;
    if (!valido) {
      this.valoresComErro.emit('Informe um valor válido');
    }
    return valido;
  }
}
