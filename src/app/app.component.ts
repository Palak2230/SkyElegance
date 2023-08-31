import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { WeatherData } from './models/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

   constructor (private weatherService : WeatherService){
this.getWeatherData(this.cityName);
    }

    weatherData ?: WeatherData;
    cityName  :string="Jaipur" ;
  ngOnInit(): void {
     
  }
  city:string='Jaipur';
  onSubmit (){
this.getWeatherData(this.cityName);
this.city=this.cityName;
this.cityName='';
  }
 private  getWeatherData(cityName:string)
 {this.weatherService.getWeatherData(cityName)
 .subscribe({
   next : (response)=>{
     this.weatherData=response;
   }
 });
}}
