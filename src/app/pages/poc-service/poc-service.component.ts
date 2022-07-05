import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-poc-service',
  templateUrl: './poc-service.component.html',
  styleUrls: ['./poc-service.component.scss']
})
export class PocServiceComponent implements OnInit {
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
