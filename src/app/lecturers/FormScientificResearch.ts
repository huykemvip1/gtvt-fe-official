import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-form-scienttific-research',
    template: `
  <mat-dialog-content>
  <form method="post" class="" style="width: 600px; height: 200px;">            
        <div class="col-md-"><label class="labels">Tên nghiên cứu</label>
        <input type="text" class="form-control" placeholder="Nghiên cứu cáp quang"></div>

        <div class="col-5"><label class="labels">Năm</label>
        <select class="form-select">
                <option *ngFor="let year of years" [value]="year">
                    {{year}}
                </option>
        </select>
        </div>
        <div class="mt-4 text-center"><button (click)="returnProfile()" class="btn btn-primary profile-button"
                            type="button">Lưu lại</button></div>
    </form>
  </mat-dialog-content>
  `,
    styles: ['']
})
export class FormScientificResearchComponnent implements OnInit {
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }
    constructor(private dialogRef : MatDialogRef<FormScientificResearchComponnent>){

    }
    years = [
        2012,
        2013,
        2014,
        2015,
        2016,
        2017,
        2018,
        2019,
        2020,
        2021,
        2022
    ]
    returnProfile(){
        this.dialogRef.close();
    }
}
