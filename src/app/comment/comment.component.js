"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var CommentComponent = /** @class */ (function () {
    function CommentComponent(formBuilder, params) {
        this.formBuilder = formBuilder;
        this.params = params;
        this.comment = this.formBuilder.group({
            rating: [1, forms_1.Validators.required],
            author: ['', forms_1.Validators.required],
            comment: ['', forms_1.Validators.required]
        });
    }
    CommentComponent.prototype.ngOnInit = function () {
    };
    CommentComponent.prototype.onAuthorChange = function (args) {
        var textField = args.object;
        this.comment.patchValue({ author: textField.text });
    };
    CommentComponent.prototype.onRatingChange = function (args) {
        var slider = args.object;
        this.comment.patchValue({ rating: slider.value });
    };
    CommentComponent.prototype.onCommentChange = function (args) {
        var textField = args.object;
        this.comment.patchValue({ comment: textField.text });
    };
    CommentComponent.prototype.submit = function () {
        this.params.closeCallback(this.comment.value);
    };
    CommentComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: './comment.component.html'
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder,
            modal_dialog_1.ModalDialogParams])
    ], CommentComponent);
    return CommentComponent;
}());
exports.CommentComponent = CommentComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb21tZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUN6RSx3Q0FBa0U7QUFHbEUsa0VBQXNFO0FBTXRFO0lBSUksMEJBQW9CLFdBQXdCLEVBQ3hCLE1BQXlCO1FBRHpCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLFdBQU0sR0FBTixNQUFNLENBQW1CO1FBQ3pDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFDbEMsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFLGtCQUFVLENBQUMsUUFBUSxDQUFDO1lBQ2hDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxrQkFBVSxDQUFDLFFBQVEsQ0FBQztZQUNqQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsa0JBQVUsQ0FBQyxRQUFRLENBQUM7U0FDckMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELG1DQUFRLEdBQVI7SUFFQSxDQUFDO0lBRUQseUNBQWMsR0FBZCxVQUFlLElBQUk7UUFDZixJQUFJLFNBQVMsR0FBYyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRCx5Q0FBYyxHQUFkLFVBQWUsSUFBSTtRQUNmLElBQUksTUFBTSxHQUFXLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDakMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVELDBDQUFlLEdBQWYsVUFBZ0IsSUFBSTtRQUNoQixJQUFJLFNBQVMsR0FBYyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFHTSxpQ0FBTSxHQUFiO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBbkNRLGdCQUFnQjtRQUo1QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSwwQkFBMEI7U0FDMUMsQ0FBQzt5Q0FLbUMsbUJBQVc7WUFDaEIsZ0NBQWlCO09BTHBDLGdCQUFnQixDQW9DNUI7SUFBRCx1QkFBQztDQUFBLEFBcENELElBb0NDO0FBcENZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9yc30gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQge1RleHRGaWVsZH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvdGV4dC1maWVsZFwiO1xuaW1wb3J0IHsgU2xpZGVyIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvc2xpZGVyXCI7XG5pbXBvcnQgeyBNb2RhbERpYWxvZ1BhcmFtcyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL21vZGFsLWRpYWxvZyc7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2NvbW1lbnQuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIENvbW1lbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgY29tbWVudDogRm9ybUdyb3VwO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBwYXJhbXM6IE1vZGFsRGlhbG9nUGFyYW1zKSB7XG4gICAgICAgIHRoaXMuY29tbWVudCA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgICAgICAgcmF0aW5nOiBbMSwgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICAgICAgICBhdXRob3I6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICAgICAgICBjb21tZW50OiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuXG4gICAgfVxuXG4gICAgb25BdXRob3JDaGFuZ2UoYXJncykge1xuICAgICAgICBsZXQgdGV4dEZpZWxkID0gPFRleHRGaWVsZD5hcmdzLm9iamVjdDtcbiAgICAgICAgdGhpcy5jb21tZW50LnBhdGNoVmFsdWUoe2F1dGhvcjogdGV4dEZpZWxkLnRleHR9KTtcbiAgICB9XG5cbiAgICBvblJhdGluZ0NoYW5nZShhcmdzKSB7XG4gICAgICAgIGxldCBzbGlkZXIgPSA8U2xpZGVyPmFyZ3Mub2JqZWN0O1xuICAgICAgICB0aGlzLmNvbW1lbnQucGF0Y2hWYWx1ZSh7IHJhdGluZzogc2xpZGVyLnZhbHVlIH0pO1xuICAgIH1cblxuICAgIG9uQ29tbWVudENoYW5nZShhcmdzKSB7XG4gICAgICAgIGxldCB0ZXh0RmllbGQgPSA8VGV4dEZpZWxkPmFyZ3Mub2JqZWN0O1xuICAgICAgICB0aGlzLmNvbW1lbnQucGF0Y2hWYWx1ZSh7Y29tbWVudDogdGV4dEZpZWxkLnRleHR9KTtcbiAgICB9XG4gICAgICAgIFxuXG4gICAgcHVibGljIHN1Ym1pdCgpIHtcbiAgICAgICAgdGhpcy5wYXJhbXMuY2xvc2VDYWxsYmFjayh0aGlzLmNvbW1lbnQudmFsdWUpO1xuICAgIH1cbn1cbiJdfQ==