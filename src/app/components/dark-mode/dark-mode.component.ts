import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { WeatherData } from 'src/app/models/weather.model';
import { ThemePalette } from '@angular/material/core';
@Component({
  selector: 'app-dark-mode',
  templateUrl: './dark-mode.component.html',
  styleUrls: ['./dark-mode.component.css']
})
export class DarkModeComponent {

  [x: string]: any;

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
  dark: boolean = true;

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
