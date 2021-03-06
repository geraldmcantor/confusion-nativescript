import { Component, OnInit, ChangeDetectorRef, ViewContainerRef } from '@angular/core';
import { TextField } from 'ui/text-field';
import { Switch } from 'ui/switch';
import { Validators, FormBuilder, FormGroup} from '@angular/forms';

import { CouchbaseService } from '../services/couchbase.service';

import { ModalDialogService, ModalDialogOptions } from "nativescript-angular/modal-dialog";
import { ReservationModalComponent } from "../reservationmodal/reservationmodal.component";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { Animation, AnimationDefinition } from "ui/animation";
import { View } from "tns-core-modules/ui/core/view";
import { Page } from "tns-core-modules/ui/page";
import * as enums from "ui/enums";
import * as app from "application";

@Component({
    selector: 'app-reservation',
    moduleId: module.id,
    templateUrl: './reservation.component.html',
    styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

    reservation: FormGroup;
    reservationView: View;
    formView: View;
    persistedView: View;
    showForm: boolean = true;

    constructor(private formBuilder: FormBuilder,
                private page: Page,
                private modalService: ModalDialogService, 
                private couchbaseservice: CouchbaseService,
                private vcRef: ViewContainerRef) {

            this.reservation = this.formBuilder.group({
                guests: 3,
                smoking: false,
                dateTime: [new Date(), Validators.required]
            });
    }

    ngOnInit() {

    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    createModalView(args) {

        let options: ModalDialogOptions = {
            viewContainerRef: this.vcRef,
            context: args,
            fullscreen: false
        };

        this.modalService.showModal(ReservationModalComponent, options)
            .then((result: any) => {
                if (args === "guest") {
                    this.reservation.patchValue({guests: result});
                }
                else if (args === "date-time") {
                    this.reservation.patchValue({ dateTime: result});
                }
            });

    }

    onSmokingChecked(args) {
        let smokingSwitch = <Switch>args.object;
        if (smokingSwitch.checked) {
            this.reservation.patchValue({ smoking: true });
        }
        else {
            this.reservation.patchValue({ smoking: false });
        }
    }

    onGuestChange(args) {
        let textField = <TextField>args.object;

        this.reservation.patchValue({ guests: textField.text});
    }

    onDateTimeChange(args) {
        let textField = <TextField>args.object;

        this.reservation.patchValue({ dateTime: textField.text});
    }

    onSubmit() {
        console.log(JSON.stringify(this.reservation.value));
        this.formView = <View>this.page.getViewById<View>("formView");
        this.persistedView = <View>this.page.getViewById<View>("persistedView");
        this.animateFormView();
    }

    animateFormView() {
        this.formView.animate({
            scale: {x: 0, y: 0},
            opacity: 0,
            duration: 500,
            curve: enums.AnimationCurve.easeIn
        }).then(() => {
            this.persistedView.animate({
                scale: {x: 0, y: 0},
                opacity: 0,
                duration: 0,
            }).then(() => {
                this.showForm = false;
                this.persistedView.animate({
                    scale: {x: 1, y: 1},
                    opacity: 1,
                    duration: 500,
                    curve: enums.AnimationCurve.easeOut
                });
            });
        });
    }

    saveReservation() {
        let reservations = this.couchbaseservice.getDocument('reservations');
        if (reservations == null) {
            console.log('First reservation. Creating reservations document.');
            this.couchbaseservice.createDocument({"reservations": []}, 'reservations');
            let reservations = this.couchbaseservice.getDocument('reservations');
        } else {
            console.log('Reservations exist. Adding this reservation to list');
        }
        this.couchbaseservice.updateDocument(
            'reservations', {"reservations": this.reservation.value});
    }
}
