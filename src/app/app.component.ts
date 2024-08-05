import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { WeatherData } from './models/weather.model';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
// lat
// : 
// 26.95252425
// lon
// : 
// 75.70330279413204
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  [x: string]: any;
  url1: string = "../assets/light_hot.jpg";
  url2: string = "../assets/light_cold.jpg";
  color1: string = "#d9ead7";
  color2: string = "#b0d8a3";
  shadow1: string = "rgb(54, 68, 54, 0.6)";
  shadow2: string = "#d3e6c6";
  textcolor: string = "black";

  constructor(private weatherService: WeatherService, private cd: ChangeDetectorRef) {
    this.getcityList(this.cityName);
    // this.getWeatherData(this.cityName);

  }

  weatherData!: WeatherData;
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
      this.url1 = "../assets/light_hot.jpg";
      this.url2 = "../assets/light_cold.jpg";
      this.color1 = "#d9ead7";
      this.color2 = "#b0d8a3";
      this.shadow1 = "rgb(54, 68, 54, 0.6)";
      this.shadow2 = "#d3e6c6";
      document.body.style.backgroundColor = this.color1;

      this.textcolor = "black";
    }
    else {
      this.url1 = "../assets/dark_hot.png";
      this.url2 = "../assets/dark_cold.png";
      this.color1 = "#3c429e";
      this.color2 = "#4c52ad";
      this.shadow1 = "rgba(0,0,0,0.4)";
      this.shadow2 = "rgba(158, 162, 223, 0.25)";

      document.body.style.backgroundColor = this.color1;
      this.textcolor = "white";
    }
  }



  formatter = (unix: number) => {
    this.date = new Date(unix * 1000);
    return this.date.toLocaleTimeString("en-US");
  }
  filteroptions !: Observable<any[]>;
  formcontrol = new FormControl('');
  options: any[] = [];
  ngOnInit(): void {
    this.getWeatherData(26.9525, 75.7033);
    this.formcontrol.valueChanges.subscribe(value => {
      if (this.formcontrol.value) { this.getcityList(this.formcontrol.value); }
    });
  }
  // private _FILTER(value: string) {
  //   const searchvalue = value.toLocaleLowerCase();
  //   return this.getcityList();
  // }
  cityselected: string = 'Jaipur';
  iserror: boolean = false;
  onSubmit() {
    // this.getWeatherData(this.cityName);
    if (this.iserror) this.iserror = false;
  }
  updateMySelection(event: any) {
    console.log(event.source.value);
    this.cityselected = event.source.value.formatted;
    this.getWeatherData(event.source.value.lat, event.source.value.lon);
    // console.log(this.cityselected);
  }
  item: any;
  location: string = 'Jaipur';
  response: any;

  private getWeatherData(lat: number, lon: number) {
    this.weatherService.getWeatherData(lat, lon)
      .subscribe({
        next: (response) => {

          this.item = response.main;
          this.location = response.name;
          this.response = response;


        },
        error: (error) => {
          alert('Please enter a valid city !!');
          // this.cityName = '';
          this.iserror = true;
        }
      });

  }
  private getcityList(cityName: string) {
    if (cityName == '') return;
    this.weatherService.getcitylist(cityName)
      .subscribe({
        next: (response) => {
          console.log(response);
          this.options = response.features.map((item: any) => {
            const { formatted } = item.properties;
            const [lon, lat] = item.geometry.coordinates;
            return { formatted, lon, lat };

          });
          // this.cd.detectChanges();
          // console.log('Updated options:', this.options); // Log updated options
        },
        error: (error) => {
          console.error('Error fetching city list:', error);
          alert('Please enter a valid city !!');
          this.cityName = '';
          this.iserror = true;
        }
      });
  }


}
// {
//   "coord": {
//       "lon": 10.99,
//       "lat": 44.34
//   },
//   "weather": [
//       {
//           "id": 802,
//           "main": "Clouds",
//           "description": "scattered clouds",
//           "icon": "03d"
//       }
//   ],
//   "base": "stations",
//   "main": {
//       "temp": 301.3,
//       "feels_like": 302.06,
//       "temp_min": 299.99,
//       "temp_max": 302.83,
//       "pressure": 1011,
//       "humidity": 53,
//       "sea_level": 1011,
//       "grnd_level": 946
//   },
//   "visibility": 10000,
//   "wind": {
//       "speed": 2.85,
//       "deg": 52,
//       "gust": 1.73
//   },
//   "clouds": {
//       "all": 26
//   },
//   "dt": 1722771473,
//   "sys": {
//       "type": 2,
//       "id": 2004688,
//       "country": "IT",
//       "sunrise": 1722744411,
//       "sunset": 1722796640
//   },
//   "timezone": 7200,
//   "id": 3163858,
//   "name": "Zocca",
//   "cod": 200
// }