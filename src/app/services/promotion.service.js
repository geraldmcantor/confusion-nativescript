"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var http_1 = require("@angular/common/http");
var baseurl_1 = require("../shared/baseurl");
var process_httpmsg_service_1 = require("./process-httpmsg.service");
var PromotionService = /** @class */ (function () {
    function PromotionService(http, processHTTPMsgService) {
        this.http = http;
        this.processHTTPMsgService = processHTTPMsgService;
    }
    PromotionService.prototype.getPromotions = function () {
        return this.http.get(baseurl_1.baseURL + 'promotions')
            .pipe(operators_1.catchError(this.processHTTPMsgService.handleError));
    };
    PromotionService.prototype.getPromotion = function (id) {
        return this.http.get(baseurl_1.baseURL + 'promotions/' + id)
            .pipe(operators_1.catchError(this.processHTTPMsgService.handleError));
    };
    PromotionService.prototype.getFeaturedPromotion = function () {
        return this.http.get(baseurl_1.baseURL + 'promotions?featured=true').pipe(operators_1.map(function (promotions) { return promotions[0]; }))
            .pipe(operators_1.catchError(this.processHTTPMsgService.handleError));
    };
    PromotionService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient,
            process_httpmsg_service_1.ProcessHTTPMsgService])
    ], PromotionService);
    return PromotionService;
}());
exports.PromotionService = PromotionService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvbW90aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9tb3Rpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUkzQyw0Q0FBaUQ7QUFDakQsNkNBQStEO0FBQy9ELDZDQUE0QztBQUM1QyxxRUFBa0U7QUFLbEU7SUFFRSwwQkFBb0IsSUFBZ0IsRUFDMUIscUJBQTRDO1FBRGxDLFNBQUksR0FBSixJQUFJLENBQVk7UUFDMUIsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtJQUFJLENBQUM7SUFFM0Qsd0NBQWEsR0FBYjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBYyxpQkFBTyxHQUFHLFlBQVksQ0FBQzthQUN0RCxJQUFJLENBQUMsc0JBQVUsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRUQsdUNBQVksR0FBWixVQUFhLEVBQVU7UUFDckIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFZLGlCQUFPLEdBQUcsYUFBYSxHQUFHLEVBQUUsQ0FBQzthQUMxRCxJQUFJLENBQUMsc0JBQVUsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRUQsK0NBQW9CLEdBQXBCO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFjLGlCQUFPLEdBQUcsMEJBQTBCLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBRyxDQUFDLFVBQUEsVUFBVSxJQUFJLE9BQUEsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFiLENBQWEsQ0FBQyxDQUFDO2FBQzNHLElBQUksQ0FBQyxzQkFBVSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFsQlUsZ0JBQWdCO1FBSDVCLGlCQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO3lDQUcwQixpQkFBVTtZQUNILCtDQUFxQjtPQUgzQyxnQkFBZ0IsQ0FtQjVCO0lBQUQsdUJBQUM7Q0FBQSxBQW5CRCxJQW1CQztBQW5CWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcm9tb3Rpb24gfSBmcm9tICcuLi9zaGFyZWQvcHJvbW90aW9uJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBiYXNlVVJMIH0gZnJvbSAnLi4vc2hhcmVkL2Jhc2V1cmwnO1xuaW1wb3J0IHsgUHJvY2Vzc0hUVFBNc2dTZXJ2aWNlIH0gZnJvbSAnLi9wcm9jZXNzLWh0dHBtc2cuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFByb21vdGlvblNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgICBwcml2YXRlIHByb2Nlc3NIVFRQTXNnU2VydmljZTogUHJvY2Vzc0hUVFBNc2dTZXJ2aWNlKSB7IH1cblxuICBnZXRQcm9tb3Rpb25zKCk6IE9ic2VydmFibGU8UHJvbW90aW9uW10+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxQcm9tb3Rpb25bXT4oYmFzZVVSTCArICdwcm9tb3Rpb25zJylcbiAgICAgIC5waXBlKGNhdGNoRXJyb3IodGhpcy5wcm9jZXNzSFRUUE1zZ1NlcnZpY2UuaGFuZGxlRXJyb3IpKTtcbiAgfVxuXG4gIGdldFByb21vdGlvbihpZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxQcm9tb3Rpb24+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxQcm9tb3Rpb24+KGJhc2VVUkwgKyAncHJvbW90aW9ucy8nICsgaWQpXG4gICAgICAucGlwZShjYXRjaEVycm9yKHRoaXMucHJvY2Vzc0hUVFBNc2dTZXJ2aWNlLmhhbmRsZUVycm9yKSk7XG4gIH1cblxuICBnZXRGZWF0dXJlZFByb21vdGlvbigpOiBPYnNlcnZhYmxlPFByb21vdGlvbj4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFByb21vdGlvbltdPihiYXNlVVJMICsgJ3Byb21vdGlvbnM/ZmVhdHVyZWQ9dHJ1ZScpLnBpcGUobWFwKHByb21vdGlvbnMgPT4gcHJvbW90aW9uc1swXSkpXG4gICAgICAucGlwZShjYXRjaEVycm9yKHRoaXMucHJvY2Vzc0hUVFBNc2dTZXJ2aWNlLmhhbmRsZUVycm9yKSk7XG4gIH1cbn1cbiJdfQ==