import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    constructor(private http: HttpClient) { }

    getCars() {
        return this.http.get('https://angular-cardealer.herokuapp.com/api/cars');
    }
}
