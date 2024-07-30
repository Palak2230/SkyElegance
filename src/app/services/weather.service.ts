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

  getWeatherData(cityName: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(environment.weatherApiBaseUrl, {
      headers: new HttpHeaders()
        .set(environment.XRapidAPIHostHeaderName, environment.XRapidAPIHostHeaderValue)
        .set(environment.XRapidAPIKeyHeaderName, environment.XRapidAPIKeyHeaderValue),
      params: new HttpParams()
        .set('city', cityName)
        .set('units', 'standard')

    }
    ).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    let errormessage = ''
    if (error.status === 0) {

      console.error('An error occurred:', error.error);
    }
     else 
     {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
      errormessage = `Backend returned code ${error.status}, body was: `, error.error;
    }

    errormessage += 'Something bad happened; please try again later.';
    return throwError(() => new Error(errormessage));
  }
}