"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var app = require("application");
var router_2 = require("nativescript-angular/router");
var nativescript_ui_sidedrawer_1 = require("nativescript-ui-sidedrawer");
var operators_1 = require("rxjs/operators");
var dialogs_1 = require("ui/dialogs");
var application_settings_1 = require("application-settings");
var AppComponent = /** @class */ (function () {
    function AppComponent(router, routerExtensions) {
        this.router = router;
        this.routerExtensions = routerExtensions;
        // Use the component constructor to inject services.
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._activatedUrl = "/home";
        this._sideDrawerTransition = new nativescript_ui_sidedrawer_1.SlideInOnTopTransition();
        this.router.events
            .pipe(operators_1.filter(function (event) { return event instanceof router_1.NavigationEnd; }))
            .subscribe(function (event) { return _this._activatedUrl = event.urlAfterRedirects; });
    };
    Object.defineProperty(AppComponent.prototype, "sideDrawerTransition", {
        get: function () {
            return this._sideDrawerTransition;
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.isComponentSelected = function (url) {
        return this._activatedUrl === url;
    };
    AppComponent.prototype.onNavItemTap = function (navItemRoute) {
        this.routerExtensions.navigate([navItemRoute], {
            transition: {
                name: "fade"
            }
        });
        var sideDrawer = app.getRootView();
        sideDrawer.closeDrawer();
    };
    AppComponent.prototype.displayLoginDialog = function () {
        var options = {
            title: "Login",
            message: 'Type Your Login Credentials',
            userName: application_settings_1.getString("userName", ""),
            password: application_settings_1.getString("password", ""),
            okButtonText: "Login",
            cancelButtonText: "Cancel"
        };
        dialogs_1.login(options)
            .then(function (loginResult) {
            application_settings_1.setString("userName", loginResult.userName);
            application_settings_1.setString("password", loginResult.password);
        }, function () {
            console.log('Login cancelled');
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "ns-app",
            moduleId: module.id,
            templateUrl: "./app.component.html",
        }),
        __metadata("design:paramtypes", [router_1.Router,
            router_2.RouterExtensions])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsMENBQXdEO0FBQ3hELGlDQUFtQztBQUNuQyxzREFBK0Q7QUFDL0QseUVBQXlHO0FBQ3pHLDRDQUF3QztBQUN4QyxzQ0FBZ0Q7QUFDaEQsNkRBQTREO0FBTzVEO0lBS0ksc0JBQW9CLE1BQWMsRUFDZCxnQkFBa0M7UUFEbEMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEQsb0RBQW9EO0lBQ3hELENBQUM7SUFFRCwrQkFBUSxHQUFSO1FBQUEsaUJBT0M7UUFORyxJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQztRQUM3QixJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxtREFBc0IsRUFBRSxDQUFDO1FBRTFELElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTTthQUNqQixJQUFJLENBQUMsa0JBQU0sQ0FBQyxVQUFDLEtBQVUsSUFBSyxPQUFBLEtBQUssWUFBWSxzQkFBYSxFQUE5QixDQUE4QixDQUFDLENBQUM7YUFDNUQsU0FBUyxDQUFDLFVBQUMsS0FBb0IsSUFBSyxPQUFBLEtBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLGlCQUFpQixFQUE1QyxDQUE0QyxDQUFDLENBQUM7SUFDdkYsQ0FBQztJQUVELHNCQUFJLDhDQUFvQjthQUF4QjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUM7UUFDdEMsQ0FBQzs7O09BQUE7SUFFRCwwQ0FBbUIsR0FBbkIsVUFBb0IsR0FBVztRQUMzQixNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsS0FBSyxHQUFHLENBQUM7SUFDdEMsQ0FBQztJQUVELG1DQUFZLEdBQVosVUFBYSxZQUFvQjtRQUM3QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFDM0MsVUFBVSxFQUFFO2dCQUNSLElBQUksRUFBRSxNQUFNO2FBQ2Y7U0FDSixDQUFDLENBQUM7UUFFSCxJQUFNLFVBQVUsR0FBa0IsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BELFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQseUNBQWtCLEdBQWxCO1FBQ0ksSUFBSSxPQUFPLEdBQUc7WUFDVixLQUFLLEVBQUUsT0FBTztZQUNkLE9BQU8sRUFBRSw2QkFBNkI7WUFDdEMsUUFBUSxFQUFFLGdDQUFTLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQztZQUNuQyxRQUFRLEVBQUUsZ0NBQVMsQ0FBQyxVQUFVLEVBQUMsRUFBRSxDQUFDO1lBQ2xDLFlBQVksRUFBRSxPQUFPO1lBQ3JCLGdCQUFnQixFQUFFLFFBQVE7U0FDN0IsQ0FBQTtRQUVELGVBQUssQ0FBQyxPQUFPLENBQUM7YUFDVCxJQUFJLENBQUMsVUFBQyxXQUF3QjtZQUMzQixnQ0FBUyxDQUFDLFVBQVUsRUFBRSxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDNUMsZ0NBQVMsQ0FBQyxVQUFVLEVBQUUsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2hELENBQUMsRUFDRDtZQUFRLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUMzQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUF2RFEsWUFBWTtRQUx4QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxzQkFBc0I7U0FDdEMsQ0FBQzt5Q0FNOEIsZUFBTTtZQUNJLHlCQUFnQjtPQU43QyxZQUFZLENBd0R4QjtJQUFELG1CQUFDO0NBQUEsQUF4REQsSUF3REM7QUF4RFksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uRW5kLCBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcImFwcGxpY2F0aW9uXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgRHJhd2VyVHJhbnNpdGlvbkJhc2UsIFJhZFNpZGVEcmF3ZXIsIFNsaWRlSW5PblRvcFRyYW5zaXRpb24gfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXJcIjtcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuaW1wb3J0IHsgbG9naW4sIExvZ2luUmVzdWx0IH0gZnJvbSBcInVpL2RpYWxvZ3NcIjtcbmltcG9ydCB7IGdldFN0cmluZywgc2V0U3RyaW5nIH0gZnJvbSBcImFwcGxpY2F0aW9uLXNldHRpbmdzXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWFwcFwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9hcHAuY29tcG9uZW50Lmh0bWxcIixcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIHByaXZhdGUgX2FjdGl2YXRlZFVybDogc3RyaW5nO1xuICAgIHByaXZhdGUgX3NpZGVEcmF3ZXJUcmFuc2l0aW9uOiBEcmF3ZXJUcmFuc2l0aW9uQmFzZTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKSB7XG4gICAgICAgIC8vIFVzZSB0aGUgY29tcG9uZW50IGNvbnN0cnVjdG9yIHRvIGluamVjdCBzZXJ2aWNlcy5cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fYWN0aXZhdGVkVXJsID0gXCIvaG9tZVwiO1xuICAgICAgICB0aGlzLl9zaWRlRHJhd2VyVHJhbnNpdGlvbiA9IG5ldyBTbGlkZUluT25Ub3BUcmFuc2l0aW9uKCk7XG5cbiAgICAgICAgdGhpcy5yb3V0ZXIuZXZlbnRzXG4gICAgICAgIC5waXBlKGZpbHRlcigoZXZlbnQ6IGFueSkgPT4gZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSlcbiAgICAgICAgLnN1YnNjcmliZSgoZXZlbnQ6IE5hdmlnYXRpb25FbmQpID0+IHRoaXMuX2FjdGl2YXRlZFVybCA9IGV2ZW50LnVybEFmdGVyUmVkaXJlY3RzKTtcbiAgICB9XG5cbiAgICBnZXQgc2lkZURyYXdlclRyYW5zaXRpb24oKTogRHJhd2VyVHJhbnNpdGlvbkJhc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2lkZURyYXdlclRyYW5zaXRpb247XG4gICAgfVxuXG4gICAgaXNDb21wb25lbnRTZWxlY3RlZCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWN0aXZhdGVkVXJsID09PSB1cmw7XG4gICAgfVxuXG4gICAgb25OYXZJdGVtVGFwKG5hdkl0ZW1Sb3V0ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbbmF2SXRlbVJvdXRlXSwge1xuICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiZmFkZVwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj5hcHAuZ2V0Um9vdFZpZXcoKTtcbiAgICAgICAgc2lkZURyYXdlci5jbG9zZURyYXdlcigpO1xuICAgIH1cblxuICAgIGRpc3BsYXlMb2dpbkRpYWxvZygpIHtcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICB0aXRsZTogXCJMb2dpblwiLFxuICAgICAgICAgICAgbWVzc2FnZTogJ1R5cGUgWW91ciBMb2dpbiBDcmVkZW50aWFscycsXG4gICAgICAgICAgICB1c2VyTmFtZTogZ2V0U3RyaW5nKFwidXNlck5hbWVcIiwgXCJcIiksXG4gICAgICAgICAgICBwYXNzd29yZDogZ2V0U3RyaW5nKFwicGFzc3dvcmRcIixcIlwiKSxcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJMb2dpblwiLFxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJDYW5jZWxcIlxuICAgICAgICB9XG5cbiAgICAgICAgbG9naW4ob3B0aW9ucylcbiAgICAgICAgICAgIC50aGVuKChsb2dpblJlc3VsdDogTG9naW5SZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRTdHJpbmcoXCJ1c2VyTmFtZVwiLCBsb2dpblJlc3VsdC51c2VyTmFtZSk7XG4gICAgICAgICAgICAgICAgc2V0U3RyaW5nKFwicGFzc3dvcmRcIiwgbG9naW5SZXN1bHQucGFzc3dvcmQpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICgpID0+IHsgY29uc29sZS5sb2coJ0xvZ2luIGNhbmNlbGxlZCcpOyBcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19