"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
require("rxjs/add/operator/toPromise");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var myHttpPostService_1 = require("../myHttpPostService");
var HomeComponent = (function () {
    function HomeComponent(myPostService, router, http) {
        this.myPostService = myPostService;
        this.router = router;
        this.http = http;
        this.input = {
            "email": "",
            "password": ""
        };
    }
    HomeComponent.prototype.routeHere = function (rute) {
        console.log('navigate to: ' + rute);
        this.router.navigate([rute]);
    };
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.login = function () {
        this.makePostRequest();
    };
    HomeComponent.prototype.makePostRequest = function () {
        var _this = this;
        this.input.email = this.email.nativeElement.text;
        this.input.password = this.password.nativeElement.text;
        console.log(this.input.password);
        var req = this.http.post('http://192.168.178.24:3000/login', this.input).subscribe(function (wurst) {
        }, function (res) {
            if (res.status === 200) {
                console.log(res.status);
                _this.getUserId(_this.input.email, _this.input.password);
            }
            else {
                alert("invalid username or password");
                _this.ngOnInit();
            }
        });
    };
    HomeComponent.prototype.getUserId = function (email, pw) {
        var _this = this;
        var req = this.http.get('http://192.168.178.24:3000/getUserID/' + email + '/' + pw).map(function (res) { return res.json(); }).subscribe(function (wurstKACKE) {
            var city = wurstKACKE.json();
            console.log(city);
        }, function (data) {
            _this.routeHere('groups' /* + this.userData.id*/);
        });
    };
    __decorate([
        core_1.ViewChild('email'),
        __metadata("design:type", core_1.ElementRef)
    ], HomeComponent.prototype, "email", void 0);
    __decorate([
        core_1.ViewChild('password'),
        __metadata("design:type", core_1.ElementRef)
    ], HomeComponent.prototype, "password", void 0);
    HomeComponent = __decorate([
        core_1.Component({
            selector: "Home",
            moduleId: module.id,
            templateUrl: "./home.component.html",
            providers: [myHttpPostService_1.MyHttpPostService]
        }),
        __metadata("design:paramtypes", [myHttpPostService_1.MyHttpPostService, router_1.Router, http_1.HttpClient])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLDBDQUF5QztBQUN6Qyw2Q0FBcUU7QUFDckUsc0NBQXlFO0FBTXpFLHVDQUFxQztBQUNyQyxpQ0FBK0I7QUFDL0IsbUNBQWlDO0FBR2pDLDBEQUF5RDtBQVl6RDtJQWVJLHVCQUFvQixhQUFnQyxFQUFVLE1BQWMsRUFBVSxJQUFnQjtRQUFsRixrQkFBYSxHQUFiLGFBQWEsQ0FBbUI7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBWTtRQWQvRixVQUFLLEdBQUc7WUFDWCxPQUFPLEVBQUUsRUFBRTtZQUNYLFVBQVUsRUFBRSxFQUFFO1NBQ2pCLENBQUE7SUFhRCxDQUFDO0lBRU0saUNBQVMsR0FBaEIsVUFBaUIsSUFBSTtRQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELGdDQUFRLEdBQVI7SUFFQSxDQUFDO0lBRU0sNkJBQUssR0FBWjtRQUNJLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRU0sdUNBQWUsR0FBdEI7UUFBQSxpQkFtQkM7UUFsQkcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDO1FBQ2pELElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQztRQUN2RCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFakMsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsa0NBQWtDLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FBRSxVQUFBLEtBQUs7UUFFeEYsQ0FBQyxFQUNILFVBQUEsR0FBRztZQUNDLEVBQUUsQ0FBQSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEtBQUssR0FBRyxDQUFDLENBQUEsQ0FBQztnQkFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBRSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3hCLEtBQUksQ0FBQyxTQUFTLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN2RCxDQUFDO1lBQUEsSUFBSSxDQUFDLENBQUM7Z0JBQ1AsS0FBSyxDQUFDLDhCQUE4QixDQUFDLENBQUM7Z0JBQ3RDLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNoQixDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFHUCxDQUFDO0lBR00saUNBQVMsR0FBaEIsVUFBaUIsS0FBSyxFQUFFLEVBQUU7UUFBMUIsaUJBYUM7UUFaRyxJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyx1Q0FBdUMsR0FBQyxLQUFLLEdBQUcsR0FBRyxHQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFDLEdBQWEsSUFBSyxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQyxVQUFlO1lBQzVJLElBQU0sSUFBSSxHQUFHLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFCLENBQUMsRUFDRyxVQUFDLElBQWM7WUFFWCxLQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQSx1QkFBdUIsQ0FBQyxDQUFDO1FBRXBELENBQUMsQ0FBQyxDQUFDO0lBSVAsQ0FBQztJQXZEbUI7UUFBbkIsZ0JBQVMsQ0FBQyxPQUFPLENBQUM7a0NBQVEsaUJBQVU7Z0RBQUM7SUFDZjtRQUF0QixnQkFBUyxDQUFDLFVBQVUsQ0FBQztrQ0FBVyxpQkFBVTttREFBQztJQWJuQyxhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyxxQ0FBaUIsQ0FBQztTQUNqQyxDQUFDO3lDQWdCcUMscUNBQWlCLEVBQWtCLGVBQU0sRUFBZ0IsaUJBQVU7T0FmN0YsYUFBYSxDQW9FekI7SUFBRCxvQkFBQztDQUFBLEFBcEVELElBb0VDO0FBcEVZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBIdHRwTW9kdWxlLCBSZXF1ZXN0LCBIdHRwLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBFcnJvclJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgKiBhcyBBcHBsaWNhdGlvblNldHRpbmdzIGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xuaW1wb3J0IHsgU25hY2tCYXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXNuYWNrYmFyXCI7XG5pbXBvcnQgeyBmcm9tT2JqZWN0IH0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzL1J4XCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2VcIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9jYXRjaCc7XG5pbXBvcnQge3JlcXVlc3R9IGZyb20gXCJodHRwXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7IE15SHR0cFBvc3RTZXJ2aWNlIH0gZnJvbSBcIi4uL215SHR0cFBvc3RTZXJ2aWNlXCI7XG5cblxuXG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiSG9tZVwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCIsXG4gICAgcHJvdmlkZXJzOiBbTXlIdHRwUG9zdFNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHB1YmxpYyBpbnB1dCA9IHtcbiAgICAgICAgXCJlbWFpbFwiOiBcIlwiLFxuICAgICAgICBcInBhc3N3b3JkXCI6IFwiXCJcbiAgICB9XG4gICAgcHVibGljIHJlc3VsdDogc3RyaW5nO1xuICAgIHBvc3REYXRhOnN0cmluZztcbiAgICB1c2VyRGF0YTogYW55O1xuICAgICBcbiAgICBcbiAgIFxuXG4gICAgQFZpZXdDaGlsZCgnZW1haWwnKSBlbWFpbDogRWxlbWVudFJlZjtcbiAgICBAVmlld0NoaWxkKCdwYXNzd29yZCcpIHBhc3N3b3JkOiBFbGVtZW50UmVmO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBteVBvc3RTZXJ2aWNlOiBNeUh0dHBQb3N0U2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7XG4gICAgICBcbiAgICB9XG5cbiAgICBwdWJsaWMgcm91dGVIZXJlKHJ1dGUpe1xuICAgICAgICBjb25zb2xlLmxvZygnbmF2aWdhdGUgdG86ICcgKyBydXRlKTtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3J1dGVdKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgcHVibGljIGxvZ2luKCl7XG4gICAgICAgIHRoaXMubWFrZVBvc3RSZXF1ZXN0KCk7XG4gICAgfVxuXG4gICAgcHVibGljIG1ha2VQb3N0UmVxdWVzdCgpe1xuICAgICAgICB0aGlzLmlucHV0LmVtYWlsID0gdGhpcy5lbWFpbC5uYXRpdmVFbGVtZW50LnRleHQ7XG4gICAgICAgIHRoaXMuaW5wdXQucGFzc3dvcmQgPSB0aGlzLnBhc3N3b3JkLm5hdGl2ZUVsZW1lbnQudGV4dDtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5pbnB1dC5wYXNzd29yZCk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCByZXEgPSB0aGlzLmh0dHAucG9zdCgnaHR0cDovLzE5Mi4xNjguMTc4LjI0OjMwMDAvbG9naW4nLHRoaXMuaW5wdXQpLnN1YnNjcmliZSggd3Vyc3QgPT57XG4gICAgICAgIFxuICAgICAgICAgIH0sXG4gICAgICAgIHJlcyAgPT57XG4gICAgICAgICAgICBpZihyZXMuc3RhdHVzID09PSAyMDApe1xuICAgICAgICAgICAgY29uc29sZS5sb2coIHJlcy5zdGF0dXMpO1xuICAgICAgICAgICAgIHRoaXMuZ2V0VXNlcklkKHRoaXMuaW5wdXQuZW1haWwsIHRoaXMuaW5wdXQucGFzc3dvcmQpO1xuICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgYWxlcnQoXCJpbnZhbGlkIHVzZXJuYW1lIG9yIHBhc3N3b3JkXCIpO1xuICAgICAgICAgICAgdGhpcy5uZ09uSW5pdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTsgXG4gICAgXG4gICAgICAgIFxuICAgIH1cblxuXG4gICAgcHVibGljIGdldFVzZXJJZChlbWFpbCwgcHcpe1xuICAgICAgICBjb25zdCByZXEgPSB0aGlzLmh0dHAuZ2V0KCdodHRwOi8vMTkyLjE2OC4xNzguMjQ6MzAwMC9nZXRVc2VySUQvJytlbWFpbCArICcvJyArcHcpLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKSkuc3Vic2NyaWJlKCh3dXJzdEtBQ0tFOiBhbnkpPT57XG4gICAgICAgICAgICBjb25zdCBjaXR5ID0gd3Vyc3RLQUNLRS5qc29uKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjaXR5KTsgICAgXG4gICAgfSxcbiAgICAgICAgKGRhdGE6IFJlc3BvbnNlKT0+e1xuICAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5yb3V0ZUhlcmUoJ2dyb3VwcycvKiArIHRoaXMudXNlckRhdGEuaWQqLyk7XG4gICAgICAgICAgIFxuICAgICAgICB9KTtcbiAgICAgICBcbiAgICAgICAgXG4gICAgICAgIFxuICAgIH1cbn1cbiJdfQ==