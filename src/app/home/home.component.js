"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dish_service_1 = require("../services/dish.service");
var promotion_service_1 = require("../services/promotion.service");
var leader_service_1 = require("../services/leader.service");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(dishservice, promotionservice, leaderservice, baseURL) {
        this.dishservice = dishservice;
        this.promotionservice = promotionservice;
        this.leaderservice = leaderservice;
        this.baseURL = baseURL;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dishservice.getFeaturedDish()
            .subscribe(function (dish) { return _this.dish = dish; }, function (errmess) { return _this.dishErrMess = errmess; });
        this.promotionservice.getFeaturedPromotion()
            .subscribe(function (promotion) { return _this.promotion = promotion; }, function (errmess) { return _this.promoErrMess = errmess; });
        this.leaderservice.getFeaturedLeader()
            .subscribe(function (leader) { return _this.leader = leader; }, function (errmess) { return _this.leaderErrMess = errmess; });
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            moduleId: module.id,
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css']
        }),
        __param(3, core_1.Inject('baseURL')),
        __metadata("design:paramtypes", [dish_service_1.DishService,
            promotion_service_1.PromotionService,
            leader_service_1.LeaderService, Object])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwRDtBQUUxRCx5REFBdUQ7QUFFdkQsbUVBQWlFO0FBRWpFLDZEQUEyRDtBQVEzRDtJQVNFLHVCQUFvQixXQUF3QixFQUNsQyxnQkFBa0MsRUFDbEMsYUFBNEIsRUFDVCxPQUFPO1FBSGhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ2xDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDVCxZQUFPLEdBQVAsT0FBTyxDQUFBO0lBQUksQ0FBQztJQUV6QyxnQ0FBUSxHQUFSO1FBQUEsaUJBVUM7UUFUQyxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsRUFBRTthQUMvQixTQUFTLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksRUFBaEIsQ0FBZ0IsRUFDakMsVUFBQSxPQUFPLElBQUksT0FBQSxLQUFJLENBQUMsV0FBVyxHQUFRLE9BQU8sRUFBL0IsQ0FBK0IsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxvQkFBb0IsRUFBRTthQUN6QyxTQUFTLENBQUMsVUFBQSxTQUFTLElBQUksT0FBQSxLQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsRUFBMUIsQ0FBMEIsRUFDaEQsVUFBQSxPQUFPLElBQUksT0FBQSxLQUFJLENBQUMsWUFBWSxHQUFRLE9BQU8sRUFBaEMsQ0FBZ0MsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxhQUFhLENBQUMsaUJBQWlCLEVBQUU7YUFDbkMsU0FBUyxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsS0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLEVBQXBCLENBQW9CLEVBQ3ZDLFVBQUEsT0FBTyxJQUFJLE9BQUEsS0FBSSxDQUFDLGFBQWEsR0FBUSxPQUFPLEVBQWpDLENBQWlDLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBeEJVLGFBQWE7UUFOekIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO1NBQ3BDLENBQUM7UUFhRyxXQUFBLGFBQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQTt5Q0FIYSwwQkFBVztZQUNoQixvQ0FBZ0I7WUFDbkIsOEJBQWE7T0FYM0IsYUFBYSxDQXlCekI7SUFBRCxvQkFBQztDQUFBLEFBekJELElBeUJDO0FBekJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGlzaCB9IGZyb20gJy4uL3NoYXJlZC9kaXNoJztcbmltcG9ydCB7IERpc2hTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvZGlzaC5zZXJ2aWNlJztcbmltcG9ydCB7IFByb21vdGlvbiB9IGZyb20gJy4uL3NoYXJlZC9wcm9tb3Rpb24nO1xuaW1wb3J0IHsgUHJvbW90aW9uU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3Byb21vdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IExlYWRlciB9IGZyb20gJy4uL3NoYXJlZC9sZWFkZXInO1xuaW1wb3J0IHsgTGVhZGVyU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2xlYWRlci5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWhvbWUnLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogJy4vaG9tZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2hvbWUuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGRpc2g6IERpc2g7XG4gIHByb21vdGlvbjogUHJvbW90aW9uO1xuICBsZWFkZXI6IExlYWRlcjtcbiAgZGlzaEVyck1lc3M6IHN0cmluZztcbiAgcHJvbW9FcnJNZXNzOiBzdHJpbmc7XG4gIGxlYWRlckVyck1lc3M6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRpc2hzZXJ2aWNlOiBEaXNoU2VydmljZSxcbiAgICBwcml2YXRlIHByb21vdGlvbnNlcnZpY2U6IFByb21vdGlvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBsZWFkZXJzZXJ2aWNlOiBMZWFkZXJTZXJ2aWNlLFxuICAgIEBJbmplY3QoJ2Jhc2VVUkwnKSBwcml2YXRlIGJhc2VVUkwpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZGlzaHNlcnZpY2UuZ2V0RmVhdHVyZWREaXNoKClcbiAgICAgIC5zdWJzY3JpYmUoZGlzaCA9PiB0aGlzLmRpc2ggPSBkaXNoLFxuICAgICAgICBlcnJtZXNzID0+IHRoaXMuZGlzaEVyck1lc3MgPSA8YW55PmVycm1lc3MpO1xuICAgIHRoaXMucHJvbW90aW9uc2VydmljZS5nZXRGZWF0dXJlZFByb21vdGlvbigpXG4gICAgICAuc3Vic2NyaWJlKHByb21vdGlvbiA9PiB0aGlzLnByb21vdGlvbiA9IHByb21vdGlvbixcbiAgICAgICAgZXJybWVzcyA9PiB0aGlzLnByb21vRXJyTWVzcyA9IDxhbnk+ZXJybWVzcyk7XG4gICAgdGhpcy5sZWFkZXJzZXJ2aWNlLmdldEZlYXR1cmVkTGVhZGVyKClcbiAgICAgIC5zdWJzY3JpYmUobGVhZGVyID0+IHRoaXMubGVhZGVyID0gbGVhZGVyLFxuICAgICAgICBlcnJtZXNzID0+IHRoaXMubGVhZGVyRXJyTWVzcyA9IDxhbnk+ZXJybWVzcyk7XG4gIH1cbn1cbiJdfQ==