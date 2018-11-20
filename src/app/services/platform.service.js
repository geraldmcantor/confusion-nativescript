"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_1 = require("platform");
var connectivity = require("connectivity");
var rxjs_1 = require("rxjs");
var DeviceInfo = /** @class */ (function () {
    function DeviceInfo(model, deviceType, os, osVersion, sdkVersion, language, manufacturer, uuid) {
        this.model = model;
        this.deviceType = deviceType;
        this.os = os;
        this.osVersion = osVersion;
        this.sdkVersion = sdkVersion;
        this.language = language;
        this.manufacturer = manufacturer;
        this.uuid = uuid;
    }
    return DeviceInfo;
}());
var ScreenInfo = /** @class */ (function () {
    function ScreenInfo(heightDIPs, heightPixels, scale, widthDIPs, widthPixels) {
        this.heightDIPs = heightDIPs;
        this.heightPixels = heightPixels;
        this.scale = scale;
        this.widthDIPs = widthDIPs;
        this.widthPixels = widthPixels;
    }
    return ScreenInfo;
}());
var PlatformService = /** @class */ (function () {
    function PlatformService() {
        this.deviceInformation = new DeviceInfo(platform_1.device.model, platform_1.device.deviceType, platform_1.device.os, platform_1.device.osVersion, platform_1.device.sdkVersion, platform_1.device.language, platform_1.device.manufacturer, platform_1.device.uuid);
        this.screenInformation = new ScreenInfo(platform_1.screen.mainScreen.heightDIPs, platform_1.screen.mainScreen.heightPixels, platform_1.screen.mainScreen.scale, platform_1.screen.mainScreen.widthDIPs, platform_1.screen.mainScreen.widthPixels);
        var connectionType = connectivity.getConnectionType();
        switch (connectionType) {
            case connectivity.connectionType.none:
                this.connectionType = "None";
                break;
            case connectivity.connectionType.wifi:
                this.connectionType = "Wi-Fi";
                break;
            case connectivity.connectionType.mobile:
                this.connectionType = "Mobile";
                break;
            default:
                break;
        }
    }
    PlatformService.prototype.isAndroid = function () {
        return platform_1.isAndroid;
    };
    PlatformService.prototype.isIOS = function () {
        return platform_1.isIOS;
    };
    PlatformService.prototype.screenWidthDIP = function () {
        return this.screenInformation.widthDIPs;
    };
    PlatformService.prototype.networkConnectionType = function () {
        return this.connectionType;
    };
    PlatformService.prototype.startMonitoringNetwork = function () {
        var _this = this;
        return rxjs_1.Observable.create(function (observer) {
            connectivity.startMonitoring(function (newConnectionType) {
                switch (newConnectionType) {
                    case connectivity.connectionType.none:
                        _this.connectionType = "None";
                        observer.next('Connection type changed to none.');
                        break;
                    case connectivity.connectionType.wifi:
                        _this.connectionType = "Wi-Fi";
                        observer.next('Connection type changed to WiFi.');
                        break;
                    case connectivity.connectionType.mobile:
                        _this.connectionType = "Mobile";
                        observer.next('Connection type changed to mobile.');
                        break;
                    default:
                        break;
                }
            });
        });
    };
    PlatformService.prototype.stopMonitoringNetwork = function () {
        connectivity.stopMonitoring();
    };
    PlatformService.prototype.printPlatformInfo = function () {
        console.log('This device model is ' + this.deviceInformation.model);
        console.log('This device OS is ' + this.deviceInformation.os + ' ' + this.deviceInformation.osVersion);
        console.log('This device type is ' + this.deviceInformation.deviceType);
        console.log('This device screen size is ' + this.screenInformation.widthPixels + ' X ' + this.screenInformation.heightPixels + ' pixels');
        console.log('This device is connected to ' + this.connectionType);
    };
    PlatformService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], PlatformService);
    return PlatformService;
}());
exports.PlatformService = PlatformService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhdGZvcm0uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBsYXRmb3JtLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MscUNBQTREO0FBQzVELDJDQUE2QztBQUM3Qyw2QkFBa0M7QUFFbEM7SUFFSSxvQkFDVyxLQUFhLEVBQ2IsVUFBa0IsRUFDbEIsRUFBVSxFQUNWLFNBQWlCLEVBQ2pCLFVBQWtCLEVBQ2xCLFFBQWdCLEVBQ2hCLFlBQW9CLEVBQ3BCLElBQVk7UUFQWixVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQ2IsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUNsQixPQUFFLEdBQUYsRUFBRSxDQUFRO1FBQ1YsY0FBUyxHQUFULFNBQVMsQ0FBUTtRQUNqQixlQUFVLEdBQVYsVUFBVSxDQUFRO1FBQ2xCLGFBQVEsR0FBUixRQUFRLENBQVE7UUFDaEIsaUJBQVksR0FBWixZQUFZLENBQVE7UUFDcEIsU0FBSSxHQUFKLElBQUksQ0FBUTtJQUNuQixDQUFDO0lBQ1QsaUJBQUM7QUFBRCxDQUFDLEFBWkQsSUFZQztBQUVEO0lBRUksb0JBQ1csVUFBa0IsRUFDbEIsWUFBb0IsRUFDcEIsS0FBYSxFQUNiLFNBQWlCLEVBQ2pCLFdBQW1CO1FBSm5CLGVBQVUsR0FBVixVQUFVLENBQVE7UUFDbEIsaUJBQVksR0FBWixZQUFZLENBQVE7UUFDcEIsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUNiLGNBQVMsR0FBVCxTQUFTLENBQVE7UUFDakIsZ0JBQVcsR0FBWCxXQUFXLENBQVE7SUFDMUIsQ0FBQztJQUNULGlCQUFDO0FBQUQsQ0FBQyxBQVRELElBU0M7QUFHRDtJQU1JO1FBQ0ksSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksVUFBVSxDQUNuQyxpQkFBTSxDQUFDLEtBQUssRUFDWixpQkFBTSxDQUFDLFVBQVUsRUFDakIsaUJBQU0sQ0FBQyxFQUFFLEVBQ1QsaUJBQU0sQ0FBQyxTQUFTLEVBQ2hCLGlC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LEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN2RyxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN4RSxPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDLENBQUM7UUFDMUksT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQTVGUSxlQUFlO1FBRDNCLGlCQUFVLEVBQUU7O09BQ0EsZUFBZSxDQTZGM0I7SUFBRCxzQkFBQztDQUFBLEFBN0ZELElBNkZDO0FBN0ZZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNBbmRyb2lkLCBpc0lPUywgZGV2aWNlLCBzY3JlZW4gfSBmcm9tICdwbGF0Zm9ybSc7XG5pbXBvcnQgKiBhcyBjb25uZWN0aXZpdHkgZnJvbSAnY29ubmVjdGl2aXR5JztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuY2xhc3MgRGV2aWNlSW5mbyB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIG1vZGVsOiBzdHJpbmcsXG4gICAgICAgIHB1YmxpYyBkZXZpY2VUeXBlOiBzdHJpbmcsXG4gICAgICAgIHB1YmxpYyBvczogc3RyaW5nLFxuICAgICAgICBwdWJsaWMgb3NWZXJzaW9uOiBzdHJpbmcsXG4gICAgICAgIHB1YmxpYyBzZGtWZXJzaW9uOiBzdHJpbmcsXG4gICAgICAgIHB1YmxpYyBsYW5ndWFnZTogc3RyaW5nLFxuICAgICAgICBwdWJsaWMgbWFudWZhY3R1cmVyOiBzdHJpbmcsXG4gICAgICAgIHB1YmxpYyB1dWlkOiBzdHJpbmdcbiAgICApIHsgfVxufVxuXG5jbGFzcyBTY3JlZW5JbmZvIHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgaGVpZ2h0RElQczogbnVtYmVyLFxuICAgICAgICBwdWJsaWMgaGVpZ2h0UGl4ZWxzOiBudW1iZXIsXG4gICAgICAgIHB1YmxpYyBzY2FsZTogbnVtYmVyLFxuICAgICAgICBwdWJsaWMgd2lkdGhESVBzOiBudW1iZXIsXG4gICAgICAgIHB1YmxpYyB3aWR0aFBpeGVsczogbnVtYmVyXG4gICAgKSB7IH1cbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBsYXRmb3JtU2VydmljZSB7XG5cbiAgICBwdWJsaWMgZGV2aWNlSW5mb3JtYXRpb246IERldmljZUluZm87XG4gICAgcHVibGljIHNjcmVlbkluZm9ybWF0aW9uOiBTY3JlZW5JbmZvO1xuICAgIHB1YmxpYyBjb25uZWN0aW9uVHlwZTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZGV2aWNlSW5mb3JtYXRpb24gPSBuZXcgRGV2aWNlSW5mbyhcbiAgICAgICAgICAgIGRldmljZS5tb2RlbCxcbiAgICAgICAgICAgIGRldmljZS5kZXZpY2VUeXBlLFxuICAgICAgICAgICAgZGV2aWNlLm9zLFxuICAgICAgICAgICAgZGV2aWNlLm9zVmVyc2lvbixcbiAgICAgICAgICAgIGRldmljZS5zZGtWZXJzaW9uLFxuICAgICAgICAgICAgZGV2aWNlLmxhbmd1YWdlLFxuICAgICAgICAgICAgZGV2aWNlLm1hbnVmYWN0dXJlcixcbiAgICAgICAgICAgIGRldmljZS51dWlkXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5zY3JlZW5JbmZvcm1hdGlvbiA9IG5ldyBTY3JlZW5JbmZvKFxuICAgICAgICAgICAgc2NyZWVuLm1haW5TY3JlZW4uaGVpZ2h0RElQcyxcbiAgICAgICAgICAgIHNjcmVlbi5tYWluU2NyZWVuLmhlaWdodFBpeGVscyxcbiAgICAgICAgICAgIHNjcmVlbi5tYWluU2NyZWVuLnNjYWxlLFxuICAgICAgICAgICAgc2NyZWVuLm1haW5TY3JlZW4ud2lkdGhESVBzLFxuICAgICAgICAgICAgc2NyZWVuLm1haW5TY3JlZW4ud2lkdGhQaXhlbHNcbiAgICAgICAgKTtcblxuICAgICAgICBsZXQgY29ubmVjdGlvblR5cGUgPSBjb25uZWN0aXZpdHkuZ2V0Q29ubmVjdGlvblR5cGUoKTtcbiAgICAgICAgc3dpdGNoIChjb25uZWN0aW9uVHlwZSkge1xuICAgICAgICAgICAgY2FzZSBjb25uZWN0aXZpdHkuY29ubmVjdGlvblR5cGUubm9uZTpcbiAgICAgICAgICAgICAgICB0aGlzLmNvbm5lY3Rpb25UeXBlID0gXCJOb25lXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGNvbm5lY3Rpdml0eS5jb25uZWN0aW9uVHlwZS53aWZpOlxuICAgICAgICAgICAgICAgIHRoaXMuY29ubmVjdGlvblR5cGUgPSBcIldpLUZpXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGNvbm5lY3Rpdml0eS5jb25uZWN0aW9uVHlwZS5tb2JpbGU6XG4gICAgICAgICAgICAgICAgdGhpcy5jb25uZWN0aW9uVHlwZSA9IFwiTW9iaWxlXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGlzQW5kcm9pZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIGlzQW5kcm9pZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgaXNJT1MoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBpc0lPUztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2NyZWVuV2lkdGhESVAoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NyZWVuSW5mb3JtYXRpb24ud2lkdGhESVBzO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZXR3b3JrQ29ubmVjdGlvblR5cGUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdGlvblR5cGU7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXJ0TW9uaXRvcmluZ05ldHdvcmsoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcikgPT4ge1xuXG4gICAgICAgICAgICBjb25uZWN0aXZpdHkuc3RhcnRNb25pdG9yaW5nKChuZXdDb25uZWN0aW9uVHlwZTogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChuZXdDb25uZWN0aW9uVHlwZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIGNvbm5lY3Rpdml0eS5jb25uZWN0aW9uVHlwZS5ub25lOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25uZWN0aW9uVHlwZSA9IFwiTm9uZVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dCgnQ29ubmVjdGlvbiB0eXBlIGNoYW5nZWQgdG8gbm9uZS4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIGNvbm5lY3Rpdml0eS5jb25uZWN0aW9uVHlwZS53aWZpOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25uZWN0aW9uVHlwZSA9IFwiV2ktRmlcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLm5leHQoJ0Nvbm5lY3Rpb24gdHlwZSBjaGFuZ2VkIHRvIFdpRmkuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBjb25uZWN0aXZpdHkuY29ubmVjdGlvblR5cGUubW9iaWxlOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25uZWN0aW9uVHlwZSA9IFwiTW9iaWxlXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KCdDb25uZWN0aW9uIHR5cGUgY2hhbmdlZCB0byBtb2JpbGUuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RvcE1vbml0b3JpbmdOZXR3b3JrKCkge1xuICAgICAgICBjb25uZWN0aXZpdHkuc3RvcE1vbml0b3JpbmcoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcHJpbnRQbGF0Zm9ybUluZm8oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdUaGlzIGRldmljZSBtb2RlbCBpcyAnKyB0aGlzLmRldmljZUluZm9ybWF0aW9uLm1vZGVsKTtcbiAgICAgICAgY29uc29sZS5sb2coJ1RoaXMgZGV2aWNlIE9TIGlzICcgKyB0aGlzLmRldmljZUluZm9ybWF0aW9uLm9zICsgJyAnICsgdGhpcy5kZXZpY2VJbmZvcm1hdGlvbi5vc1ZlcnNpb24pO1xuICAgICAgICBjb25zb2xlLmxvZygnVGhpcyBkZXZpY2UgdHlwZSBpcyAnICsgdGhpcy5kZXZpY2VJbmZvcm1hdGlvbi5kZXZpY2VUeXBlKTtcbiAgICAgICAgY29uc29sZS5sb2coJ1RoaXMgZGV2aWNlIHNjcmVlbiBzaXplIGlzICcgKyB0aGlzLnNjcmVlbkluZm9ybWF0aW9uLndpZHRoUGl4ZWxzICsgJyBYICcgKyB0aGlzLnNjcmVlbkluZm9ybWF0aW9uLmhlaWdodFBpeGVscyArICcgcGl4ZWxzJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdUaGlzIGRldmljZSBpcyBjb25uZWN0ZWQgdG8gJyArIHRoaXMuY29ubmVjdGlvblR5cGUpO1xuICAgIH1cbn1cbiJdfQ==