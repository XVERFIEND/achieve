import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
import { Achievement } from './achievement.model';
@Injectable({
  providedIn: 'root'
})

export class AchievementsService {
  private REST_API: string = 'https://us-central1-stag-server.cloudfunctions.net/app/api/achieves';
  private httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) { }

  // // Add
  // createAchieve(data: Achieve): Observable<any> {
  //   let API_URL = `${this.REST_API}/add-achieve`;
  //   return this.httpClient.post(API_URL, data)
  //     .pipe(
  //       catchError(this.handleError)
  //     )
  // }

  // Get all achieves
  getAchieves() {
    return this.httpClient.get(`${this.REST_API}`);
  }

  // Get single achieve
  getAchieve(id:any): Observable<Achievement> {
    let API_URL = `${this.REST_API}/${id}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders })
      .pipe(map((res: any) => {
          return res || {}
        }),
        catchError(this.handleError)
      )
  }

  // Update achieve
  updateAchieve(id:any, data:any): Observable<any> {
    let API_URL = `${this.REST_API}/update-achieve/${id}`;
    return this.httpClient.put(API_URL, data, {headers: this.httpHeaders})
    .pipe(catchError(this.handleError))
  }

  // // Delete
  // deleteAchieve(id:any): Observable<any> {
  //   let API_URL = `${this.REST_API}/delete-achieve/${id}`;
  //   return this.httpClient.delete(API_URL, {headers: this.httpHeaders})
  //   .pipe(catchError(this.handleError))
  // }

  // Error
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
