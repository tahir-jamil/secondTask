import { ItemEventData } from "ui/list-view"
import { Component, OnInit } from "@angular/core";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    users;

    constructor() {
    }

    ngOnInit(): void {
        this.users = JSON.parse(localStorage.getItem('users'));
    }
}
