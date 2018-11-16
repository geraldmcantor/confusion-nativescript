"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var page_1 = require("ui/page");
var ReservationModalComponent = /** @class */ (function () {
    function ReservationModalComponent(params, page) {
        this.params = params;
        this.page = page;
        this.guestArray = [1, 2, 3, 4, 5, 6];
        this.isDateTime = false;
        if (params.context === "guest") {
            this.isDateTime = false;
        }
        else if (params.context === "date-time") {
            this.isDateTime = true;
        }
    }
    ReservationModalComponent.prototype.ngOnInit = function () {
        if (this.isDateTime) {
            var datePicker = this.datePickerElement.nativeElement;
            console.log(datePicker);
            var currentdate = new Date();
            datePicker.year = currentdate.getFullYear();
            datePicker.month = currentdate.getMonth() + 1;
            datePicker.day = currentdate.getDate() + 1;
            datePicker.minDate = currentdate;
            datePicker.maxDate = new Date(2045, 4, 12);
            var timePicker = this.timePickerElement.nativeElement;
            timePicker.hour = currentdate.getHours();
            timePicker.minute = currentdate.getMinutes();
        }
    };
    ReservationModalComponent.prototype.submit = function () {
        if (this.isDateTime) {
            var datePicker = this.datePickerElement.nativeElement;
            var selectedDate = datePicker.date;
            var timePicker = this.timePickerElement.nativeElement;
            var selectedTime = timePicker.time;
            var reserveTime = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate(), selectedTime.getHours(), selectedTime.getMinutes());
            this.params.closeCallback(reserveTime.toISOString());
        }
        else {
            var picker = this.guestPickerElement.nativeElement;
            this.params.closeCallback(this.guestArray[picker.selectedIndex]);
        }
    };
    __decorate([
        core_1.ViewChild("datePicker"),
        __metadata("design:type", core_1.ElementRef)
    ], ReservationModalComponent.prototype, "datePickerElement", void 0);
    __decorate([
        core_1.ViewChild("timePicker"),
        __metadata("design:type", core_1.ElementRef)
    ], ReservationModalComponent.prototype, "timePickerElement", void 0);
    __decorate([
        core_1.ViewChild("guestPicker"),
        __metadata("design:type", core_1.ElementRef)
    ], ReservationModalComponent.prototype, "guestPickerElement", void 0);
    ReservationModalComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: './reservationmodal.component.html'
        }),
        __metadata("design:paramtypes", [modal_dialog_1.ModalDialogParams,
            page_1.Page])
    ], ReservationModalComponent);
    return ReservationModalComponent;
}());
exports.ReservationModalComponent = ReservationModalComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzZXJ2YXRpb25tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZXNlcnZhdGlvbm1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUN6RSxrRUFBc0U7QUFJdEUsZ0NBQStCO0FBTS9CO0lBU0ksbUNBQW9CLE1BQXlCLEVBQ2pDLElBQVU7UUFERixXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQUNqQyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBUnRCLGVBQVUsR0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFOUIsZUFBVSxHQUFZLEtBQUssQ0FBQztRQVFwQixFQUFFLENBQUEsQ0FBQyxNQUFNLENBQUMsT0FBTyxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDNUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDNUIsQ0FBQztRQUNELElBQUksQ0FBQyxFQUFFLENBQUEsQ0FBQyxNQUFNLENBQUMsT0FBTyxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDckMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDM0IsQ0FBQztJQUNULENBQUM7SUFFRCw0Q0FBUSxHQUFSO1FBRUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFFbEIsSUFBSSxVQUFVLEdBQTJCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUM7WUFFOUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUV4QixJQUFJLFdBQVcsR0FBUyxJQUFJLElBQUksRUFBRSxDQUFDO1lBQ25DLFVBQVUsQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQzVDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUM5QyxVQUFVLENBQUMsR0FBRyxHQUFHLFdBQVcsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDM0MsVUFBVSxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUM7WUFDakMsVUFBVSxDQUFDLE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBRTNDLElBQUksVUFBVSxHQUEyQixJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDO1lBQzlFLFVBQVUsQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3pDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2pELENBQUM7SUFDTCxDQUFDO0lBRU0sMENBQU0sR0FBYjtRQUNJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLElBQUksVUFBVSxHQUEyQixJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDO1lBQzlFLElBQUksWUFBWSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUM7WUFDbkMsSUFBSSxVQUFVLEdBQTJCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUM7WUFDOUUsSUFBSSxZQUFZLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQztZQUNuQyxJQUFJLFdBQVcsR0FBRyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLEVBQ3pCLFlBQVksQ0FBQyxRQUFRLEVBQUUsRUFDdkIsWUFBWSxDQUFDLE9BQU8sRUFBRSxFQUN0QixZQUFZLENBQUMsUUFBUSxFQUFFLEVBQ3ZCLFlBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO1lBQ3ZELElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBQ3pELENBQUM7UUFDRCxJQUFJLENBQUMsQ0FBQztZQUNGLElBQUksTUFBTSxHQUFnQixJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDO1lBQ2hFLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUE7UUFDcEUsQ0FBQztJQUNMLENBQUM7SUFyRHdCO1FBQXhCLGdCQUFTLENBQUMsWUFBWSxDQUFDO2tDQUFvQixpQkFBVTt3RUFBQztJQUM5QjtRQUF4QixnQkFBUyxDQUFDLFlBQVksQ0FBQztrQ0FBb0IsaUJBQVU7d0VBQUM7SUFDN0I7UUFBekIsZ0JBQVMsQ0FBQyxhQUFhLENBQUM7a0NBQXFCLGlCQUFVO3lFQUFDO0lBUGhELHlCQUF5QjtRQUpyQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxtQ0FBbUM7U0FDbkQsQ0FBQzt5Q0FVOEIsZ0NBQWlCO1lBQzNCLFdBQUk7T0FWYix5QkFBeUIsQ0EyRHJDO0lBQUQsZ0NBQUM7Q0FBQSxBQTNERCxJQTJEQztBQTNEWSw4REFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNb2RhbERpYWxvZ1BhcmFtcyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL21vZGFsLWRpYWxvZyc7XG5pbXBvcnQgeyBEYXRlUGlja2VyIH0gZnJvbSAndWkvZGF0ZS1waWNrZXInO1xuaW1wb3J0IHsgVGltZVBpY2tlciB9IGZyb20gJ3VpL3RpbWUtcGlja2VyJztcbmltcG9ydCB7IExpc3RQaWNrZXIgfSBmcm9tICd1aS9saXN0LXBpY2tlcic7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndWkvcGFnZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3Jlc2VydmF0aW9ubW9kYWwuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFJlc2VydmF0aW9uTW9kYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgZ3Vlc3RBcnJheT1bMSwgMiwgMywgNCwgNSwgNl07XG4gICAgZ3Vlc3RzOiBudW1iZXI7XG4gICAgaXNEYXRlVGltZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBWaWV3Q2hpbGQoXCJkYXRlUGlja2VyXCIpIGRhdGVQaWNrZXJFbGVtZW50OiBFbGVtZW50UmVmO1xuICAgIEBWaWV3Q2hpbGQoXCJ0aW1lUGlja2VyXCIpIHRpbWVQaWNrZXJFbGVtZW50OiBFbGVtZW50UmVmO1xuICAgIEBWaWV3Q2hpbGQoXCJndWVzdFBpY2tlclwiKSBndWVzdFBpY2tlckVsZW1lbnQ6IEVsZW1lbnRSZWY7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhcmFtczogTW9kYWxEaWFsb2dQYXJhbXMsXG4gICAgICAgIHByaXZhdGUgcGFnZTogUGFnZSkge1xuXG4gICAgICAgICAgICBpZihwYXJhbXMuY29udGV4dCA9PT0gXCJndWVzdFwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0RhdGVUaW1lID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKHBhcmFtcy5jb250ZXh0ID09PSBcImRhdGUtdGltZVwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0RhdGVUaW1lID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcblxuICAgICAgICBpZiAodGhpcy5pc0RhdGVUaW1lKSB7XG5cbiAgICAgICAgICAgIGxldCBkYXRlUGlja2VyOiBEYXRlUGlja2VyID0gPERhdGVQaWNrZXI+dGhpcy5kYXRlUGlja2VyRWxlbWVudC5uYXRpdmVFbGVtZW50O1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRlUGlja2VyKTtcblxuICAgICAgICAgICAgbGV0IGN1cnJlbnRkYXRlOiBEYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgIGRhdGVQaWNrZXIueWVhciA9IGN1cnJlbnRkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgICAgICBkYXRlUGlja2VyLm1vbnRoID0gY3VycmVudGRhdGUuZ2V0TW9udGgoKSArIDE7XG4gICAgICAgICAgICBkYXRlUGlja2VyLmRheSA9IGN1cnJlbnRkYXRlLmdldERhdGUoKSArIDE7XG4gICAgICAgICAgICBkYXRlUGlja2VyLm1pbkRhdGUgPSBjdXJyZW50ZGF0ZTtcbiAgICAgICAgICAgIGRhdGVQaWNrZXIubWF4RGF0ZSA9IG5ldyBEYXRlKDIwNDUsIDQsIDEyKTtcblxuICAgICAgICAgICAgbGV0IHRpbWVQaWNrZXI6IFRpbWVQaWNrZXIgPSA8VGltZVBpY2tlcj50aGlzLnRpbWVQaWNrZXJFbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgICAgICB0aW1lUGlja2VyLmhvdXIgPSBjdXJyZW50ZGF0ZS5nZXRIb3VycygpO1xuICAgICAgICAgICAgdGltZVBpY2tlci5taW51dGUgPSBjdXJyZW50ZGF0ZS5nZXRNaW51dGVzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgc3VibWl0KCkge1xuICAgICAgICBpZiAodGhpcy5pc0RhdGVUaW1lKSB7XG4gICAgICAgICAgICBsZXQgZGF0ZVBpY2tlcjogRGF0ZVBpY2tlciA9IDxEYXRlUGlja2VyPnRoaXMuZGF0ZVBpY2tlckVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgICAgICAgICAgIGxldCBzZWxlY3RlZERhdGUgPSBkYXRlUGlja2VyLmRhdGU7XG4gICAgICAgICAgICBsZXQgdGltZVBpY2tlcjogVGltZVBpY2tlciA9IDxUaW1lUGlja2VyPnRoaXMudGltZVBpY2tlckVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgICAgICAgICAgIGxldCBzZWxlY3RlZFRpbWUgPSB0aW1lUGlja2VyLnRpbWU7XG4gICAgICAgICAgICBsZXQgcmVzZXJ2ZVRpbWUgPSBuZXcgRGF0ZShzZWxlY3RlZERhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZERhdGUuZ2V0TW9udGgoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZERhdGUuZ2V0RGF0ZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkVGltZS5nZXRIb3VycygpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkVGltZS5nZXRNaW51dGVzKCkpO1xuICAgICAgICAgICAgdGhpcy5wYXJhbXMuY2xvc2VDYWxsYmFjayhyZXNlcnZlVGltZS50b0lTT1N0cmluZygpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCBwaWNrZXIgPSA8TGlzdFBpY2tlcj4gdGhpcy5ndWVzdFBpY2tlckVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgICAgICAgICAgIHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2sodGhpcy5ndWVzdEFycmF5W3BpY2tlci5zZWxlY3RlZEluZGV4XSlcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==