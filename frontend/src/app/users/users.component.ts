import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user.service";
import {User} from "../models/user";
import {FormControl, Validators} from "@angular/forms";
import {MatDialog, MatSnackBar} from "@angular/material";
import {MessageDialogComponent} from "../dialog/message-dialog/message-dialog.component";
import {SmsService} from "../services/sms.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users:User[];
  userMessage:String;

  emailFormControl:FormControl = new FormControl('', [
    Validators.required,
  ]);

  nameFormControl:FormControl = new FormControl('', [
    Validators.required,
  ]);

  addNameFormControl:FormControl = new FormControl('', [
    Validators.required,
  ]);

  addEmailFormControl:FormControl = new FormControl('', [
    Validators.required,
  ]);

  addPasswordFormControl:FormControl = new FormControl('', [
    Validators.required,
  ]);

  selectedUser: User;

  constructor(private userService:UserService, public dialog: MatDialog, private smsService: SmsService, private snackBar: MatSnackBar) {
  }


  ngOnInit() {
    this.userService.fetchAllUsers().subscribe((users)=>{
      this.users= users;
      this.selectedUser = this.users[0];
      this.emailFormControl.setValue(this.selectedUser.email_id);
      this.nameFormControl.setValue(this.selectedUser.name);
    })
  }

  selectUser(user:User){
    this.selectedUser = user;
    this.emailFormControl.setValue(this.selectedUser.email_id);
    this.nameFormControl.setValue(this.selectedUser.name);
  }

  updateUser(user:User){
    this.selectedUser.email_id = this.emailFormControl.value;
    this.selectedUser.name = this.nameFormControl.value;
    this.userService.updateUser(user).subscribe(()=>{
      this.ngOnInit();
    });
  }

  addUser(){
    let newUser: User = new User();
    newUser.email_id = this.addEmailFormControl.value;
    newUser.name = this.addNameFormControl.value;
    newUser.contact = this.addPasswordFormControl.value;

    this.userService.addUser(newUser).subscribe(()=>{
      this.ngOnInit();
    });
  }

  deleteUser(user:User){
    this.selectedUser.email_id = this.emailFormControl.value;
    this.selectedUser.name = this.nameFormControl.value;
    this.userService.deleteUser(user).subscribe(()=>{
      this.ngOnInit();
    });
  }

  callUser(user:User){
    console.log('calling '+ user.name);
  }

  messageUser(user:User){
    const dialogRef = this.dialog.open(MessageDialogComponent, {
      width: '500px',
      data: {user: user}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.userMessage = result;
      if (this.userMessage !== undefined){
        this.smsService.sendSms(user, this.userMessage).subscribe((response)=>{
          this.snackBar.open(response.message, 'dismiss', {
            duration: 5000,
          });
        }, (error)=>{
          this.snackBar.open(error.message, 'dismiss', {
            duration: 5000,
          });
        });
      }
    });

  }
}
