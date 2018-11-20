"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var forms_1 = require("@angular/forms");
var application_settings_1 = require("application-settings");
var router_1 = require("nativescript-angular/router");
var camera = require("nativescript-camera");
var app = require("application");
var UserAuthComponent = /** @class */ (function () {
    function UserAuthComponent(page, routerExtensions, formBuilder) {
        this.page = page;
        this.routerExtensions = routerExtensions;
        this.formBuilder = formBuilder;
        this.tabSelectedIndex = 0;
        this.loginForm = this.formBuilder.group({
            userName: [application_settings_1.getString('userName', ''), forms_1.Validators.required],
            password: [application_settings_1.getString('password', ''), forms_1.Validators.required]
        });
        this.registerForm = this.formBuilder.group({
            firstName: ['', forms_1.Validators.required],
            lastName: ['', forms_1.Validators.required],
            userName: ['', forms_1.Validators.required],
            password: ['', forms_1.Validators.required],
            telnum: ['', forms_1.Validators.required],
            email: ['', forms_1.Validators.required]
        });
    }
    UserAuthComponent.prototype.ngOnInit = function () {
    };
    UserAuthComponent.prototype.takePicture = function () {
        var _this = this;
        var isAvailable = camera.isAvailable();
        if (isAvailable) {
            camera.requestPermissions();
            var options = { width: 100, height: 100, keepAspectRatio: false, saveToGallery: true };
            camera.takePicture(options)
                .then(function (imageAsset) {
                var image = _this.page.getViewById('myPicture');
                image.src = imageAsset;
            })
                .catch(function (err) { return console.log('Error -> ' + err.message); });
        }
    };
    UserAuthComponent.prototype.register = function () {
        this.tabSelectedIndex = 1;
    };
    UserAuthComponent.prototype.onLoginSubmit = function () {
        console.log(JSON.stringify(this.loginForm.value));
        application_settings_1.setString("userName", this.loginForm.get('userName').value);
        application_settings_1.setString("password", this.loginForm.get('password').value);
        this.routerExtensions.navigate(["/home"], { clearHistory: true });
    };
    UserAuthComponent.prototype.onRegisterSubmit = function () {
        console.log(JSON.stringify(this.registerForm.value));
        application_settings_1.setString("userName", this.registerForm.get('userName').value);
        application_settings_1.setString("password", this.registerForm.get('password').value);
        this.loginForm.patchValue({
            'userName': this.registerForm.get('userName').value,
            'password': this.registerForm.get('password').value
        });
        this.tabSelectedIndex = 0;
    };
    UserAuthComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
    };
    UserAuthComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: './userauth.component.html'
        }),
        __metadata("design:paramtypes", [page_1.Page,
            router_1.RouterExtensions,
            forms_1.FormBuilder])
    ], UserAuthComponent);
    return UserAuthComponent;
}());
exports.UserAuthComponent = UserAuthComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcmF1dGguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlcmF1dGguY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELGdDQUErQjtBQUMvQix3Q0FBb0U7QUFDcEUsNkRBQTREO0FBQzVELHNEQUErRDtBQUMvRCw0Q0FBOEM7QUFFOUMsaUNBQW1DO0FBT25DO0lBTUksMkJBQW9CLElBQVUsRUFDbEIsZ0JBQWtDLEVBQ2xDLFdBQXdCO1FBRmhCLFNBQUksR0FBSixJQUFJLENBQU07UUFDbEIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUpwQyxxQkFBZ0IsR0FBVyxDQUFDLENBQUM7UUFNekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztZQUNwQyxRQUFRLEVBQUUsQ0FBQyxnQ0FBUyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsRUFBRSxrQkFBVSxDQUFDLFFBQVEsQ0FBQztZQUMxRCxRQUFRLEVBQUUsQ0FBQyxnQ0FBUyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsRUFBRSxrQkFBVSxDQUFDLFFBQVEsQ0FBQztTQUM3RCxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO1lBQ3ZDLFNBQVMsRUFBRSxDQUFDLEVBQUUsRUFBRSxrQkFBVSxDQUFDLFFBQVEsQ0FBQztZQUNwQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsa0JBQVUsQ0FBQyxRQUFRLENBQUM7WUFDbkMsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLGtCQUFVLENBQUMsUUFBUSxDQUFDO1lBQ25DLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxrQkFBVSxDQUFDLFFBQVEsQ0FBQztZQUNuQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsa0JBQVUs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QUFFO1lBQ25CLFdBQVcsRUFBRSwyQkFBMkI7U0FDM0MsQ0FBQzt5Q0FPNEIsV0FBSTtZQUNBLHlCQUFnQjtZQUNyQixtQkFBVztPQVIzQixpQkFBaUIsQ0E0RTdCO0lBQUQsd0JBQUM7Q0FBQSxBQTVFRCxJQTRFQztBQTVFWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3VpL3BhZ2UnO1xuaW1wb3J0IHsgVmFsaWRhdG9ycywgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IGdldFN0cmluZywgc2V0U3RyaW5nIH0gZnJvbSAnYXBwbGljYXRpb24tc2V0dGluZ3MnO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgKiBhcyBjYW1lcmEgZnJvbSAnbmF0aXZlc2NyaXB0LWNhbWVyYSc7XG5pbXBvcnQgeyBJbWFnZSB9IGZyb20gJ3VpL2ltYWdlJztcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwiYXBwbGljYXRpb25cIjtcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXJcIjtcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogJy4vdXNlcmF1dGguY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFVzZXJBdXRoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGxvZ2luRm9ybTogRm9ybUdyb3VwO1xuICAgIHJlZ2lzdGVyRm9ybTogRm9ybUdyb3VwO1xuICAgIHRhYlNlbGVjdGVkSW5kZXg6IG51bWJlciA9IDA7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UsXG4gICAgICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICAgICAgcHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIpIHtcblxuICAgICAgICB0aGlzLmxvZ2luRm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgICAgICAgdXNlck5hbWU6IFtnZXRTdHJpbmcoJ3VzZXJOYW1lJywgJycpLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgICAgICAgIHBhc3N3b3JkOiBbZ2V0U3RyaW5nKCdwYXNzd29yZCcsICcnKSwgVmFsaWRhdG9ycy5yZXF1aXJlZF1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5yZWdpc3RlckZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgICAgICAgIGZpcnN0TmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgICAgICAgIGxhc3ROYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgICAgICAgdXNlck5hbWU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICAgICAgICBwYXNzd29yZDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgICAgICAgIHRlbG51bTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgICAgICAgIGVtYWlsOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdICAgICAgICAgICAgICAgIFxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuXG4gICAgfVxuXG4gICAgdGFrZVBpY3R1cmUoKSB7XG4gICAgICAgIGxldCBpc0F2YWlsYWJsZSA9IGNhbWVyYS5pc0F2YWlsYWJsZSgpO1xuICAgICAgICBpZiAoaXNBdmFpbGFibGUpIHtcbiAgICAgICAgICAgIGNhbWVyYS5yZXF1ZXN0UGVybWlzc2lvbnMoKTtcbiAgICAgICAgICAgIHZhciBvcHRpb25zID0geyB3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMCwga2VlcEFzcGVjdFJhdGlvOiBmYWxzZSwgc2F2ZVRvR2FsbGVyeTogdHJ1ZX07XG5cbiAgICAgICAgICAgIGNhbWVyYS50YWtlUGljdHVyZShvcHRpb25zKVxuICAgICAgICAgICAgICAgIC50aGVuKChpbWFnZUFzc2V0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpbWFnZSA9IDxJbWFnZT50aGlzLnBhZ2UuZ2V0Vmlld0J5SWQ8SW1hZ2U+KCdteVBpY3R1cmUnKTtcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2Uuc3JjID0gaW1hZ2VBc3NldDtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZygnRXJyb3IgLT4gJyArIGVyci5tZXNzYWdlKSk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHJlZ2lzdGVyKCkge1xuICAgICAgICB0aGlzLnRhYlNlbGVjdGVkSW5kZXggPSAxO1xuICAgIH1cblxuICAgIG9uTG9naW5TdWJtaXQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMubG9naW5Gb3JtLnZhbHVlKSk7XG5cbiAgICAgICAgc2V0U3RyaW5nKFwidXNlck5hbWVcIiwgdGhpcy5sb2dpbkZvcm0uZ2V0KCd1c2VyTmFtZScpLnZhbHVlKTtcbiAgICAgICAgc2V0U3RyaW5nKFwicGFzc3dvcmRcIiwgdGhpcy5sb2dpbkZvcm0uZ2V0KCdwYXNzd29yZCcpLnZhbHVlKTtcblxuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2hvbWVcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pXG4gICAgfVxuXG4gICAgb25SZWdpc3RlclN1Ym1pdCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5yZWdpc3RlckZvcm0udmFsdWUpKTtcblxuICAgICAgICBzZXRTdHJpbmcoXCJ1c2VyTmFtZVwiLCB0aGlzLnJlZ2lzdGVyRm9ybS5nZXQoJ3VzZXJOYW1lJykudmFsdWUpO1xuICAgICAgICBzZXRTdHJpbmcoXCJwYXNzd29yZFwiLCB0aGlzLnJlZ2lzdGVyRm9ybS5nZXQoJ3Bhc3N3b3JkJykudmFsdWUpO1xuXG4gICAgICAgIHRoaXMubG9naW5Gb3JtLnBhdGNoVmFsdWUoe1xuICAgICAgICAgICAgJ3VzZXJOYW1lJzogdGhpcy5yZWdpc3RlckZvcm0uZ2V0KCd1c2VyTmFtZScpLnZhbHVlLFxuICAgICAgICAgICAgJ3Bhc3N3b3JkJzogdGhpcy5yZWdpc3RlckZvcm0uZ2V0KCdwYXNzd29yZCcpLnZhbHVlfSk7XG5cbiAgICAgICAgICAgIHRoaXMudGFiU2VsZWN0ZWRJbmRleCA9IDA7XG4gICAgfVxuXG4gICAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj5hcHAuZ2V0Um9vdFZpZXcoKTtcbiAgICAgICAgc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XG4gICAgfVxufVxuIl19