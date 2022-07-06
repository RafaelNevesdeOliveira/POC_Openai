import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'bytebank';
  transferencias: any[] = []

  constructor() { }

  ngOnInit(): void {
  }

  transferir($event:any){
    console.log($event);
    const transferencia = {...$event, data: new Date()};
    this.transferencias.push(transferencia);
  }

  exibirModalErro(){
    window.alert('Insira um valor correto');
}

}
