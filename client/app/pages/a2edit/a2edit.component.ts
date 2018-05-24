// Import Libraries
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

// Import Services
import { A2Service } from '../../services/a2.service';
import { Test123Service } from '../../services/test123.service';

// Import Models
import { A2 } from '../../domain/testproject_db/a2';
import { Test123 } from '../../domain/testproject_db/test123';
// START - USED SERVICES
/*
 *	a2Service.create
 *		PARAMS: 
 *		
 *
 *	a2Service.get
 *		PARAMS: 
 *					ObjectId id - Id 
 *		
 *
 *	Test123Service.list
 *		PARAMS: 
 *		
 *
 *	a2Service.update
 *		PARAMS: 
 *					ObjectId id - Id
 *		
 *
 */
// END - USED SERVICES

// START - REQUIRED RESOURCES
/*
 * Test123Service  
 * a2Service  
 */
// END - REQUIRED RESOURCES

/**
 * Edit component for a2Edit
 */
@Component({
    selector: 'a2edit',
    templateUrl : './a2edit.component.html',
    styleUrls: ['./a2edit.component.css']
})
export class A2EditComponent implements OnInit {

    item: A2;
    listFile: Test123[];
    model: A2;
    
    constructor(
        private a2Service: A2Service,
        private test123Service: Test123Service,
        private route: ActivatedRoute,
        private location: Location) {
        // Init item
        this.item = new A2();
    }

    ngOnInit(): void {
            this.route.params.subscribe(param => {
                let id: string = param['id'];
                if (id !== 'new') {
                    // Get item from server 
                    this.a2Service.get(id).subscribe(item => this.item = item);
                    
                    
                }
                this.test123Service.list().subscribe(list => this.listFile = list);
            });
    }

    /**
     * Save Item
     */
    save (formValid:boolean, item: A2): void{
        if (formValid) {
            if(item._id){
                this.a2Service.update(item).subscribe(data => this.goBack());
            } else {
                this.a2Service.create(item).subscribe(data => this.goBack());
            }  
        }
    }

    /**
     * Go Back
     */
    goBack(): void {
        this.location.back();
    }
    

}