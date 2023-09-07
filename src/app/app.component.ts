import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { WeatherData } from './models/weather.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  [x: string]: any;
  color1: string = "#d9ead7";
  color2: string = "#b0d8a3";
  shadow1: string = "rgb(54, 68, 54, 0.6)";
  shadow2: string = "#d3e6c6";
  url1: string = "../assets/light_hot.jpg";
  url2: string = "../assets/light_cold.jpg";
  textcolor: string = "black";

  constructor(private weatherService: WeatherService) {
    this.getWeatherData(this.cityName);
  }

  weatherData?: WeatherData;
  cityName: string = "jaipur";
  city: string = "";
  toggle: boolean = false;
  x = this.weatherData?.sunrise;
  unix: number | undefined = this.x;
  date?: Date;
  isok = true;

  toggler() {
    this.isok = !this.isok;
    if (this.isok) {
      this.color1 = "#d9ead7";
      this.color2 = "#b0d8a3";
      this.shadow1 = "rgb(54, 68, 54, 0.6)";
      this.shadow2 = "#d3e6c6";
      document.body.style.backgroundColor = this.color1;
      this.url1 = "../assets/light_hot.jpg";
      this.url2 = "../assets/light_cold.jpg";
      this.textcolor = "black";
    }
    else {
      this.color1 = "#3c429e";
      this.color2 = "#4c52ad";
      this.shadow1 = "rgba(0,0,0,0.4)";
      this.shadow2 = "rgba(158, 162, 223, 0.25)";
      this.url1 = "../assets/dark_hot.png";
      this.url2 = "../assets/dark_cold.png";
      document.body.style.backgroundColor = this.color1;
      this.textcolor = "white";
    }
  }



  formatter = (unix: number) => {
    this.date = new Date(unix * 1000);
    return this.date.toLocaleTimeString("en-US");
  }
  ngOnInit(): void {

  }

  iserror: boolean = false;
  onSubmit() {
    this.getWeatherData(this.cityName);
    if (this.iserror) this.iserror = false;
  }

  private getWeatherData(cityName: string) {
    this.weatherService.getWeatherData(cityName)
      .subscribe({
        next: (response) => {
          this.weatherData = response;
          this.city = cityName;
          this.cityName = '';

        },
        error: (error) => {
          alert('Please enter a valid city !!');
          this.cityName = '';
          this.iserror = true;
        }
      });

  }



}