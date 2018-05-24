// Import Libraries
import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { ModalRemoveComponent } from '../../components/modal-remove.component';


// Import Services

// Import Models
import { Test123 } from '../../domain/testproject_db/test123';

import { A2 } from '../../domain/testproject_db/a2';

// START - USED SERVICES

// END - USED SERVICES

// START - REQUIRED RESOURCES

// END - REQUIRED RESOURCES

@Component({
    selector: "test123list",
    templateUrl: './test123list.component.html',
    styleUrls: ['./test123list.component.css']
})
export class Test123ListComponent implements OnInit {
    
    // Attributes
    list: Test123[];
    search: any = {};
    idSelected: string;
    
    // Constructor
    constructor( 
        public dialog: MatDialog) {}

    // Functions
    ngOnInit(): void {
        this.test123Service.list().subscribe(list => this.list = list);
    }

    openModal(id: string): void {
        let dialogRef = this.dialog.open(ModalRemoveComponent, {
            width: '250px',
            data: () => {
                // Execute on confirm
                this.test123Service.remove(id).subscribe(() => {
                    dialogRef.close();
                });
                this.list = this.list.filter(item => item._id != id);
            }
        });
    }

}