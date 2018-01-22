import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import * as ApplicationSettings from "application-settings";
import { SnackBar } from "nativescript-snackbar";

@Component({
    selector: "register",
    moduleId: module.id,
    templateUrl: "./register.component.html"

})
export class RegisterComponent implements OnInit {

    public input = {
            "name": "",
            "email": "",
            "password": ""
        
    }
    jo : boolean = true;
    @ViewChild('email') email: ElementRef;
    @ViewChild('password') password: ElementRef;
    @ViewChild('name') name: ElementRef;

    constructor(private http: Http, private router: Router) {
       
    }
    ngOnInit(): void {

    }

    public register(){
    

        this.input.email = this.email.nativeElement.text;
        this.input.password = this.password.nativeElement.text;
        this.input.name = this.name.nativeElement.text;
        
        
        const req = this.http.put('http://192.168.178.24:3000/addUser',this.input).subscribe( wurst =>{
        
          },
          res  =>{
            console.log( res.status);
            console.log(this.input.email);
            console.log(this.input.password);
            console.log(this.input.name);
            this.routeHere('home');
           }
           ); 






     this.routeHere('home');   
    }

    public routeHere(rute){
        console.log('navigate to: ' + rute);
        this.router.navigate([rute]);
    }

}
