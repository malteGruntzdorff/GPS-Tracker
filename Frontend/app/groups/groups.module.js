"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var groups_component_1 = require("./groups.component");
var groups_routing_1 = require("./groups.routing");
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var GroupsModule = (function () {
    function GroupsModule() {
    }
    GroupsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                http_1.HttpClientModule,
                groups_routing_1.routing
            ],
            declarations: [
                groups_component_1.GroupsComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], GroupsModule);
    return GroupsModule;
}());
exports.GroupsModule = GroupsModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvdXBzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdyb3Vwcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx1REFBcUQ7QUFDckQsbURBQTJDO0FBQzNDLDZDQUF3RDtBQUN4RCxzQ0FBMkQ7QUFDM0Qsc0RBQXVFO0FBZ0J2RTtJQUFBO0lBQTRCLENBQUM7SUFBaEIsWUFBWTtRQWJ4QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsaUNBQXdCO2dCQUN4Qix1QkFBZ0I7Z0JBQ2hCLHdCQUFPO2FBQ1Y7WUFDRCxZQUFZLEVBQUU7Z0JBQ1Ysa0NBQWU7YUFDbEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLFlBQVksQ0FBSTtJQUFELG1CQUFDO0NBQUEsQUFBN0IsSUFBNkI7QUFBaEIsb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHcm91cHNDb21wb25lbnQgfSBmcm9tICcuL2dyb3Vwcy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyByb3V0aW5nIH0gZnJvbSAnLi9ncm91cHMucm91dGluZyc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xyXG5cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLCBcclxuICAgICAgICBIdHRwQ2xpZW50TW9kdWxlLFxyXG4gICAgICAgIHJvdXRpbmcgICAgICAgXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgR3JvdXBzQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgc2NoZW1hczogW1xyXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEdyb3Vwc01vZHVsZSB7IH1cclxuIl19