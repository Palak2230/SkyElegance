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
 
  ngOnInit(): void {

  }
  city: string = 'Jaipur';
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
