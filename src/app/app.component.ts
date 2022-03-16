import { Component, OnInit } from '@angular/core';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  digimonList: any;

  constructor(private service: ServiceService) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.service
      .getDigimonList().subscribe((res)=>{
        this.digimonList = res
        console.log(res)
      })
  }
}
