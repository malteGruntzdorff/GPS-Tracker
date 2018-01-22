
import { HttpModule, Request, Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import * as ApplicationSettings from "application-settings";
import { SnackBar } from "nativescript-snackbar";
import { fromObject } from "data/observable";
import { RouterExtensions } from 'nativescript-angular/router';
import {Observable} from "rxjs/Rx";
import "rxjs/add/operator/toPromise";
import "rxjs/add/operator/map";
import 'rxjs/add/operator/catch';
import {request} from "http";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { MyHttpPostService } from "../myHttpPostService";





@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    providers: [MyHttpPostService]
})
export class HomeComponent implements OnInit {
    public input = {
        "email": "",
        "password": ""
    }
    public result: string;
    postData:string;
    userData: any;
     
    
   

    @ViewChild('email') email: ElementRef;
    @ViewChild('password') password: ElementRef;

    constructor(private myPostService: MyHttpPostService, private router: Router, private http: HttpClient) {
      
    }

    public routeHere(rute){
        console.log('navigate to: ' + rute);
        this.router.navigate([rute]);
    }

    ngOnInit(): void {
        
    }

    public login(){
        this.makePostRequest();
    }

    public makePostRequest(){
        this.input.email = this.email.nativeElement.text;
        this.input.password = this.password.nativeElement.text;
        console.log(this.input.password);
        
        const req = this.http.post('http://192.168.178.24:3000/login',this.input).subscribe( wurst =>{
        
          },
        res  =>{
            if(res.status === 200){
            console.log( res.status);
             this.getUserId(this.input.email, this.input.password);
            }else {
            alert("invalid username or password");
            this.ngOnInit();
            }
        }); 
    
        
    }


    public getUserId(email, pw){
        const req = this.http.get('http://192.168.178.24:3000/getUserID/'+email + '/' +pw).map((res: Response) => res.json()).subscribe((wurstKACKE: any)=>{
            const city = wurstKACKE.json();
            console.log(city);    
    },
        (data: Response)=>{
             
            this.routeHere('groups'/* + this.userData.id*/);
           
        });
       
        
        
    }
}
