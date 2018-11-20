"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var angular_1 = require("nativescript-ui-sidedrawer/angular");
var angular_2 = require("nativescript-ui-listview/angular");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var http_1 = require("@angular/common/http");
var http_2 = require("nativescript-angular/http");
var forms_1 = require("nativescript-angular/forms");
var forms_2 = require("@angular/forms");
var home_component_1 = require("./home/home.component");
var contact_component_1 = require("./contact/contact.component");
var menu_component_1 = require("./menu/menu.component");
var dishdetail_component_1 = require("./dishdetail/dishdetail.component");
var about_component_1 = require("./about/about.component");
var favorites_component_1 = require("./favorites/favorites.component");
var reservation_component_1 = require("./reservation/reservation.component");
var reservationmodal_component_1 = require("./reservationmodal/reservationmodal.component");
var comment_component_1 = require("./comment/comment.component");
var userauth_component_1 = require("./userauth/userauth.component");
var dish_service_1 = require("./services/dish.service");
var promotion_service_1 = require("./services/promotion.service");
var leader_service_1 = require("./services/leader.service");
var favorite_service_1 = require("./services/favorite.service");
var process_httpmsg_service_1 = require("./services/process-httpmsg.service");
var couchbase_service_1 = require("./services/couchbase.service");
var baseurl_1 = require("./shared/baseurl");
// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";
// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
var AppModule = /** @class */ (function () {
    /*
    Pass your application module to the bootstrapModule function located in main.ts to start your app
    */
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [
                app_component_1.AppComponent
            ],
            imports: [
                nativescript_module_1.NativeScriptModule,
                app_routing_1.AppRoutingModule,
                http_2.NativeScriptHttpModule,
                http_1.HttpClientModule,
                angular_1.NativeScriptUISideDrawerModule,
                angular_2.NativeScriptUIListViewModule,
                forms_1.NativeScriptFormsModule,
                forms_2.ReactiveFormsModule,
                nativescript_ngx_fonticon_1.TNSFontIconModule.forRoot({
                    'fa': './fonts/font-awesome.min.css'
                })
            ],
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                contact_component_1.ContactComponent,
                menu_component_1.MenuComponent,
                dishdetail_component_1.DishdetailComponent,
                about_component_1.AboutComponent,
                favorites_component_1.FavoritesComponent,
                reservation_component_1.ReservationComponent,
                reservationmodal_component_1.ReservationModalComponent,
                comment_component_1.CommentComponent,
                userauth_component_1.UserAuthComponent
            ],
            entryComponents: [
                reservationmodal_component_1.ReservationModalComponent,
                comment_component_1.CommentComponent
            ],
            providers: [
                { provide: 'baseURL', useValue: baseurl_1.baseURL },
                dish_service_1.DishService,
                promotion_service_1.PromotionService,
                leader_service_1.LeaderService,
                favorite_service_1.FavoriteService,
                couchbase_service_1.CouchbaseService,
                process_httpmsg_service_1.ProcessHTTPMsgService
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
        /*
        Pass your application module to the bootstrapModule function located in main.ts to start your app
        */
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLDhEQUFvRjtBQUNwRiw0REFBZ0Y7QUFDaEYsdUVBQThEO0FBQzlELDZDQUFpRDtBQUNqRCxpREFBK0M7QUFFL0MsNkNBQXdEO0FBQ3hELGtEQUFtRTtBQUNuRSxvREFBcUU7QUFDckUsd0NBQXFEO0FBRXJELHdEQUFzRDtBQUN0RCxpRUFBK0Q7QUFDL0Qsd0RBQXNEO0FBQ3RELDBFQUF3RTtBQUN4RSwyREFBeUQ7QUFDekQsdUVBQXFFO0FBQ3JFLDZFQUEyRTtBQUMzRSw0RkFBMEY7QUFDMUYsaUVBQStEO0FBQy9ELG9FQUFrRTtBQUVsRSx3REFBc0Q7QUFDdEQsa0VBQWdFO0FBQ2hFLDREQUEwRDtBQUMxRCxnRUFBOEQ7QUFDOUQsOEVBQTJFO0FBQzNFLGtFQUFnRTtBQUVoRSw0Q0FBMkM7QUFFM0MsMkVBQTJFO0FBQzNFLHdFQUF3RTtBQUV4RSxrRkFBa0Y7QUFDbEYsbUZBQW1GO0FBb0RuRjtJQUhBOztNQUVFO0lBQ0Y7SUFBeUIsQ0FBQztJQUFiLFNBQVM7UUFsRHJCLGVBQVEsQ0FBQztZQUNOLFNBQVMsRUFBRTtnQkFDUCw0QkFBWTthQUNmO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHdDQUFrQjtnQkFDbEIsOEJBQWdCO2dCQUNoQiw2QkFBc0I7Z0JBQ3RCLHVCQUFnQjtnQkFDaEIsd0NBQThCO2dCQUM5QixzQ0FBNEI7Z0JBQzVCLCtCQUF1QjtnQkFDdkIsMkJBQW1CO2dCQUNuQiw2Q0FBaUIsQ0FBQyxPQUFPLENBQUM7b0JBQ3RCLElBQUksRUFBRSw4QkFBOEI7aUJBQ3ZDLENBQUM7YUFDTDtZQUNELFlBQVksRUFBRTtnQkFDViw0QkFBWTtnQkFDWiw4QkFBYTtnQkFDYixvQ0FBZ0I7Z0JBQ2hCLDhCQUFhO2dCQUNiLDBDQUFtQjtnQkFDbkIsZ0NBQWM7Z0JBQ2Qsd0NBQWtCO2dCQUNsQiw0Q0FBb0I7Z0JBQ3BCLHNEQUF5QjtnQkFDekIsb0NBQWdCO2dCQUNoQixzQ0FBaUI7YUFDcEI7WUFDRCxlQUFlLEVBQUU7Z0JBQ2Isc0RBQXlCO2dCQUN6QixvQ0FBZ0I7YUFDbkI7WUFDRCxTQUFTLEVBQUU7Z0JBQ1AsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxpQkFBTyxFQUFFO2dCQUN6QywwQkFBVztnQkFDWCxvQ0FBZ0I7Z0JBQ2hCLDhCQUFhO2dCQUNiLGtDQUFlO2dCQUNmLG9DQUFnQjtnQkFDaEIsK0NBQXFCO2FBQ3hCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7UUFDRjs7VUFFRTtPQUNXLFNBQVMsQ0FBSTtJQUFELGdCQUFDO0NBQUEsQUFBMUIsSUFBMEI7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXIvYW5ndWxhclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXcvYW5ndWxhclwiO1xuaW1wb3J0IHsgVE5TRm9udEljb25Nb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtbmd4LWZvbnRpY29uJztcbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9hcHAucm91dGluZ1wiO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuXG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2hvbWUvaG9tZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29udGFjdENvbXBvbmVudCB9IGZyb20gJy4vY29udGFjdC9jb250YWN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNZW51Q29tcG9uZW50IH0gZnJvbSAnLi9tZW51L21lbnUuY29tcG9uZW50JztcbmltcG9ydCB7IERpc2hkZXRhaWxDb21wb25lbnQgfSBmcm9tICcuL2Rpc2hkZXRhaWwvZGlzaGRldGFpbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWJvdXRDb21wb25lbnQgfSBmcm9tICcuL2Fib3V0L2Fib3V0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGYXZvcml0ZXNDb21wb25lbnQgfSBmcm9tICcuL2Zhdm9yaXRlcy9mYXZvcml0ZXMuY29tcG9uZW50JztcbmltcG9ydCB7IFJlc2VydmF0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9yZXNlcnZhdGlvbi9yZXNlcnZhdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmVzZXJ2YXRpb25Nb2RhbENvbXBvbmVudCB9IGZyb20gJy4vcmVzZXJ2YXRpb25tb2RhbC9yZXNlcnZhdGlvbm1vZGFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb21tZW50Q29tcG9uZW50IH0gZnJvbSAnLi9jb21tZW50L2NvbW1lbnQuY29tcG9uZW50JztcbmltcG9ydCB7IFVzZXJBdXRoQ29tcG9uZW50IH0gZnJvbSBcIi4vdXNlcmF1dGgvdXNlcmF1dGguY29tcG9uZW50XCI7XG5cbmltcG9ydCB7IERpc2hTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9kaXNoLnNlcnZpY2UnO1xuaW1wb3J0IHsgUHJvbW90aW9uU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvcHJvbW90aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgTGVhZGVyU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvbGVhZGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgRmF2b3JpdGVTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9mYXZvcml0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IFByb2Nlc3NIVFRQTXNnU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvcHJvY2Vzcy1odHRwbXNnLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ291Y2hiYXNlU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvY291Y2hiYXNlLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBiYXNlVVJMIH0gZnJvbSAnLi9zaGFyZWQvYmFzZXVybCc7XG5cbi8vIFVuY29tbWVudCBhbmQgYWRkIHRvIE5nTW9kdWxlIGltcG9ydHMgaWYgeW91IG5lZWQgdG8gdXNlIHR3by13YXkgYmluZGluZ1xuLy8gaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcblxuLy8gVW5jb21tZW50IGFuZCBhZGQgdG8gTmdNb2R1bGUgaW1wb3J0cyBpZiB5b3UgbmVlZCB0byB1c2UgdGhlIEh0dHBDbGllbnQgd3JhcHBlclxuLy8gaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cENsaWVudE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwLWNsaWVudFwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGJvb3RzdHJhcDogW1xuICAgICAgICBBcHBDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICBBcHBSb3V0aW5nTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlLFxuICAgICAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgICAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgICAgICBUTlNGb250SWNvbk1vZHVsZS5mb3JSb290KHtcbiAgICAgICAgICAgICdmYSc6ICcuL2ZvbnRzL2ZvbnQtYXdlc29tZS5taW4uY3NzJ1xuICAgICAgICB9KVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFwcENvbXBvbmVudCxcbiAgICAgICAgSG9tZUNvbXBvbmVudCxcbiAgICAgICAgQ29udGFjdENvbXBvbmVudCxcbiAgICAgICAgTWVudUNvbXBvbmVudCxcbiAgICAgICAgRGlzaGRldGFpbENvbXBvbmVudCxcbiAgICAgICAgQWJvdXRDb21wb25lbnQsXG4gICAgICAgIEZhdm9yaXRlc0NvbXBvbmVudCxcbiAgICAgICAgUmVzZXJ2YXRpb25Db21wb25lbnQsXG4gICAgICAgIFJlc2VydmF0aW9uTW9kYWxDb21wb25lbnQsXG4gICAgICAgIENvbW1lbnRDb21wb25lbnQsXG4gICAgICAgIFVzZXJBdXRoQ29tcG9uZW50XG4gICAgXSxcbiAgICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgICAgICAgUmVzZXJ2YXRpb25Nb2RhbENvbXBvbmVudCxcbiAgICAgICAgQ29tbWVudENvbXBvbmVudFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHsgcHJvdmlkZTogJ2Jhc2VVUkwnLCB1c2VWYWx1ZTogYmFzZVVSTCB9LFxuICAgICAgICBEaXNoU2VydmljZSxcbiAgICAgICAgUHJvbW90aW9uU2VydmljZSxcbiAgICAgICAgTGVhZGVyU2VydmljZSxcbiAgICAgICAgRmF2b3JpdGVTZXJ2aWNlLFxuICAgICAgICBDb3VjaGJhc2VTZXJ2aWNlLFxuICAgICAgICBQcm9jZXNzSFRUUE1zZ1NlcnZpY2VcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG4vKlxuUGFzcyB5b3VyIGFwcGxpY2F0aW9uIG1vZHVsZSB0byB0aGUgYm9vdHN0cmFwTW9kdWxlIGZ1bmN0aW9uIGxvY2F0ZWQgaW4gbWFpbi50cyB0byBzdGFydCB5b3VyIGFwcFxuKi9cbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XG4iXX0=