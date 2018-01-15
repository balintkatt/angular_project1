import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MyService { 
    private url: string = 'https://jsonplaceholder.typicode.com/users';

    constructor(private http: Http){}

    getUsers(){
        return this.http.get(this.url)
            .map((resp: Response)=> resp.json());
    }
    

}