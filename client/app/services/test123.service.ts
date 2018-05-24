// DEPENDENCIES
import { Observable } from 'rxjs/Rx';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

// SECURITY
import { AuthenticationService } from '../security/authentication.service';

// CONFIG
import { config } from "../../config/properties";

// MODEL
import { Test123BaseService } from "./base/test123.base.service";
import { Test123 } from '../domain/testproject_db/test123';

/**
 * YOU CAN OVERRIDE HERE Test123BaseService
 */

@Injectable()
export class Test123Service extends Test123BaseService {
    
    // CONSTRUCTOR
    constructor(http: Http, authenticationService: AuthenticationService) {
            super(http, authenticationService);
    }
    
    /**
     * Change user password
     */
    changePassword(id: string, passwordNew:string, passwordAdmin:string): Observable<void> {
        return this.http
            .post(this.contextUrl + '/' + id + '/changePassword' , {
                passwordNew: passwordNew, 
                passwordAdmin: passwordAdmin 
            })
            .map(response => response.json());
    }
}