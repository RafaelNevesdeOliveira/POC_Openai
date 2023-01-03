import { Component, OnInit } from '@angular/core';
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: "",
});
const openai = new OpenAIApi(configuration);
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  url_image:any = 'https://blog.desdelinux.net/wp-content/uploads/2019/09/openai-proyectos-inteligencia-artificial-imagen-destacada-blog-desdelinux.jpg.webp';
  textToSend = '';
  showImage: any = true;
  openai = new OpenAIApi(configuration)
  constructor() { }

  ngOnInit(): void {
  }

  async generateImage() {
    console.log(this.textToSend);

    this.showImage = true;
    this.url_image = "./assets/loading.gif"

    const imageParameters:any = {
      prompt: this.textToSend,
      n: 1,
      size: "512x512",
    }
    let response = await openai.createImage(imageParameters);
    let urlData = response.data.data[0].url

    this.url_image = urlData;

  }

}
