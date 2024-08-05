import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { WeatherData } from '../models/weather.model';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) { }

  // getWeatherData(cityName: string): Observable<WeatherData> {
  //   return this.http.get<WeatherData>(environment.weatherApiBaseUrl, {
  //     headers: new HttpHeaders()
  //       .set(environment.XRapidAPIHostHeaderName, environment.XRapidAPIHostHeaderValue)
  //       .set(environment.XRapidAPIKeyHeaderName, environment.XRapidAPIKeyHeaderValue),
  //     params: new HttpParams()
  //       .set('city', cityName)
  //       .set('units', 'standard')

  //   }
  //   ).pipe(catchError(this.handleError));
  // }
  getWeatherData(lat: number, lon: number): Observable<any> {
    // console.log(lat, lon);
    // return this.http.get<any>(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=2e1b33c68e08afa19e60202c1fa593fd`
    // ).pipe(catchError(this.handleError));
    return this.http.get<any>(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=2e1b33c68e08afa19e60202c1fa593fd`
    ).pipe(catchError(this.handleError));
    // return this.http.get<any>(` http://api.weatherapi.com/v1/forecast.json?key=cc83bf29f7ec475ca2555320243107&q=${lat},${lon}&aqi=no`
    // ).pipe(catchError(this.handleError));
    // return this.http.get<any>(`https://api.tomorrow.io/v4/weather/forecast?location=${cityName}}&apikey=JwdPvNkwIcpiTqUD64xnpADjZiY1HN37`
    // ).pipe(catchError(this.handleError));
  }
  getcitylist(cityName: string): Observable<any> {
    return this.http.get<any>(`https://api.geoapify.com/v1/geocode/autocomplete?text=${cityName}&apiKey=b5d99e8015bd4fa0aef2e5a287c83368`
    ).pipe(catchError(this.handleError));
    // return this.http.get<any>(`https://api.tomorrow.io/v4/weather/forecast?location=${cityName}}&apikey=JwdPvNkwIcpiTqUD64xnpADjZiY1HN37`
    // ).pipe(catchError(this.handleError));
  }


  private handleError(error: HttpErrorResponse) {
    let errormessage = ''
    if (error.status === 0) {

      console.error('An error occurred:', error.error);
    }
    else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
      errormessage = `Backend returned code ${error.status}, body was: `, error.error;
    }

    errormessage += 'Something bad happened; please try again later.';
    return throwError(() => new Error(errormessage));
  }
}