import { Component, OnInit, Inject, ViewContainerRef } from '@angular/core';

import { Dish } from '../shared/dish';
import { Comment } from '../shared/comment';

import { DishService } from '../services/dish.service';
import { FavoriteService } from '../services/favorite.service';
import { TNSFontIconService } from 'nativescript-ngx-fonticon';

import { ActivatedRoute, Params } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router';
import { ModalDialogOptions, ModalDialogService } from "nativescript-angular";
import { switchMap } from 'rxjs/operators';

import { Toasty } from 'nativescript-toasty';
import { action } from "tns-core-modules/ui/dialogs";

import {CommentComponent} from "../comment/comment.component";

@Component({
  selector: 'app-dishdetail',
    moduleId: module.id,
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.css']
})
export class DishdetailComponent implements OnInit {

  dish: Dish;
  comment: Comment;
  avgstars: string;
  numcomments: number;
  favorite: boolean = false;
  errMess: string;

  constructor(private dishservice: DishService,
    private favoriteservice: FavoriteService,
    private fonticon: TNSFontIconService,
    private route: ActivatedRoute,
    private routerExtensions: RouterExtensions,
    private modalDialogService: ModalDialogService,
    private vcRef: ViewContainerRef,
    @Inject('baseURL') private baseURL) { }

  ngOnInit() {

    this.route.params
      .pipe(switchMap((params: Params) => this.dishservice.getDish(params['id'])))
      .subscribe(dish => {
          this.dish = dish;
          this.favorite = this.favoriteservice.isFavorite(this.dish.id);
          this.numcomments = this.dish.comments.length;

          let total = 0;
          this.dish.comments.forEach(comment => total += comment.rating);
          this.avgstars = (total/this.numcomments).toFixed(2);
          },
          errmess => { this.dish = null; this.errMess = <any>errmess; });
  }

  addToFavorites() {
      if (!this.favorite) {
          console.log('Adding to Favorites', this.dish.id);
          this.favorite = this.favoriteservice.addFavorite(this.dish.id);
          const toast =
              new Toasty('Added Dish ' + this.dish.id, 'short', 'bottom');
          toast.show();
      }
  }

  presentActionSheet() {

      let options = {
          title: "Actions",
          message: "Choose your action",
          cancelButtonText: "Cancel",
          actions: ["Add to Favorites", "Add Comment"]
      };

      action(options).then((result) => {
          if (result == 'Add to Favorites') {
              this.addToFavorites();
          } else {
              this.showCommentForm();
          }
      });
  }

  goBack(): void {
    this.routerExtensions.back();
  }

  showCommentForm(): void {
      let options: ModalDialogOptions = {
          viewContainerRef: this.vcRef,
          fullscreen: false
      };
      this.modalDialogService.showModal(CommentComponent, options)
          .then((result: any) => {
              const d = new Date();
              const n = d.toISOString();
              this.comment = {
                  author: result.author,
                  comment: result.comment,
                  rating: result.rating,
                  date: n
              };
              let total = 0;
              this.dish.comments.push(this.comment);
              this.numcomments = this.dish.comments.length;
              this.dish.comments.forEach(comment => total += comment.rating);
              this.avgstars = (total/this.numcomments).toFixed(2);
          });
    }
}
