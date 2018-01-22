"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var RegisterComponent = (function () {
    function RegisterComponent(http, router) {
        this.http = http;
        this.router = router;
        this.input = {
            "name": "",
            "email": "",
            "password": ""
        };
        this.jo = true;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.input.email = this.email.nativeElement.text;
        this.input.password = this.password.nativeElement.text;
        this.input.name = this.name.nativeElement.text;
        var req = this.http.put('http://192.168.178.24:3000/addUser', this.input).subscribe(function (wurst) {
        }, function (res) {
            console.log(res.status);
            console.log(_this.input.email);
            console.log(_this.input.password);
            console.log(_this.input.name);
            _this.routeHere('home');
        });
        this.routeHere('home');
    };
    RegisterComponent.prototype.routeHere = function (rute) {
        console.log('navigate to: ' + rute);
        this.router.navigate([rute]);
    };
    __decorate([
        core_1.ViewChild('email'),
        __metadata("design:type", core_1.ElementRef)
    ], RegisterComponent.prototype, "email", void 0);
    __decorate([
        core_1.ViewChild('password'),
        __metadata("design:type", core_1.ElementRef)
    ], RegisterComponent.prototype, "password", void 0);
    __decorate([
        core_1.ViewChild('name'),
        __metadata("design:type", core_1.ElementRef)
    ], RegisterComponent.prototype, "name", void 0);
    RegisterComponent = __decorate([
        core_1.Component({
            selector: "register",
            moduleId: module.id,
            templateUrl: "./register.component.html"
        }),
        __metadata("design:paramtypes", [http_1.Http, router_1.Router])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVnaXN0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlFO0FBQ3pFLHNDQUFxQztBQUNyQywwQ0FBeUM7QUFVekM7SUFhSSwyQkFBb0IsSUFBVSxFQUFVLE1BQWM7UUFBbEMsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFYL0MsVUFBSyxHQUFHO1lBQ1AsTUFBTSxFQUFFLEVBQUU7WUFDVixPQUFPLEVBQUUsRUFBRTtZQUNYLFVBQVUsRUFBRSxFQUFFO1NBRXJCLENBQUE7UUFDRCxPQUFFLEdBQWEsSUFBSSxDQUFDO0lBT3BCLENBQUM7SUFDRCxvQ0FBUSxHQUFSO0lBRUEsQ0FBQztJQUVNLG9DQUFRLEdBQWY7UUFBQSxpQkEwQkM7UUF2QkcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDO1FBQ2pELElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQztRQUN2RCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7UUFHL0MsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsb0NBQW9DLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FBRSxVQUFBLEtBQUs7UUFFekYsQ0FBQyxFQUNELFVBQUEsR0FBRztZQUNELE9BQU8sQ0FBQyxHQUFHLENBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzdCLEtBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDeEIsQ0FBQyxDQUNBLENBQUM7UUFPUixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFFTSxxQ0FBUyxHQUFoQixVQUFpQixJQUFJO1FBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBMUNtQjtRQUFuQixnQkFBUyxDQUFDLE9BQU8sQ0FBQztrQ0FBUSxpQkFBVTtvREFBQztJQUNmO1FBQXRCLGdCQUFTLENBQUMsVUFBVSxDQUFDO2tDQUFXLGlCQUFVO3VEQUFDO0lBQ3pCO1FBQWxCLGdCQUFTLENBQUMsTUFBTSxDQUFDO2tDQUFPLGlCQUFVO21EQUFDO0lBWDNCLGlCQUFpQjtRQU43QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSwyQkFBMkI7U0FFM0MsQ0FBQzt5Q0FjNEIsV0FBSSxFQUFrQixlQUFNO09BYjdDLGlCQUFpQixDQXFEN0I7SUFBRCx3QkFBQztDQUFBLEFBckRELElBcURDO0FBckRZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCAqIGFzIEFwcGxpY2F0aW9uU2V0dGluZ3MgZnJvbSBcImFwcGxpY2F0aW9uLXNldHRpbmdzXCI7XHJcbmltcG9ydCB7IFNuYWNrQmFyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1zbmFja2JhclwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJyZWdpc3RlclwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcmVnaXN0ZXIuY29tcG9uZW50Lmh0bWxcIlxyXG5cclxufSlcclxuZXhwb3J0IGNsYXNzIFJlZ2lzdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBwdWJsaWMgaW5wdXQgPSB7XHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIlwiLFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwiXCIsXHJcbiAgICAgICAgICAgIFwicGFzc3dvcmRcIjogXCJcIlxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgam8gOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIEBWaWV3Q2hpbGQoJ2VtYWlsJykgZW1haWw6IEVsZW1lbnRSZWY7XHJcbiAgICBAVmlld0NoaWxkKCdwYXNzd29yZCcpIHBhc3N3b3JkOiBFbGVtZW50UmVmO1xyXG4gICAgQFZpZXdDaGlsZCgnbmFtZScpIG5hbWU6IEVsZW1lbnRSZWY7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XHJcbiAgICAgICBcclxuICAgIH1cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVnaXN0ZXIoKXtcclxuICAgIFxyXG5cclxuICAgICAgICB0aGlzLmlucHV0LmVtYWlsID0gdGhpcy5lbWFpbC5uYXRpdmVFbGVtZW50LnRleHQ7XHJcbiAgICAgICAgdGhpcy5pbnB1dC5wYXNzd29yZCA9IHRoaXMucGFzc3dvcmQubmF0aXZlRWxlbWVudC50ZXh0O1xyXG4gICAgICAgIHRoaXMuaW5wdXQubmFtZSA9IHRoaXMubmFtZS5uYXRpdmVFbGVtZW50LnRleHQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgcmVxID0gdGhpcy5odHRwLnB1dCgnaHR0cDovLzE5Mi4xNjguMTc4LjI0OjMwMDAvYWRkVXNlcicsdGhpcy5pbnB1dCkuc3Vic2NyaWJlKCB3dXJzdCA9PntcclxuICAgICAgICBcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICByZXMgID0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyggcmVzLnN0YXR1cyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuaW5wdXQuZW1haWwpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmlucHV0LnBhc3N3b3JkKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5pbnB1dC5uYW1lKTtcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZUhlcmUoJ2hvbWUnKTtcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgICAgKTsgXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgdGhpcy5yb3V0ZUhlcmUoJ2hvbWUnKTsgICBcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcm91dGVIZXJlKHJ1dGUpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCduYXZpZ2F0ZSB0bzogJyArIHJ1dGUpO1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtydXRlXSk7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==