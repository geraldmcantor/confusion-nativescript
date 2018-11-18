import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TextField} from "tns-core-modules/ui/text-field";
import { Slider } from "tns-core-modules/ui/slider";
import { ModalDialogParams } from 'nativescript-angular/modal-dialog';
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as enums from "ui/enums";
import * as app from "application";

@Component({
    moduleId: module.id,
    templateUrl: './comment.component.html'
})
export class CommentComponent implements OnInit {

    comment: FormGroup;

    constructor(private formBuilder: FormBuilder,
                private params: ModalDialogParams) {
        this.comment = this.formBuilder.group({
            rating: [1, Validators.required],
            author: ['', Validators.required],
            comment: ['', Validators.required]
        });
    }

    ngOnInit() {

    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    onAuthorChange(args) {
        let textField = <TextField>args.object;
        this.comment.patchValue({author: textField.text});
    }

    onRatingChange(args) {
        let slider = <Slider>args.object;
        this.comment.patchValue({ rating: slider.value });
    }

    onCommentChange(args) {
        let textField = <TextField>args.object;
        this.comment.patchValue({comment: textField.text});
    }
        

    public submit() {
        this.params.closeCallback(this.comment.value);
    }
}
