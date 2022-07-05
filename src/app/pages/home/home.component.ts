import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'bytebank';
  transferencia: any

  constructor() { }

  ngOnInit(): void {
  }

  transferir($event:any){
    console.log($event);
    this.transferencia = $event;
  }

  exibirModalErro(){
    window.alert('agua mineral');
}

}
