import { Component, OnInit, ViewChild } from '@angular/core';
import { RadDataFormComponent } from 'nativescript-ui-dataform/angular/dataform-directives';
import { IUser, User } from './user';
import * as dialogs from "tns-core-modules/ui/dialogs";

@Component({
    selector: "user",
    moduleId: module.id,
    templateUrl: "./user.component.html",
    styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
    @ViewChild('myCommitDataForm') myCommitDataFormComp: RadDataFormComponent;
    users: IUser[] = [];
    newUser: IUser = new User();
    
    onPropertyCommitted() {
        if (this.myCommitDataFormComp.dataForm.editedObject) {
            this.newUser = null;
            this.newUser = <IUser>JSON.parse(this.myCommitDataFormComp.dataForm.editedObject);;
            return true;
        }
    }

    
    constructor() { }

    ngOnInit() {
    }

    onSubmit() {
        dialogs.alert("New User Added").then(()=> {
            console.log("Dialog closed!");
        });
        this.addUser();
    }
    
    addUser() {
        this.users = <IUser[]>JSON.parse(localStorage.getItem('users')) || []; // get array from localstorage
        this.users.push(this.newUser); 
        localStorage.setItem('users', JSON.stringify(this.users)); // save updated array back to localstorage
    }

}