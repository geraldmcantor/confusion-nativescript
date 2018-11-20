import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { TNSFontIconModule } from 'nativescript-ngx-fonticon';
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";

import { HttpClientModule } from '@angular/common/http';
import { NativeScriptHttpModule } from 'nativescript-angular/http';
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
import { AboutComponent } from './about/about.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ReservationModalComponent } from './reservationmodal/reservationmodal.component';
import { CommentComponent } from './comment/comment.component';
import { UserAuthComponent } from "./userauth/userauth.component";

import { DishService } from './services/dish.service';
import { PromotionService } from './services/promotion.service';
import { LeaderService } from './services/leader.service';
import { FavoriteService } from './services/favorite.service';
import { ProcessHTTPMsgService } from './services/process-httpmsg.service';
import { CouchbaseService } from './services/couchbase.service';

import { baseURL } from './shared/baseurl';

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptHttpModule,
        HttpClientModule,
        NativeScriptUISideDrawerModule,
        NativeScriptUIListViewModule,
        NativeScriptFormsModule,
        ReactiveFormsModule,
        TNSFontIconModule.forRoot({
            'fa': './fonts/font-awesome.min.css'
        })
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        ContactComponent,
        MenuComponent,
        DishdetailComponent,
        AboutComponent,
        FavoritesComponent,
        ReservationComponent,
        ReservationModalComponent,
        CommentComponent,
        UserAuthComponent
    ],
    entryComponents: [
        ReservationModalComponent,
        CommentComponent
    ],
    providers: [
        { provide: 'baseURL', useValue: baseURL },
        DishService,
        PromotionService,
        LeaderService,
        FavoriteService,
        CouchbaseService,
        ProcessHTTPMsgService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
