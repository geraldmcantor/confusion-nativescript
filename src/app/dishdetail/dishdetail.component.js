"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dish_service_1 = require("../services/dish.service");
var favorite_service_1 = require("../services/favorite.service");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var nativescript_angular_1 = require("nativescript-angular");
var operators_1 = require("rxjs/operators");
var nativescript_toasty_1 = require("nativescript-toasty");
var dialogs_1 = require("tns-core-modules/ui/dialogs");
var comment_component_1 = require("../comment/comment.component");
var page_1 = require("ui/page");
var animation_1 = require("ui/animation");
var gestures_1 = require("ui/gestures");
var color_1 = require("color");
var image_source_1 = require("image-source");
var enums = require("ui/enums");
var SocialShare = require("nativescript-social-share");
var DishdetailComponent = /** @class */ (function () {
    function DishdetailComponent(dishservice, favoriteservice, fonticon, route, routerExtensions, modalDialogService, vcRef, page, baseURL) {
        this.dishservice = dishservice;
        this.favoriteservice = favoriteservice;
        this.fonticon = fonticon;
        this.route = route;
        this.routerExtensions = routerExtensions;
        this.modalDialogService = modalDialogService;
        this.vcRef = vcRef;
        this.page = page;
        this.baseURL = baseURL;
        this.favorite = false;
        this.showComments = false;
    }
    DishdetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .pipe(operators_1.switchMap(function (params) { return _this.dishservice.getDish(params['id']); }))
            .subscribe(function (dish) {
            _this.dish = dish;
            _this.favorite = _this.favoriteservice.isFavorite(_this.dish.id);
            _this.numcomments = _this.dish.comments.length;
            var total = 0;
            _this.dish.comments.forEach(function (comment) { return total += comment.rating; });
            _this.avgstars = (total / _this.numcomments).toFixed(2);
        }, function (errmess) { _this.dish = null; _this.errMess = errmess; });
    };
    DishdetailComponent.prototype.addToFavorites = function () {
        if (!this.favorite) {
            console.log('Adding to Favorites', this.dish.id);
            this.favorite = this.favoriteservice.addFavorite(this.dish.id);
            var toast = new nativescript_toasty_1.Toasty('Added Dish ' + this.dish.id, 'short', 'bottom');
            toast.show();
        }
    };
    DishdetailComponent.prototype.socialShare = function () {
        var image;
        image_source_1.fromUrl(this.baseURL + this.dish.image)
            .then(function (img) {
            image = img;
            SocialShare.shareImage(image, "How would you like to share this image?");
        })
            .catch(function () { console.log('Error loading image'); });
    };
    DishdetailComponent.prototype.presentActionSheet = function () {
        var _this = this;
        var options = {
            title: "Actions",
            message: "Choose your action",
            cancelButtonText: "Cancel",
            actions: ["Add to Favorites", "Add Comment", "Social Sharing"]
        };
        dialogs_1.action(options).then(function (result) {
            if (result == 'Add to Favorites') {
                _this.addToFavorites();
            }
            else if (result === 'Add Comment') {
                _this.showCommentForm();
            }
            else if (result === 'Social Sharing') {
                _this.socialShare();
            }
        });
    };
    DishdetailComponent.prototype.goBack = function () {
        this.routerExtensions.back();
    };
    DishdetailComponent.prototype.showCommentForm = function () {
        var _this = this;
        var options = {
            viewContainerRef: this.vcRef,
            fullscreen: false
        };
        this.modalDialogService.showModal(comment_component_1.CommentComponent, options)
            .then(function (result) {
            var d = new Date();
            var n = d.toISOString();
            _this.comment = {
                author: result.author,
                comment: result.comment,
                rating: result.rating,
                date: n
            };
            var total = 0;
            _this.dish.comments.push(_this.comment);
            _this.numcomments = _this.dish.comments.length;
            _this.dish.comments.forEach(function (comment) { return total += comment.rating; });
            _this.avgstars = (total / _this.numcomments).toFixed(2);
        });
    };
    DishdetailComponent.prototype.onSwipe = function (args) {
        if (this.dish) {
            this.cardImage = this.page.getViewById("cardImage");
            this.cardLayout = this.page.getViewById("cardLayout");
            this.commentList = this.page.getViewById("commentList");
            if (args.direction === gestures_1.SwipeDirection.up && !this.showComments) {
                this.animateUp();
            }
            else if (args.direction === gestures_1.SwipeDirection.down && this.showComments) {
                this.showComments = false;
                this.animateDown();
            }
        }
    };
    DishdetailComponent.prototype.showAndHideComments = function () {
        this.cardImage = this.page.getViewById("cardImage");
        this.cardLayout = this.page.getViewById("cardLayout");
        this.commentList = this.page.getViewById("commentList");
        if (!this.showComments) {
            this.animateUp();
        }
        else if (this.showComments) {
            this.showComments = false;
            this.animateDown();
        }
    };
    DishdetailComponent.prototype.animateUp = function () {
        var _this = this;
        var definitions = new Array();
        var a1 = {
            target: this.cardImage,
            scale: { x: 1, y: 0 },
            translate: { x: 0, y: -200 },
            opacity: 0,
            duration: 500,
            curve: enums.AnimationCurve.easeIn
        };
        definitions.push(a1);
        var a2 = {
            target: this.cardLayout,
            backgroundColor: new color_1.Color("#ffc107"),
            duration: 500,
            curve: enums.AnimationCurve.easeIn
        };
        definitions.push(a2);
        var animationSet = new animation_1.Animation(definitions);
        animationSet.play().then(function () {
            _this.showComments = true;
        })
            .catch(function (e) {
            console.log(e.message);
        });
    };
    DishdetailComponent.prototype.animateDown = function () {
        var definitions = new Array();
        var a1 = {
            target: this.cardImage,
            scale: { x: 1, y: 1 },
            translate: { x: 0, y: 0 },
            opacity: 1,
            duration: 500,
            curve: enums.AnimationCurve.easeIn
        };
        definitions.push(a1);
        var a2 = {
            target: this.cardLayout,
            backgroundColor: new color_1.Color("#ffffff"),
            duration: 500,
            curve: enums.AnimationCurve.easeIn
        };
        definitions.push(a2);
        var animationSet = new animation_1.Animation(definitions);
        animationSet.play().then(function () {
        })
            .catch(function (e) {
            console.log(e.message);
        });
    };
    DishdetailComponent = __decorate([
        core_1.Component({
            selector: 'app-dishdetail',
            moduleId: module.id,
            templateUrl: './dishdetail.component.html',
            styleUrls: ['./dishdetail.component.css']
        }),
        __param(8, core_1.Inject('baseURL')),
        __metadata("design:paramtypes", [dish_service_1.DishService,
            favorite_service_1.FavoriteService,
            nativescript_ngx_fonticon_1.TNSFontIconService,
            router_1.ActivatedRoute,
            router_2.RouterExtensions,
            nativescript_angular_1.ModalDialogService,
            core_1.ViewContainerRef,
            page_1.Page, Object])
    ], DishdetailComponent);
    return DishdetailComponent;
}());
exports.DishdetailComponent = DishdetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzaGRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaXNoZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE0RTtBQUs1RSx5REFBdUQ7QUFDdkQsaUVBQStEO0FBQy9ELHVFQUErRDtBQUUvRCwwQ0FBeUQ7QUFDekQsc0RBQStEO0FBQy9ELDZEQUE4RTtBQUM5RSw0Q0FBMkM7QUFFM0MsMkRBQTZDO0FBQzdDLHVEQUFxRDtBQUVyRCxrRUFBOEQ7QUFFOUQsZ0NBQStCO0FBQy9CLDBDQUE4RDtBQUU5RCx3Q0FBb0U7QUFDcEUsK0JBQThCO0FBQzlCLDZDQUFvRDtBQUVwRCxnQ0FBa0M7QUFDbEMsdURBQXlEO0FBUXpEO0lBYUUsNkJBQW9CLFdBQXdCLEVBQ2xDLGVBQWdDLEVBQ2hDLFFBQTRCLEVBQzVCLEtBQXFCLEVBQ3JCLGdCQUFrQyxFQUNsQyxrQkFBc0MsRUFDdEMsS0FBdUIsRUFDdkIsSUFBVSxFQUNTLE9BQU87UUFSaEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDbEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLGFBQVEsR0FBUixRQUFRLENBQW9CO1FBQzVCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0QyxVQUFLLEdBQUwsS0FBSyxDQUFrQjtRQUN2QixTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1MsWUFBTyxHQUFQLE9BQU8sQ0FBQTtRQWZwQyxhQUFRLEdBQVksS0FBSyxDQUFDO1FBRTFCLGlCQUFZLEdBQVksS0FBSyxDQUFDO0lBYVUsQ0FBQztJQUV6QyxzQ0FBUSxHQUFSO1FBQUEsaUJBY0M7UUFaQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU07YUFDZCxJQUFJLENBQUMscUJBQVMsQ0FBQyxVQUFDLE1BQWMsSUFBSyxPQUFBLEtBQUks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RTlDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUM7UUFDekIsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQUMsQ0FBQztZQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQXJNVSxtQkFBbUI7UUFOL0IsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxnQkFBZ0I7WUFDeEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ3JCLFdBQVcsRUFBRSw2QkFBNkI7WUFDMUMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7U0FDMUMsQ0FBQztRQXNCRyxXQUFBLGFBQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQTt5Q0FSYSwwQkFBVztZQUNqQixrQ0FBZTtZQUN0Qiw4Q0FBa0I7WUFDckIsdUJBQWM7WUFDSCx5QkFBZ0I7WUFDZCx5Q0FBa0I7WUFDL0IsdUJBQWdCO1lBQ2pCLFdBQUk7T0FwQlQsbUJBQW1CLENBc00vQjtJQUFELDBCQUFDO0NBQUEsQUF0TUQsSUFzTUM7QUF0TVksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEluamVjdCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEaXNoIH0gZnJvbSAnLi4vc2hhcmVkL2Rpc2gnO1xuaW1wb3J0IHsgQ29tbWVudCB9IGZyb20gJy4uL3NoYXJlZC9jb21tZW50JztcblxuaW1wb3J0IHsgRGlzaFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9kaXNoLnNlcnZpY2UnO1xuaW1wb3J0IHsgRmF2b3JpdGVTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvZmF2b3JpdGUuc2VydmljZSc7XG5pbXBvcnQgeyBUTlNGb250SWNvblNlcnZpY2UgfSBmcm9tICduYXRpdmVzY3JpcHQtbmd4LWZvbnRpY29uJztcblxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE1vZGFsRGlhbG9nT3B0aW9ucywgTW9kYWxEaWFsb2dTZXJ2aWNlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyXCI7XG5pbXBvcnQgeyBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFRvYXN0eSB9IGZyb20gJ25hdGl2ZXNjcmlwdC10b2FzdHknO1xuaW1wb3J0IHsgYWN0aW9uIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiO1xuXG5pbXBvcnQge0NvbW1lbnRDb21wb25lbnR9IGZyb20gXCIuLi9jb21tZW50L2NvbW1lbnQuY29tcG9uZW50XCI7XG5cbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHsgQW5pbWF0aW9uLCBBbmltYXRpb25EZWZpbml0aW9uIH0gZnJvbSBcInVpL2FuaW1hdGlvblwiO1xuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJ1aS9jb3JlL3ZpZXdcIjtcbmltcG9ydCB7IFN3aXBlR2VzdHVyZUV2ZW50RGF0YSwgU3dpcGVEaXJlY3Rpb24gfSBmcm9tIFwidWkvZ2VzdHVyZXNcIjtcbmltcG9ydCB7IENvbG9yIH0gZnJvbSAnY29sb3InO1xuaW1wb3J0IHsgSW1hZ2VTb3VyY2UsIGZyb21VcmwgfSBmcm9tIFwiaW1hZ2Utc291cmNlXCI7XG5cbmltcG9ydCAqIGFzIGVudW1zIGZyb20gXCJ1aS9lbnVtc1wiO1xuaW1wb3J0ICogYXMgU29jaWFsU2hhcmUgZnJvbSBcIm5hdGl2ZXNjcmlwdC1zb2NpYWwtc2hhcmVcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWRpc2hkZXRhaWwnLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHRlbXBsYXRlVXJsOiAnLi9kaXNoZGV0YWlsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZGlzaGRldGFpbC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRGlzaGRldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgZGlzaDogRGlzaDtcbiAgY29tbWVudDogQ29tbWVudDtcbiAgYXZnc3RhcnM6IHN0cmluZztcbiAgbnVtY29tbWVudHM6IG51bWJlcjtcbiAgZmF2b3JpdGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgZXJyTWVzczogc3RyaW5nO1xuICBzaG93Q29tbWVudHM6IGJvb2xlYW4gPSBmYWxzZTtcbiAgY2FyZEltYWdlOiBWaWV3O1xuICBjb21tZW50TGlzdDogVmlldztcbiAgY2FyZExheW91dDogVmlldztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRpc2hzZXJ2aWNlOiBEaXNoU2VydmljZSxcbiAgICBwcml2YXRlIGZhdm9yaXRlc2VydmljZTogRmF2b3JpdGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgZm9udGljb246IFROU0ZvbnRJY29uU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgcHJpdmF0ZSBtb2RhbERpYWxvZ1NlcnZpY2U6IE1vZGFsRGlhbG9nU2VydmljZSxcbiAgICBwcml2YXRlIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHByaXZhdGUgcGFnZTogUGFnZSxcbiAgICBASW5qZWN0KCdiYXNlVVJMJykgcHJpdmF0ZSBiYXNlVVJMKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcblxuICAgIHRoaXMucm91dGUucGFyYW1zXG4gICAgICAucGlwZShzd2l0Y2hNYXAoKHBhcmFtczogUGFyYW1zKSA9PiB0aGlzLmRpc2hzZXJ2aWNlLmdldERpc2gocGFyYW1zWydpZCddKSkpXG4gICAgICAuc3Vic2NyaWJlKGRpc2ggPT4ge1xuICAgICAgICAgIHRoaXMuZGlzaCA9IGRpc2g7XG4gICAgICAgICAgdGhpcy5mYXZvcml0ZSA9IHRoaXMuZmF2b3JpdGVzZXJ2aWNlLmlzRmF2b3JpdGUodGhpcy5kaXNoLmlkKTtcbiAgICAgICAgICB0aGlzLm51bWNvbW1lbnRzID0gdGhpcy5kaXNoLmNvbW1lbnRzLmxlbmd0aDtcblxuICAgICAgICAgIGxldCB0b3RhbCA9IDA7XG4gICAgICAgICAgdGhpcy5kaXNoLmNvbW1lbnRzLmZvckVhY2goY29tbWVudCA9PiB0b3RhbCArPSBjb21tZW50LnJhdGluZyk7XG4gICAgICAgICAgdGhpcy5hdmdzdGFycyA9ICh0b3RhbC90aGlzLm51bWNvbW1lbnRzKS50b0ZpeGVkKDIpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZXJybWVzcyA9PiB7IHRoaXMuZGlzaCA9IG51bGw7IHRoaXMuZXJyTWVzcyA9IDxhbnk+ZXJybWVzczsgfSk7XG4gIH1cblxuICBhZGRUb0Zhdm9yaXRlcygpIHtcbiAgICAgIGlmICghdGhpcy5mYXZvcml0ZSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdBZGRpbmcgdG8gRmF2b3JpdGVzJywgdGhpcy5kaXNoLmlkKTtcbiAgICAgICAgICB0aGlzLmZhdm9yaXRlID0gdGhpcy5mYXZvcml0ZXNlcnZpY2UuYWRkRmF2b3JpdGUodGhpcy5kaXNoLmlkKTtcbiAgICAgICAgICBjb25zdCB0b2FzdCA9XG4gICAgICAgICAgICAgIG5ldyBUb2FzdHkoJ0FkZGVkIERpc2ggJyArIHRoaXMuZGlzaC5pZCwgJ3Nob3J0JywgJ2JvdHRvbScpO1xuICAgICAgICAgIHRvYXN0LnNob3coKTtcbiAgICAgIH1cbiAgfVxuXG4gIHNvY2lhbFNoYXJlKCkge1xuICAgIGxldCBpbWFnZTogSW1hZ2VTb3VyY2U7XG5cbiAgICBmcm9tVXJsKHRoaXMuYmFzZVVSTCArIHRoaXMuZGlzaC5pbWFnZSlcbiAgICAgLnRoZW4oKGltZzogSW1hZ2VTb3VyY2UpID0+IHtcbiAgICAgICBpbWFnZSA9IGltZzsgXG4gICAgICAgIFNvY2lhbFNoYXJlLnNoYXJlSW1hZ2UoaW1hZ2UsIFwiSG93IHdvdWxkIHlvdSBsaWtlIHRvIHNoYXJlIHRoaXMgaW1hZ2U/XCIpXG4gICAgICB9KVxuICAgICAuY2F0Y2goKCk9PiB7IGNvbnNvbGUubG9nKCdFcnJvciBsb2FkaW5nIGltYWdlJyk7IH0pO1xuXG4gIH1cblxuICBwcmVzZW50QWN0aW9uU2hlZXQoKSB7XG5cbiAgICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgICAgIHRpdGxlOiBcIkFjdGlvbnNcIixcbiAgICAgICAgICBtZXNzYWdlOiBcIkNob29zZSB5b3VyIGFjdGlvblwiLFxuICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiQ2FuY2VsXCIsXG4gICAgICAgICAgYWN0aW9uczogW1wiQWRkIHRvIEZhdm9yaXRlc1wiLCBcIkFkZCBDb21tZW50XCIsIFwiU29jaWFsIFNoYXJpbmdcIl1cbiAgICAgIH07XG5cbiAgICAgIGFjdGlvbihvcHRpb25zKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICBpZiAocmVzdWx0ID09ICdBZGQgdG8gRmF2b3JpdGVzJykge1xuICAgICAgICAgICAgICB0aGlzLmFkZFRvRmF2b3JpdGVzKCk7XG4gICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQgPT09ICdBZGQgQ29tbWVudCcpIHtcbiAgICAgICAgICAgICAgdGhpcy5zaG93Q29tbWVudEZvcm0oKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdCA9PT0gJ1NvY2lhbCBTaGFyaW5nJykge1xuICAgICAgICAgICAgICB0aGlzLnNvY2lhbFNoYXJlKCk7XG4gICAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICBnb0JhY2soKTogdm9pZCB7XG4gICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLmJhY2soKTtcbiAgfVxuXG4gIHNob3dDb21tZW50Rm9ybSgpOiB2b2lkIHtcbiAgICAgIGxldCBvcHRpb25zOiBNb2RhbERpYWxvZ09wdGlvbnMgPSB7XG4gICAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52Y1JlZixcbiAgICAgICAgICBmdWxsc2NyZWVuOiBmYWxzZVxuICAgICAgfTtcbiAgICAgIHRoaXMubW9kYWxEaWFsb2dTZXJ2aWNlLnNob3dNb2RhbChDb21tZW50Q29tcG9uZW50LCBvcHRpb25zKVxuICAgICAgICAgIC50aGVuKChyZXN1bHQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBkID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgICAgY29uc3QgbiA9IGQudG9JU09TdHJpbmcoKTtcbiAgICAgICAgICAgICAgdGhpcy5jb21tZW50ID0ge1xuICAgICAgICAgICAgICAgICAgYXV0aG9yOiByZXN1bHQuYXV0aG9yLFxuICAgICAgICAgICAgICAgICAgY29tbWVudDogcmVzdWx0LmNvbW1lbnQsXG4gICAgICAgICAgICAgICAgICByYXRpbmc6IHJlc3VsdC5yYXRpbmcsXG4gICAgICAgICAgICAgICAgICBkYXRlOiBuXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIGxldCB0b3RhbCA9IDA7XG4gICAgICAgICAgICAgIHRoaXMuZGlzaC5jb21tZW50cy5wdXNoKHRoaXMuY29tbWVudCk7XG4gICAgICAgICAgICAgIHRoaXMubnVtY29tbWVudHMgPSB0aGlzLmRpc2guY29tbWVudHMubGVuZ3RoO1xuICAgICAgICAgICAgICB0aGlzLmRpc2guY29tbWVudHMuZm9yRWFjaChjb21tZW50ID0+IHRvdGFsICs9IGNvbW1lbnQucmF0aW5nKTtcbiAgICAgICAgICAgICAgdGhpcy5hdmdzdGFycyA9ICh0b3RhbC90aGlzLm51bWNvbW1lbnRzKS50b0ZpeGVkKDIpO1xuICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uU3dpcGUoYXJnczogU3dpcGVHZXN0dXJlRXZlbnREYXRhKSB7XG5cbiAgICBpZiAodGhpcy5kaXNoKSB7XG4gICAgICB0aGlzLmNhcmRJbWFnZSA9IDxWaWV3PnRoaXMucGFnZS5nZXRWaWV3QnlJZDxWaWV3PihcImNhcmRJbWFnZVwiKTtcbiAgICAgIHRoaXMuY2FyZExheW91dCA9IDxWaWV3PnRoaXMucGFnZS5nZXRWaWV3QnlJZDxWaWV3PihcImNhcmRMYXlvdXRcIik7XG4gICAgICB0aGlzLmNvbW1lbnRMaXN0ID0gPFZpZXc+dGhpcy5wYWdlLmdldFZpZXdCeUlkPFZpZXc+KFwiY29tbWVudExpc3RcIik7XG5cbiAgICAgIGlmIChhcmdzLmRpcmVjdGlvbiA9PT0gU3dpcGVEaXJlY3Rpb24udXAgJiYgIXRoaXMuc2hvd0NvbW1lbnRzICkge1xuICAgICAgICB0aGlzLmFuaW1hdGVVcCgpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoYXJncy5kaXJlY3Rpb24gPT09IFN3aXBlRGlyZWN0aW9uLmRvd24gJiYgdGhpcy5zaG93Q29tbWVudHMgKSB7XG4gICAgICAgIHRoaXMuc2hvd0NvbW1lbnRzID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYW5pbWF0ZURvd24oKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIHNob3dBbmRIaWRlQ29tbWVudHMoKSB7XG4gICAgICB0aGlzLmNhcmRJbWFnZSA9IDxWaWV3PnRoaXMucGFnZS5nZXRWaWV3QnlJZDxWaWV3PihcImNhcmRJbWFnZVwiKTtcbiAgICAgIHRoaXMuY2FyZExheW91dCA9IDxWaWV3PnRoaXMucGFnZS5nZXRWaWV3QnlJZDxWaWV3PihcImNhcmRMYXlvdXRcIik7XG4gICAgICB0aGlzLmNvbW1lbnRMaXN0ID0gPFZpZXc+dGhpcy5wYWdlLmdldFZpZXdCeUlkPFZpZXc+KFwiY29tbWVudExpc3RcIik7XG5cbiAgICAgIGlmICghdGhpcy5zaG93Q29tbWVudHMgKSB7XG4gICAgICAgIHRoaXMuYW5pbWF0ZVVwKCk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmICh0aGlzLnNob3dDb21tZW50cyApIHtcbiAgICAgICAgdGhpcy5zaG93Q29tbWVudHMgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hbmltYXRlRG93bigpO1xuICAgICAgfVxuICB9XG5cbiAgYW5pbWF0ZVVwKCkge1xuICAgIGxldCBkZWZpbml0aW9ucyA9IG5ldyBBcnJheTxBbmltYXRpb25EZWZpbml0aW9uPigpO1xuICAgIGxldCBhMTogQW5pbWF0aW9uRGVmaW5pdGlvbiA9IHtcbiAgICAgICAgdGFyZ2V0OiB0aGlzLmNhcmRJbWFnZSxcbiAgICAgICAgc2NhbGU6IHsgeDogMSwgeTogMCB9LFxuICAgICAgICB0cmFuc2xhdGU6IHsgeDogMCwgeTogLTIwMCB9LFxuICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICBkdXJhdGlvbjogNTAwLFxuICAgICAgICBjdXJ2ZTogZW51bXMuQW5pbWF0aW9uQ3VydmUuZWFzZUluXG4gICAgfTtcbiAgICBkZWZpbml0aW9ucy5wdXNoKGExKTtcblxuICAgIGxldCBhMjogQW5pbWF0aW9uRGVmaW5pdGlvbiA9IHtcbiAgICAgICAgdGFyZ2V0OiB0aGlzLmNhcmRMYXlvdXQsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogbmV3IENvbG9yKFwiI2ZmYzEwN1wiKSxcbiAgICAgICAgZHVyYXRpb246IDUwMCxcbiAgICAgICAgY3VydmU6IGVudW1zLkFuaW1hdGlvbkN1cnZlLmVhc2VJblxuICAgIH07XG4gICAgZGVmaW5pdGlvbnMucHVzaChhMik7XG5cbiAgICBsZXQgYW5pbWF0aW9uU2V0ID0gbmV3IEFuaW1hdGlvbihkZWZpbml0aW9ucyk7XG5cbiAgICBhbmltYXRpb25TZXQucGxheSgpLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5zaG93Q29tbWVudHMgPSB0cnVlO1xuICAgIH0pXG4gICAgLmNhdGNoKChlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUubWVzc2FnZSk7XG4gICAgfSk7XG4gIH0gXG5cbiAgYW5pbWF0ZURvd24oKSB7XG4gICAgbGV0IGRlZmluaXRpb25zID0gbmV3IEFycmF5PEFuaW1hdGlvbkRlZmluaXRpb24+KCk7XG4gICAgbGV0IGExOiBBbmltYXRpb25EZWZpbml0aW9uID0ge1xuICAgICAgICB0YXJnZXQ6IHRoaXMuY2FyZEltYWdlLFxuICAgICAgICBzY2FsZTogeyB4OiAxLCB5OiAxIH0sXG4gICAgICAgIHRyYW5zbGF0ZTogeyB4OiAwLCB5OiAwIH0sXG4gICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgIGR1cmF0aW9uOiA1MDAsXG4gICAgICAgIGN1cnZlOiBlbnVtcy5BbmltYXRpb25DdXJ2ZS5lYXNlSW5cbiAgICB9O1xuICAgIGRlZmluaXRpb25zLnB1c2goYTEpO1xuXG4gICAgbGV0IGEyOiBBbmltYXRpb25EZWZpbml0aW9uID0ge1xuICAgICAgICB0YXJnZXQ6IHRoaXMuY2FyZExheW91dCxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBuZXcgQ29sb3IoXCIjZmZmZmZmXCIpLFxuICAgICAgICBkdXJhdGlvbjogNTAwLFxuICAgICAgICBjdXJ2ZTogZW51bXMuQW5pbWF0aW9uQ3VydmUuZWFzZUluXG4gICAgfTtcbiAgICBkZWZpbml0aW9ucy5wdXNoKGEyKTtcblxuICAgIGxldCBhbmltYXRpb25TZXQgPSBuZXcgQW5pbWF0aW9uKGRlZmluaXRpb25zKTtcblxuICAgIGFuaW1hdGlvblNldC5wbGF5KCkudGhlbigoKSA9PiB7XG4gICAgfSlcbiAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZS5tZXNzYWdlKTtcbiAgICB9KTtcbiAgfSBcbn1cbiJdfQ==