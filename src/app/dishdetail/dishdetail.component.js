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
var DishdetailComponent = /** @class */ (function () {
    function DishdetailComponent(dishservice, favoriteservice, fonticon, route, routerExtensions, modalDialogService, vcRef, baseURL) {
        this.dishservice = dishservice;
        this.favoriteservice = favoriteservice;
        this.fonticon = fonticon;
        this.route = route;
        this.routerExtensions = routerExtensions;
        this.modalDialogService = modalDialogService;
        this.vcRef = vcRef;
        this.baseURL = baseURL;
        this.favorite = false;
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
    DishdetailComponent.prototype.presentActionSheet = function () {
        var _this = this;
        var options = {
            title: "Actions",
            message: "Choose your action",
            cancelButtonText: "Cancel",
            actions: ["Add to Favorites", "Add Comment"]
        };
        dialogs_1.action(options).then(function (result) {
            if (result == 'Add to Favorites') {
                _this.addToFavorites();
            }
            else {
                _this.showCommentForm();
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
    DishdetailComponent = __decorate([
        core_1.Component({
            selector: 'app-dishdetail',
            moduleId: module.id,
            templateUrl: './dishdetail.component.html',
            styleUrls: ['./dishdetail.component.css']
        }),
        __param(7, core_1.Inject('baseURL')),
        __metadata("design:paramtypes", [dish_service_1.DishService,
            favorite_service_1.FavoriteService,
            nativescript_ngx_fonticon_1.TNSFontIconService,
            router_1.ActivatedRoute,
            router_2.RouterExtensions,
            nativescript_angular_1.ModalDialogService,
            core_1.ViewContainerRef, Object])
    ], DishdetailComponent);
    return DishdetailComponent;
}());
exports.DishdetailComponent = DishdetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzaGRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaXNoZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE0RTtBQUs1RSx5REFBdUQ7QUFDdkQsaUVBQStEO0FBQy9ELHVFQUErRDtBQUUvRCwwQ0FBeUQ7QUFDekQsc0RBQStEO0FBQy9ELDZEQUE4RTtBQUM5RSw0Q0FBMkM7QUFFM0MsMkRBQTZDO0FBQzdDLHVEQUFxRDtBQUVyRCxrRUFBOEQ7QUFROUQ7SUFTRSw2QkFBb0IsV0FBd0IsRUFDbEMsZUFBZ0MsRUFDaEMsUUFBNEIsRUFDNUIsS0FBcUIsRUFDckIsZ0JBQWtDLEVBQ2xDLGtCQUFzQyxFQUN0QyxLQUF1QixFQUNKLE9BQU87UUFQaEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDbEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLGFBQVEsR0FBUixRQUFRLENBQW9CO1FBQzVCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0QyxVQUFLLEdBQUwsS0FBSyxDQUFrQjtRQUNKLFlBQU8sR0FBUCxPQUFPLENBQUE7UUFWcEMsYUFBUSxHQUFZLEtBQUssQ0FBQztJQVVjLENBQUM7SUFFekMsc0NBQVEsR0FBUjtRQUFBLGlCQWNDO1FBWkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNO2FBQ2QsSUFBSSxDQUFDLHFCQUFTLENBQUMsVUFBQyxNQUFjLElBQUssT0FBQSxLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBdEMsQ0FBc0MsQ0FBQyxDQUFDO2FBQzNFLFNBQVMsQ0FBQyxVQUFBLElBQUk7WUFDWCxLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNqQixLQUFJLENBQUMsUUFBUSxH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QztZQUNGLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztZQUNkLEtBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDdEMsS0FBSSxDQUFDLFdBQVcsR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFDN0MsS0FBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsS0FBSyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQXZCLENBQXVCLENBQUMsQ0FBQztZQUMvRCxLQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsS0FBSyxHQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEQsQ0FBQyxDQUFDLENBQUM7SUFDVCxDQUFDO0lBdkZRLG1CQUFtQjtRQU4vQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGdCQUFnQjtZQUN4QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDckIsV0FBVyxFQUFFLDZCQUE2QjtZQUMxQyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztTQUMxQyxDQUFDO1FBaUJHLFdBQUEsYUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFBO3lDQVBhLDBCQUFXO1lBQ2pCLGtDQUFlO1lBQ3RCLDhDQUFrQjtZQUNyQix1QkFBYztZQUNILHlCQUFnQjtZQUNkLHlDQUFrQjtZQUMvQix1QkFBZ0I7T0FmdEIsbUJBQW1CLENBd0YvQjtJQUFELDBCQUFDO0NBQUEsQUF4RkQsSUF3RkM7QUF4Rlksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEluamVjdCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEaXNoIH0gZnJvbSAnLi4vc2hhcmVkL2Rpc2gnO1xuaW1wb3J0IHsgQ29tbWVudCB9IGZyb20gJy4uL3NoYXJlZC9jb21tZW50JztcblxuaW1wb3J0IHsgRGlzaFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9kaXNoLnNlcnZpY2UnO1xuaW1wb3J0IHsgRmF2b3JpdGVTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvZmF2b3JpdGUuc2VydmljZSc7XG5pbXBvcnQgeyBUTlNGb250SWNvblNlcnZpY2UgfSBmcm9tICduYXRpdmVzY3JpcHQtbmd4LWZvbnRpY29uJztcblxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE1vZGFsRGlhbG9nT3B0aW9ucywgTW9kYWxEaWFsb2dTZXJ2aWNlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyXCI7XG5pbXBvcnQgeyBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFRvYXN0eSB9IGZyb20gJ25hdGl2ZXNjcmlwdC10b2FzdHknO1xuaW1wb3J0IHsgYWN0aW9uIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiO1xuXG5pbXBvcnQge0NvbW1lbnRDb21wb25lbnR9IGZyb20gXCIuLi9jb21tZW50L2NvbW1lbnQuY29tcG9uZW50XCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1kaXNoZGV0YWlsJyxcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogJy4vZGlzaGRldGFpbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Rpc2hkZXRhaWwuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIERpc2hkZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGRpc2g6IERpc2g7XG4gIGNvbW1lbnQ6IENvbW1lbnQ7XG4gIGF2Z3N0YXJzOiBzdHJpbmc7XG4gIG51bWNvbW1lbnRzOiBudW1iZXI7XG4gIGZhdm9yaXRlOiBib29sZWFuID0gZmFsc2U7XG4gIGVyck1lc3M6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRpc2hzZXJ2aWNlOiBEaXNoU2VydmljZSxcbiAgICBwcml2YXRlIGZhdm9yaXRlc2VydmljZTogRmF2b3JpdGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgZm9udGljb246IFROU0ZvbnRJY29uU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgcHJpdmF0ZSBtb2RhbERpYWxvZ1NlcnZpY2U6IE1vZGFsRGlhbG9nU2VydmljZSxcbiAgICBwcml2YXRlIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIEBJbmplY3QoJ2Jhc2VVUkwnKSBwcml2YXRlIGJhc2VVUkwpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuXG4gICAgdGhpcy5yb3V0ZS5wYXJhbXNcbiAgICAgIC5waXBlKHN3aXRjaE1hcCgocGFyYW1zOiBQYXJhbXMpID0+IHRoaXMuZGlzaHNlcnZpY2UuZ2V0RGlzaChwYXJhbXNbJ2lkJ10pKSlcbiAgICAgIC5zdWJzY3JpYmUoZGlzaCA9PiB7XG4gICAgICAgICAgdGhpcy5kaXNoID0gZGlzaDtcbiAgICAgICAgICB0aGlzLmZhdm9yaXRlID0gdGhpcy5mYXZvcml0ZXNlcnZpY2UuaXNGYXZvcml0ZSh0aGlzLmRpc2guaWQpO1xuICAgICAgICAgIHRoaXMubnVtY29tbWVudHMgPSB0aGlzLmRpc2guY29tbWVudHMubGVuZ3RoO1xuXG4gICAgICAgICAgbGV0IHRvdGFsID0gMDtcbiAgICAgICAgICB0aGlzLmRpc2guY29tbWVudHMuZm9yRWFjaChjb21tZW50ID0+IHRvdGFsICs9IGNvbW1lbnQucmF0aW5nKTtcbiAgICAgICAgICB0aGlzLmF2Z3N0YXJzID0gKHRvdGFsL3RoaXMubnVtY29tbWVudHMpLnRvRml4ZWQoMik7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBlcnJtZXNzID0+IHsgdGhpcy5kaXNoID0gbnVsbDsgdGhpcy5lcnJNZXNzID0gPGFueT5lcnJtZXNzOyB9KTtcbiAgfVxuXG4gIGFkZFRvRmF2b3JpdGVzKCkge1xuICAgICAgaWYgKCF0aGlzLmZhdm9yaXRlKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ0FkZGluZyB0byBGYXZvcml0ZXMnLCB0aGlzLmRpc2guaWQpO1xuICAgICAgICAgIHRoaXMuZmF2b3JpdGUgPSB0aGlzLmZhdm9yaXRlc2VydmljZS5hZGRGYXZvcml0ZSh0aGlzLmRpc2guaWQpO1xuICAgICAgICAgIGNvbnN0IHRvYXN0ID1cbiAgICAgICAgICAgICAgbmV3IFRvYXN0eSgnQWRkZWQgRGlzaCAnICsgdGhpcy5kaXNoLmlkLCAnc2hvcnQnLCAnYm90dG9tJyk7XG4gICAgICAgICAgdG9hc3Quc2hvdygpO1xuICAgICAgfVxuICB9XG5cbiAgcHJlc2VudEFjdGlvblNoZWV0KCkge1xuXG4gICAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgICAgICB0aXRsZTogXCJBY3Rpb25zXCIsXG4gICAgICAgICAgbWVzc2FnZTogXCJDaG9vc2UgeW91ciBhY3Rpb25cIixcbiAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkNhbmNlbFwiLFxuICAgICAgICAgIGFjdGlvbnM6IFtcIkFkZCB0byBGYXZvcml0ZXNcIiwgXCJBZGQgQ29tbWVudFwiXVxuICAgICAgfTtcblxuICAgICAgYWN0aW9uKG9wdGlvbnMpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgIGlmIChyZXN1bHQgPT0gJ0FkZCB0byBGYXZvcml0ZXMnKSB7XG4gICAgICAgICAgICAgIHRoaXMuYWRkVG9GYXZvcml0ZXMoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLnNob3dDb21tZW50Rm9ybSgpO1xuICAgICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgZ29CYWNrKCk6IHZvaWQge1xuICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5iYWNrKCk7XG4gIH1cblxuICBzaG93Q29tbWVudEZvcm0oKTogdm9pZCB7XG4gICAgICBsZXQgb3B0aW9uczogTW9kYWxEaWFsb2dPcHRpb25zID0ge1xuICAgICAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmNSZWYsXG4gICAgICAgICAgZnVsbHNjcmVlbjogZmFsc2VcbiAgICAgIH07XG4gICAgICB0aGlzLm1vZGFsRGlhbG9nU2VydmljZS5zaG93TW9kYWwoQ29tbWVudENvbXBvbmVudCwgb3B0aW9ucylcbiAgICAgICAgICAudGhlbigocmVzdWx0OiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgZCA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICAgIGNvbnN0IG4gPSBkLnRvSVNPU3RyaW5nKCk7XG4gICAgICAgICAgICAgIHRoaXMuY29tbWVudCA9IHtcbiAgICAgICAgICAgICAgICAgIGF1dGhvcjogcmVzdWx0LmF1dGhvcixcbiAgICAgICAgICAgICAgICAgIGNvbW1lbnQ6IHJlc3VsdC5jb21tZW50LFxuICAgICAgICAgICAgICAgICAgcmF0aW5nOiByZXN1bHQucmF0aW5nLFxuICAgICAgICAgICAgICAgICAgZGF0ZTogblxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICBsZXQgdG90YWwgPSAwO1xuICAgICAgICAgICAgICB0aGlzLmRpc2guY29tbWVudHMucHVzaCh0aGlzLmNvbW1lbnQpO1xuICAgICAgICAgICAgICB0aGlzLm51bWNvbW1lbnRzID0gdGhpcy5kaXNoLmNvbW1lbnRzLmxlbmd0aDtcbiAgICAgICAgICAgICAgdGhpcy5kaXNoLmNvbW1lbnRzLmZvckVhY2goY29tbWVudCA9PiB0b3RhbCArPSBjb21tZW50LnJhdGluZyk7XG4gICAgICAgICAgICAgIHRoaXMuYXZnc3RhcnMgPSAodG90YWwvdGhpcy5udW1jb21tZW50cykudG9GaXhlZCgyKTtcbiAgICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=