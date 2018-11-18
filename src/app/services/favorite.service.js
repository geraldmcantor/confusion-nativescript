"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dish_service_1 = require("./dish.service");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var couchbase_service_1 = require("../services/couchbase.service");
var LocalNotifications = require("nativescript-local-notifications");
var FavoriteService = /** @class */ (function () {
    function FavoriteService(dishservice, couchbaseService) {
        this.dishservice = dishservice;
        this.couchbaseService = couchbaseService;
        this.docId = "favorites";
        this.favorites = [];
        var doc = this.couchbaseService.getDocument(this.docId);
        if (doc == null) {
            this.couchbaseService.createDocument({ "favorites": [] }, this.docId);
        }
        else {
            this.favorites = doc.favorites;
        }
    }
    FavoriteService.prototype.isFavorite = function (id) {
        return this.favorites.some(function (el) { return el === id; });
    };
    FavoriteService.prototype.addFavorite = function (id) {
        if (!this.isFavorite(id)) {
            this.favorites.push(id);
            this.couchbaseService.updateDocument(this.docId, { "favorites": this.favorites });
            // Schedule a single notification
            LocalNotifications.schedule([{
                    id: +id,
                    title: "ConFusion Favorites",
                    body: 'Dish ' + id + ' added successfully'
                }])
                .then(function () { return console.log('Notification scheduled'); }, function (error) { return console.log('Error showing nofication ' + error); });
        }
        return true;
    };
    FavoriteService.prototype.getFavorites = function () {
        var _this = this;
        return this.dishservice.getDishes()
            .pipe(operators_1.map(function (dishes) { return dishes.filter(function (dish) { return _this.favorites.some(function (el) { return el === dish.id; }); }); }));
    };
    FavoriteService.prototype.deleteFavorite = function (id) {
        var index = this.favorites.indexOf(id);
        if (index >= 0) {
            this.favorites.splice(index, 1);
            this.couchbaseService.updateDocument(this.docId, { "favorites": this.favorites });
            return this.getFavorites();
        }
        else {
            return rxjs_1.throwError('Deleting non-existant favorite');
        }
    };
    FavoriteService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [dish_service_1.DishService,
            couchbase_service_1.CouchbaseService])
    ], FavoriteService);
    return FavoriteService;
}());
exports.FavoriteService = FavoriteService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmF2b3JpdGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZhdm9yaXRlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFFM0MsK0NBQTZDO0FBQzdDLDZCQUE4QztBQUM5Qyw0Q0FBcUM7QUFDckMsbUVBQWlFO0FBQ2pFLHFFQUF1RTtBQUt2RTtJQUtJLHlCQUFvQixXQUF3QixFQUN4QixnQkFBa0M7UUFEbEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUh0RCxVQUFLLEdBQVcsV0FBVyxDQUFDO1FBSXhCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBRXBCLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hELEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxFQUFDLFdBQVcsRUFBRSxFQUFFLEVBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEUsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDO1FBQ25DLENBQUM7SUFDTCxDQUFDO0lBRUQsb0NBQVUsR0FBVixVQUFXLEVBQVU7UUFDakIsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQUEsRUFBRSxJQUFJLE9BQUEsRUFBRSxLQUFLLEVBQUUsRUFBVCxDQUFTLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQscUNBQVcsR0FBWCxVQUFZLEVBQVU7UUFDbEIsRUFBRSxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUN4QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUNoQyxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUMsQ0FBQyxDQUFDO1lBRS9DLGlDQUFpQztZQUNqQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDekIsRUFBRSxFQUFFLENBQUMsRUFBRTtvQkFDUCxLQUFLLEVBQUUscUJBQXFCO29CQUM1QixJQUFJLEVBQUUsT0FBTyxHQUFHLEVBQUUsR0FBRyxxQkFBcUI7aUJBQzdDLENBQUMsQ0FBQztpQkFDQyxJQUFJLENBQUMsY0FBTSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsRUFBckMsQ0FBcUMsRUFDaEQsVUFBQyxLQUFLLElBQUssT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixHQUFHLEtBQUssQ0FBQyxFQUFoRCxDQUFnRCxDQUFDLENBQUM7UUFDakUsQ0FBQztRQUNMLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVELHNDQUFZLEdBQVo7UUFBQSxpQkFHQztRQUZHLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRTthQUM5QixJQUFJLENBQUMsZUFBRyxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQUEsRUFBRSxJQUFJLE9BQUEsRUFBRSxLQUFLLElBQUksQ0FBQyxFQUFFLEVBQWQsQ0FBYyxDQUFDLEVBQXpDLENBQXlDLENBQUMsRUFBaEUsQ0FBZ0UsQ0FBQyxDQUFDLENBQUM7SUFDL0YsQ0FBQztJQUVELHdDQUFjLEdBQWQsVUFBZSxFQUFVO1FBQ3JCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZDLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQ2hDLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBQyxDQUFDLENBQUM7WUFDL0MsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUMvQixDQUFDO1FBQ0QsSUFBSSxDQUFDLENBQUM7WUFDRixNQUFNLENBQUMsaUJBQVUsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3hELENBQUM7SUFDTCxDQUFDO0lBdkRRLGVBQWU7UUFIM0IsaUJBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7eUNBTW1DLDBCQUFXO1lBQ04sb0NBQWdCO09BTjdDLGVBQWUsQ0F3RDNCO0lBQUQsc0JBQUM7Q0FBQSxBQXhERCxJQXdEQztBQXhEWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERpc2ggfSBmcm9tICcuLi9zaGFyZWQvZGlzaCc7XG5pbXBvcnQgeyBEaXNoU2VydmljZSB9IGZyb20gJy4vZGlzaC5zZXJ2aWNlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENvdWNoYmFzZVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9jb3VjaGJhc2Uuc2VydmljZSc7XG5pbXBvcnQgKiBhcyBMb2NhbE5vdGlmaWNhdGlvbnMgZnJvbSAnbmF0aXZlc2NyaXB0LWxvY2FsLW5vdGlmaWNhdGlvbnMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBGYXZvcml0ZVNlcnZpY2Uge1xuXG4gICAgZmF2b3JpdGVzOiBBcnJheTxudW1iZXI+O1xuICAgIGRvY0lkOiBzdHJpbmcgPSBcImZhdm9yaXRlc1wiO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkaXNoc2VydmljZTogRGlzaFNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBjb3VjaGJhc2VTZXJ2aWNlOiBDb3VjaGJhc2VTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuZmF2b3JpdGVzID0gW107XG5cbiAgICAgICAgbGV0IGRvYyA9IHRoaXMuY291Y2hiYXNlU2VydmljZS5nZXREb2N1bWVudCh0aGlzLmRvY0lkKTtcbiAgICAgICAgaWYgKGRvYyA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmNvdWNoYmFzZVNlcnZpY2UuY3JlYXRlRG9jdW1lbnQoe1wiZmF2b3JpdGVzXCI6IFtdfSwgdGhpcy5kb2NJZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmZhdm9yaXRlcyA9IGRvYy5mYXZvcml0ZXM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpc0Zhdm9yaXRlKGlkOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmF2b3JpdGVzLnNvbWUoZWwgPT4gZWwgPT09IGlkKTtcbiAgICB9XG5cbiAgICBhZGRGYXZvcml0ZShpZDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIGlmKCF0aGlzLmlzRmF2b3JpdGUoaWQpKSB7XG4gICAgICAgICAgICB0aGlzLmZhdm9yaXRlcy5wdXNoKGlkKTtcbiAgICAgICAgICAgIHRoaXMuY291Y2hiYXNlU2VydmljZS51cGRhdGVEb2N1bWVudChcbiAgICAgICAgICAgICAgICB0aGlzLmRvY0lkLCB7XCJmYXZvcml0ZXNcIjogdGhpcy5mYXZvcml0ZXN9KTtcblxuICAgICAgICAgICAgLy8gU2NoZWR1bGUgYSBzaW5nbGUgbm90aWZpY2F0aW9uXG4gICAgICAgICAgICBMb2NhbE5vdGlmaWNhdGlvbnMuc2NoZWR1bGUoW3tcbiAgICAgICAgICAgICAgICBpZDogK2lkLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkNvbkZ1c2lvbiBGYXZvcml0ZXNcIixcbiAgICAgICAgICAgICAgICBib2R5OiAnRGlzaCAnICsgaWQgKyAnIGFkZGVkIHN1Y2Nlc3NmdWxseSdcbiAgICAgICAgICAgIH1dKVxuICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gY29uc29sZS5sb2coJ05vdGlmaWNhdGlvbiBzY2hlZHVsZWQnKSxcbiAgICAgICAgICAgICAgICAoZXJyb3IpID0+IGNvbnNvbGUubG9nKCdFcnJvciBzaG93aW5nIG5vZmljYXRpb24gJyArIGVycm9yKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGdldEZhdm9yaXRlcygpOiBPYnNlcnZhYmxlPERpc2hbXT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5kaXNoc2VydmljZS5nZXREaXNoZXMoKVxuICAgICAgICAgICAgLnBpcGUobWFwKGRpc2hlcyA9PiBkaXNoZXMuZmlsdGVyKGRpc2ggPT4gdGhpcy5mYXZvcml0ZXMuc29tZShlbCA9PiBlbCA9PT0gZGlzaC5pZCkpKSk7XG4gICAgfVxuXG4gICAgZGVsZXRlRmF2b3JpdGUoaWQ6IG51bWJlcik6IE9ic2VydmFibGU8RGlzaFtdPiB7XG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMuZmF2b3JpdGVzLmluZGV4T2YoaWQpO1xuICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICAgICAgdGhpcy5mYXZvcml0ZXMuc3BsaWNlKGluZGV4LDEpO1xuICAgICAgICAgICAgdGhpcy5jb3VjaGJhc2VTZXJ2aWNlLnVwZGF0ZURvY3VtZW50KFxuICAgICAgICAgICAgICAgIHRoaXMuZG9jSWQsIHtcImZhdm9yaXRlc1wiOiB0aGlzLmZhdm9yaXRlc30pO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RmF2b3JpdGVzKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhyb3dFcnJvcignRGVsZXRpbmcgbm9uLWV4aXN0YW50IGZhdm9yaXRlJyk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=