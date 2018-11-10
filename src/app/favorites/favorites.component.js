"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var favorite_service_1 = require("../services/favorite.service");
var angular_1 = require("nativescript-ui-listview/angular");
var observable_array_1 = require("tns-core-modules/data/observable-array");
var dialogs_1 = require("ui/dialogs");
var nativescript_toasty_1 = require("nativescript-toasty");
var FavoritesComponent = /** @class */ (function () {
    function FavoritesComponent(favoriteservice, baseURL) {
        this.favoriteservice = favoriteservice;
        this.baseURL = baseURL;
    }
    FavoritesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.favoriteservice.getFavorites()
            .subscribe(function (favorites) { return _this.favorites = new observable_array_1.ObservableArray(favorites); }, function (errmess) { return _this.errMess = errmess; });
    };
    FavoritesComponent.prototype.deleteFavorite = function (id) {
        var _this = this;
        console.log('delete', id);
        var options = {
            title: 'Confirm Delete',
            message: 'Do you want to delete Dish ' + id,
            okButtonText: 'Yes',
            cancelButtonText: 'No',
            neutralButtonText: 'Cancel'
        };
        dialogs_1.confirm(options).then(function (result) {
            if (result) {
                _this.favorites = null;
                _this.favoriteservice.deleteFavorite(id)
                    .subscribe(function (favorites) {
                    var toast = new nativescript_toasty_1.Toasty('Deleted Dish ' + id, 'short', 'bottom');
                    toast.show();
                    _this.favorites = new observable_array_1.ObservableArray(favorites);
                }, function (errmess) { return _this.errMess = errmess; });
            }
            else {
                console.log('Delete canceled');
            }
        });
    };
    FavoritesComponent.prototype.onCellSwiping = function (args) {
        var swipeLimits = args.data.swipeLimits;
        var currentItemView = args.object;
        var currentView;
        if (args.data.x > 200) {
        }
        else if (args.data.x < -200) {
        }
    };
    FavoritesComponent.prototype.onSwipeCellStarted = function (args) {
        var swipeLimits = args.data.swipeLimits;
        var swipeView = args['object'];
        var leftItem = swipeView.getViewById('mark-view');
        var rightItem = swipeView.getViewById('delete-view');
        swipeLimits.left = leftItem.getMeasuredWidth();
        swipeLimits.right = rightItem.getMeasuredWidth();
        swipeLimits.threshold = leftItem.getMeasuredWidth() / 2;
    };
    FavoritesComponent.prototype.onSwipeCellFinished = function (args) {
    };
    FavoritesComponent.prototype.onLeftSwipeClick = function (args) {
        console.log('Left swipe click');
        this.listViewComponent.listView.notifySwipeToExecuteFinished();
    };
    FavoritesComponent.prototype.onRightSwipeClick = function (args) {
        this.deleteFavorite(args.object.bindingContext.id);
        this.listViewComponent.listView.notifySwipeToExecuteFinished();
    };
    __decorate([
        core_1.ViewChild('myListView'),
        __metadata("design:type", angular_1.RadListViewComponent)
    ], FavoritesComponent.prototype, "listViewComponent", void 0);
    FavoritesComponent = __decorate([
        core_1.Component({
            selector: 'app-favorites',
            moduleId: module.id,
            templateUrl: './favorites.component.html',
            styleUrls: ['./favorites.component.css']
        }),
        __param(1, core_1.Inject('baseURL')),
        __metadata("design:paramtypes", [favorite_service_1.FavoriteService, Object])
    ], FavoritesComponent);
    return FavoritesComponent;
}());
exports.FavoritesComponent = FavoritesComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmF2b3JpdGVzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZhdm9yaXRlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBcUU7QUFDckUsaUVBQStEO0FBRy9ELDREQUF3RTtBQUN4RSwyRUFBeUU7QUFFekUsc0NBQXFDO0FBQ3JDLDJEQUE2QztBQVE3QztJQU9JLDRCQUFvQixlQUFnQyxFQUNyQixPQUFPO1FBRGxCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNyQixZQUFPLEdBQVAsT0FBTyxDQUFBO0lBQ3RDLENBQUM7SUFFRCxxQ0FBUSxHQUFSO1FBQUEsaUJBSUM7UUFIRyxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRTthQUM5QixTQUFTLENBQUMsVUFBQSxTQUFTLElBQUksT0FBQSxLQUFJLENBQUMsU0FBUyxHQUFHLElBQUksa0NBQWUsQ0FBQyxTQUFTLENBQUMsRUFBL0MsQ0FBK0MsRUFDbkUsVUFBQSxPQUFPLElBQUksT0FBQSxLQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sRUFBdEIsQ0FBc0IsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCwyQ0FBYyxHQUFkLFVBQWUsRUFBVTtRQUF6QixpQkEwQkM7UUF6QkcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFMUIsSUFBSSxPQUFPLEdBQUc7WUFDVixLQUFLLEVBQUUsZ0JBQWdCO1lBQ3ZCLE9BQU8sRUFBRSw2QkFBNkIsR0FBRyxFQUFFO1lBQzNDLFlBQVksRUFBRSxLQUFLO1lBQ25CLGdCQUFnQixFQUFFLElBQUk7WUFDdEIsaUJBQWlCLEVBQUUsUUFBUTtTQUM5QixDQUFDO1FBRUYsaUJBQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxNQUFlO1lBQ2xDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ1QsS0FBSSxDQUFDLFNBQVMsR0FB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ZTtPQVAzQyxrQkFBa0IsQ0FrRjlCO0lBQUQseUJBQUM7Q0FBQSxBQWxGRCxJQWtGQztBQWxGWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZhdm9yaXRlU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2Zhdm9yaXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGlzaCB9IGZyb20gJy4uL3NoYXJlZC9kaXNoJztcbmltcG9ydCB7IExpc3RWaWV3RXZlbnREYXRhLCBSYWRMaXN0VmlldyB9IGZyb20gJ25hdGl2ZXNjcmlwdC11aS1saXN0dmlldyc7XG5pbXBvcnQgeyBSYWRMaXN0Vmlld0NvbXBvbmVudCB9IGZyb20gJ25hdGl2ZXNjcmlwdC11aS1saXN0dmlldy9hbmd1bGFyJztcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5JztcbmltcG9ydCB7IFZpZXcgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2NvcmUvdmlldyc7XG5pbXBvcnQgeyBjb25maXJtIH0gZnJvbSAndWkvZGlhbG9ncyc7XG5pbXBvcnQgeyBUb2FzdHkgfSBmcm9tICduYXRpdmVzY3JpcHQtdG9hc3R5JztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhcHAtZmF2b3JpdGVzJyxcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9mYXZvcml0ZXMuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2Zhdm9yaXRlcy5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRmF2b3JpdGVzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGZhdm9yaXRlczogT2JzZXJ2YWJsZUFycmF5PERpc2g+O1xuICAgIGVyck1lc3M6IHN0cmluZztcblxuICAgIEBWaWV3Q2hpbGQoJ215TGlzdFZpZXcnKSBsaXN0Vmlld0NvbXBvbmVudDogUmFkTGlzdFZpZXdDb21wb25lbnQ7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZhdm9yaXRlc2VydmljZTogRmF2b3JpdGVTZXJ2aWNlLFxuICAgICAgICBASW5qZWN0KCdiYXNlVVJMJykgcHJpdmF0ZSBiYXNlVVJMKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuZmF2b3JpdGVzZXJ2aWNlLmdldEZhdm9yaXRlcygpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGZhdm9yaXRlcyA9PiB0aGlzLmZhdm9yaXRlcyA9IG5ldyBPYnNlcnZhYmxlQXJyYXkoZmF2b3JpdGVzKSxcbiAgICAgICAgICAgICAgICBlcnJtZXNzID0+IHRoaXMuZXJyTWVzcyA9IGVycm1lc3MpO1xuICAgIH1cblxuICAgIGRlbGV0ZUZhdm9yaXRlKGlkOiBudW1iZXIpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2RlbGV0ZScsIGlkKTtcblxuICAgICAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHRpdGxlOiAnQ29uZmlybSBEZWxldGUnLFxuICAgICAgICAgICAgbWVzc2FnZTogJ0RvIHlvdSB3YW50IHRvIGRlbGV0ZSBEaXNoICcgKyBpZCxcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogJ1llcycsXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiAnTm8nLFxuICAgICAgICAgICAgbmV1dHJhbEJ1dHRvblRleHQ6ICdDYW5jZWwnXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uZmlybShvcHRpb25zKS50aGVuKChyZXN1bHQ6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZhdm9yaXRlcyA9IG51bGw7XG4gICAgICAgICAgICAgICAgdGhpcy5mYXZvcml0ZXNlcnZpY2UuZGVsZXRlRmF2b3JpdGUoaWQpXG4gICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoZmF2b3JpdGVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvYXN0ID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgVG9hc3R5KCdEZWxldGVkIERpc2ggJyArIGlkLCAnc2hvcnQnLCAnYm90dG9tJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b2FzdC5zaG93KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZhdm9yaXRlcyA9IG5ldyBPYnNlcnZhYmxlQXJyYXkoZmF2b3JpdGVzKTtcbiAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgZXJybWVzcyA9PiB0aGlzLmVyck1lc3MgPSBlcnJtZXNzKTtcbiAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRGVsZXRlIGNhbmNlbGVkJyk7XG4gICAgICAgICAgICAgfVxuICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uQ2VsbFN3aXBpbmcoYXJnczogTGlzdFZpZXdFdmVudERhdGEpIHtcbiAgICAgICAgdmFyIHN3aXBlTGltaXRzID0gYXJncy5kYXRhLnN3aXBlTGltaXRzO1xuICAgICAgICB2YXIgY3VycmVudEl0ZW1WaWV3ID0gYXJncy5vYmplY3Q7XG4gICAgICAgIHZhciBjdXJyZW50VmlldztcblxuICAgICAgICBpZihhcmdzLmRhdGEueCA+IDIwMCkge1xuXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYXJncy5kYXRhLnggPCAtMjAwKSB7XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBvblN3aXBlQ2VsbFN0YXJ0ZWQoYXJnczogTGlzdFZpZXdFdmVudERhdGEpIHtcbiAgICAgICAgdmFyIHN3aXBlTGltaXRzID0gYXJncy5kYXRhLnN3aXBlTGltaXRzO1xuICAgICAgICB2YXIgc3dpcGVWaWV3ID0gYXJnc1snb2JqZWN0J107XG5cbiAgICAgICAgdmFyIGxlZnRJdGVtID0gc3dpcGVWaWV3LmdldFZpZXdCeUlkPFZpZXc+KCdtYXJrLXZpZXcnKTtcbiAgICAgICAgdmFyIHJpZ2h0SXRlbSA9IHN3aXBlVmlldy5nZXRWaWV3QnlJZDxWaWV3PignZGVsZXRlLXZpZXcnKTtcbiAgICAgICAgc3dpcGVMaW1pdHMubGVmdCA9IGxlZnRJdGVtLmdldE1lYXN1cmVkV2lkdGgoKTtcbiAgICAgICAgc3dpcGVMaW1pdHMucmlnaHQgPSByaWdodEl0ZW0uZ2V0TWVhc3VyZWRXaWR0aCgpO1xuICAgICAgICBzd2lwZUxpbWl0cy50aHJlc2hvbGQgPSBsZWZ0SXRlbS5nZXRNZWFzdXJlZFdpZHRoKCkvMjtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25Td2lwZUNlbGxGaW5pc2hlZChhcmdzOiBMaXN0Vmlld0V2ZW50RGF0YSkge1xuXG4gICAgfVxuXG4gICAgcHVibGljIG9uTGVmdFN3aXBlQ2xpY2soYXJnczogTGlzdFZpZXdFdmVudERhdGEpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0xlZnQgc3dpcGUgY2xpY2snKTtcbiAgICAgICAgdGhpcy5saXN0Vmlld0NvbXBvbmVudC5saXN0Vmlldy5ub3RpZnlTd2lwZVRvRXhlY3V0ZUZpbmlzaGVkKCk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uUmlnaHRTd2lwZUNsaWNrKGFyZ3M6IExpc3RWaWV3RXZlbnREYXRhKSB7XG4gICAgICAgIHRoaXMuZGVsZXRlRmF2b3JpdGUoYXJncy5vYmplY3QuYmluZGluZ0NvbnRleHQuaWQpO1xuICAgICAgICB0aGlzLmxpc3RWaWV3Q29tcG9uZW50Lmxpc3RWaWV3Lm5vdGlmeVN3aXBlVG9FeGVjdXRlRmluaXNoZWQoKTtcbiAgICB9XG59XG4iXX0=