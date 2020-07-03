import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
    selector: 'app-cars',
    templateUrl: './cars.component.html',
    styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

    cars = [];

    constructor(private _http: HttpService) { }

    ngOnInit(): void {
        this._http.getCars().subscribe(data => {
					this.cars = data['data'].map(x => x);
				});
    }

}
