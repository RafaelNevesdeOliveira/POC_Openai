import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, take, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  rotaDigimon?: string;
  private _API_URL = 'https://digimon-api.vercel.app/api/';

  constructor(private http: HttpClient) {
    this.rotaDigimon = 'digimon';
  }

  getDigimonList() {
    let list = this.http
      .get(`${this._API_URL}${this.rotaDigimon}`)
      .pipe(
        take(1),
        tap(console.log)
        )

    return list;
  }
}
