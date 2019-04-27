import {Component, Inject, OnInit} from '@angular/core';
import {User} from "../../models/user";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

export interface DialogData {
  user: User;
  receiver: String
}

@Component({
  selector: 'app-call-dialog',
  templateUrl: './call-dialog.component.html',
  styleUrls: ['./call-dialog.component.scss']
})
export class CallDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CallDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
