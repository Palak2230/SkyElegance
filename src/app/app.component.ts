import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { WeatherData } from './models/weather.model';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private weatherService: WeatherService) {
    this.getWeatherData(this.cityName);
  }

  weatherData?: WeatherData;
  cityName: string = "Jaipur";
  city: string = "";
  toggle: boolean = false;
  x = this.weatherData?.sunrise;
  unix: number | undefined = this.x;
  date?: Date;


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
