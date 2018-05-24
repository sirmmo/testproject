// Import Libraries
import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { ModalRemoveComponent } from '../../components/modal-remove.component';


// Import Services
import { A2Service } from '../../services/a2.service';

// Import Models
import { A2 } from '../../domain/testproject_db/a2';
import { Test123 } from '../../domain/testproject_db/test123';
// START - USED SERVICES
/*
 *	a2Service.delete
 *		PARAMS: 
 *					ObjectId id - Id
 *		
 *
 *	a2Service.list
 *		PARAMS: 
 *		
 *
 */
// END - USED SERVICES

// START - REQUIRED RESOURCES
/*
 * a2Service  
 */
// END - REQUIRED RESOURCES

@Component({
    selector: "a2list",
    templateUrl: './a2list.component.html',
    styleUrls: ['./a2list.component.css']
})
export class A2ListComponent implements OnInit {
    
    // Attributes
    list: A2[];
    search: any = {};
    idSelected: string;
    
    // Constructor
    constructor(
        private a2Service: A2Service, 
        public dialog: MatDialog) {}

    // Functions
    ngOnInit(): void {
        this.a2Service.list().subscribe(list => this.list = list);
    }

    openModal(id: string): void {
        let dialogRef = this.dialog.open(ModalRemoveComponent, {
            width: '250px',
            data: () => {
                // Execute on confirm
                this.a2Service.remove(id).subscribe(() => {
                    dialogRef.close();
                });
                this.list = this.list.filter(item => item._id != id);
            }
        });
    }

}