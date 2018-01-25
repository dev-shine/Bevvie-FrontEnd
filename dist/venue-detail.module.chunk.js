webpackJsonp(["venue-detail.module"],{

/***/ "../../../../../src/app/views/venues-detail/venue-detail-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VenueDetailRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__venue_detail_component__ = __webpack_require__("../../../../../src/app/views/venues-detail/venue-detail.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__venue_detail_component__["a" /* VenueDetailComponent */],
        data: {
            title: 'Venue'
        }
    }
];
var VenueDetailRoutingModule = (function () {
    function VenueDetailRoutingModule() {
    }
    return VenueDetailRoutingModule;
}());
VenueDetailRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
    })
], VenueDetailRoutingModule);

//# sourceMappingURL=venue-detail-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/views/venues-detail/venue-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h2 #header></h2>\n      </div>\n      <div class=\"card-body\" *ngIf=\"venue\">\n        <form action=\"\" method=\"post\" enctype=\"multipart/form-data\" class=\"form-horizontal\">\n          <div class=\"form-group row\">\n            <label class=\"col-md-3 col-form-label\" >Name</label>\n            <div class=\"col-md-9\">\n              <input type=\"text\" id=\"text-input\" name=\"text-input\" class=\"form-control\" placeholder=\"Text\" [(ngModel)]=\"venue.name\">\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <label class=\"col-md-3 col-form-label\" for=\"file-input\">Image</label>\n            <div class=\"col-sm-9 col-md-4\">\n              <div class=\"card\">\n                <div class=\"card-body\">\n                  <img src=\"{{venue.image.s3.url}}\" style=\"width: 100%;\" *ngIf=\"customImage == null && venue.image\">\n                  <img [src]=\"customImage\" style=\"width: 100%;\" *ngIf=\"customImage != null\">\n                </div>\n                <div class=\"card-footer\">\n                  <input type=\"file\" (change)=\"fileChangeEvent($event)\" id=\"file-input\" name=\"file-input\" accept=\"image/*\">\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <label class=\"col-md-3 col-form-label\" for=\"text-input\">Schedule</label>\n            <div class=\"col-md-9\">\n              <tabset>\n                <tab *ngFor=\"let data of schedule\">\n                  <ng-template tabHeading>{{stringifyDays(data.weekday)}}&nbsp;<span *ngIf=\"data.isClose\" class=\"badge badge-danger\">Closed</span></ng-template>\n\n                  <div class=\"card\" [ngClass]=\"data.isClose ? 'card-accent-danger': ''\">\n                    <div class=\"card-body\">\n                      <div class=\"row\">\n                        <div class=\"form-group col-sm-6\">\n                          <div class=\"input-group\">\n                            <label for=\"start\">Start</label>\n                            <timepicker [(ngModel)]=\"data.openTime\" name=\"openTime{{data.weekday}}\"></timepicker>\n                          </div>\n                        </div>\n                        <div class=\"form-group col-sm-6\">\n                          <div class=\"input-group\">\n                            <label for=\"end\">End</label>\n                            <timepicker [(ngModel)]=\"data.closeTime\" name=\"closeTime{{data.weekday}}\"></timepicker>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"card-footer\">\n                      <label for=\"isClosed\">This day is closed?</label>\n                      <label class=\"switch switch-sm switch-text switch-danger float-right mb-0\">\n                        <input type=\"checkbox\" class=\"switch-input\" [(ngModel)]=\"data.isClose\" [checked]=\"data.isClose\" name=\"isClosed{{data.weekday}}\">\n                        <span class=\"switch-label\" data-on=\"Yes\" data-off=\"No\"></span>\n                        <span class=\"switch-handle\"></span>\n                      </label>\n                    </div>\n                  </div>\n                </tab>\n              </tabset>\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <label class=\"col-md-3 col-form-label\" for=\"text-input\">Coordinates</label>\n            <div class=\"col-md-9\">\n              <div class=\"row\">\n                <div class=\"form-group col-sm-3\">\n                  <label for=\"city\">Latitude</label>\n                  <input class=\"form-control\" id=\"city\" placeholder=\"Latitude\" maxlength=\"30\" [(ngModel)]=\"venue.location.coordinates[0]\" name=\"latitude{{venue._id}}\">\n                </div>\n                <div class=\"form-group col-sm-3\">\n                  <label for=\"postal-code\">Longitude</label>\n                  <input class=\"form-control\" id=\"postal-code\" placeholder=\"Longitude\" maxlength=\"30\" [(ngModel)]=\"venue.location.coordinates[1]\" name=\"longitude{{venue._id}}\">\n                </div>\n              </div>\n              <div class=\"form-group col-sm-3\">\n                <label for=\"maps-link\"> </label>\n                <a id=\"googleMapsLink\" target=\"_blank\" href=\"https://www.google.es/maps/dir//{{venue.location.coordinates[1]}},{{venue.location.coordinates[0]}}/@{{venue.location.coordinates[1]}},{{venue.location.coordinates[0]}},17z/data=!3m1!4b1\">View on Google Maps</a>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"text-input\">Radius</label>\n              <div class=\"col-md-9\">\n                <div class=\"row\">\n                  <div class=\"form-group col-sm-12\">\n                    <label for=\"city\">Radius where a user can check in (meters)</label>\n                  </div>\n                  <div class=\"col-sm-3\">\n                    <input class=\"form-control\" id=\"city\" type=\"number\" placeholder=\"Radius\" maxlength=\"30\" [(ngModel)]=\"venue.radius\" name=\"radius{{venue._id}}\">\n                  </div>\n                </div>\n              </div>\n          </div>\n        </form>\n      </div>\n      <div class=\"card-footer\">\n        <button type=\"button\" class=\"btn btn-sm btn-primary\" style=\"color: #fff;\" (click)=\"saveFormData()\"><i class=\"fa fa-floppy-o\" style=\"color: #fff;\"></i> Save Changes</button>\n        <button type=\"button\" class=\"btn btn-sm\" [ngClass]=\"!remove ? 'btn-danger': 'btn-outline-danger'\" (click)=\"deleteVenue()\"><i class=\"fa fa-trash-o\"></i> {{!remove ? 'Delete Venue' : 'Are you sure you want to delete this venue?'}}</button>\n        <div *ngIf=\"success\" class=\"alert alert-success\">{{success}}</div>\n        <div *ngIf=\"error\" class=\"alert alert-danger\">{{error}}</div>\n      </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/views/venues-detail/venue-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VenueDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_venue_service__ = __webpack_require__("../../../../../src/app/_services/venue.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VenueDetailComponent = (function () {
    function VenueDetailComponent(venueService, activatedRoute, modalService, router) {
        this.venueService = venueService;
        this.activatedRoute = activatedRoute;
        this.modalService = modalService;
        this.router = router;
        this.schedule = [];
        this.error = '';
        this.success = '';
        this.remove = false;
        this.modalForAbout = false;
        this.myTime = new Date();
    }
    VenueDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            var venueId = params['venueId'];
            _this.venueService.getVenueById(venueId)
                .subscribe(function (response) {
                _this.venue = response;
                _this.header.nativeElement.innerHTML = _this.venue.name;
                _this.refillSchedule();
            }, function (err) {
                if (err.status === 401) {
                    _this.venueService.logOut();
                    window.location.reload();
                }
            });
        });
    };
    VenueDetailComponent.prototype.stringifyDays = function (day) {
        switch (day) {
            case 1:
                return 'Mon';
            case 2:
                return 'Tue';
            case 3:
                return 'Wed';
            case 4:
                return 'Thu';
            case 5:
                return 'Fri';
            case 6:
                return 'Sat';
            case 7:
                return 'Sun';
        }
    };
    VenueDetailComponent.prototype.refillSchedule = function () {
        this.schedule = this.venue.schedule;
        var days = this.schedule.map(function (item) { return item.weekday; });
        while (this.schedule.length < 7) {
            for (var i = 1; i <= 7; i++) {
                if (days.indexOf(i) == -1) {
                    var closeDay = {
                        weekday: i,
                        openTime: new Date(),
                        closeTime: new Date(),
                        isClose: true
                    };
                    this.schedule.push(closeDay);
                }
                this.schedule.sort(function (a, b) {
                    return a.weekday - b.weekday;
                });
            }
        }
        for (var _i = 0, _a = this.schedule; _i < _a.length; _i++) {
            var day = _a[_i];
            if (day.isClose == null) {
                this.schedule[i]['isClose'] = false;
            }
        }
    };
    VenueDetailComponent.prototype.fileChangeEvent = function (fileInput) {
        var _this = this;
        this.restartAlerts();
        var reader = new FileReader();
        reader.onload = function (e) {
            _this.customImage = e.target.result;
        };
        reader.readAsDataURL(fileInput.target.files[0]);
        this.venueService.postNewImage(fileInput.target.files[0])
            .subscribe(function (response) {
            _this.venue.image = response;
            _this.success = 'Venue image updated correctly';
        }, function (err) {
            if (err.status === 401) {
                _this.venueService.logOut();
                window.location.reload();
            }
            var error = JSON.parse(err._body);
            _this.error = error.localizedError;
        });
    };
    VenueDetailComponent.prototype.saveFormData = function () {
        var _this = this;
        this.restartAlerts();
        var schedule = [];
        this.schedule.map(function (item) {
            if (!item.isClose) {
                schedule.push(item);
            }
        });
        var params = {
            name: this.venue.name,
            image: this.venue.image._id,
            radius: this.venue.radius,
            location: this.venue.location,
            schedule: schedule
        };
        this.venueService.postVenueUpdate(this.venue._id, params)
            .subscribe(function (response) {
            _this.success = 'Venue data has been updated correctly';
        }, function (err) {
            if (err.status === 401) {
                _this.venueService.logOut();
                window.location.reload();
            }
            var error = JSON.parse(err._body);
            _this.error = error.localizedError;
        });
    };
    VenueDetailComponent.prototype.deleteVenue = function () {
        var _this = this;
        if (this.remove) {
            this.venueService.deleteVenue(this.venue._id)
                .subscribe(function (response) {
                _this.router.navigate(['venues']);
            });
        }
        else {
            this.remove = true;
        }
    };
    VenueDetailComponent.prototype.restartAlerts = function () {
        this.error = '';
        this.success = '';
    };
    return VenueDetailComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('header'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], VenueDetailComponent.prototype, "header", void 0);
VenueDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/views/venues-detail/venue-detail.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_venue_service__["a" /* VenueService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_venue_service__["a" /* VenueService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__["a" /* BsModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__["a" /* BsModalService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _e || Object])
], VenueDetailComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=venue-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/views/venues-detail/venue-detail.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VenueDetailModule", function() { return VenueDetailModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__venue_detail_component__ = __webpack_require__("../../../../../src/app/views/venues-detail/venue-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__venue_detail_routing_module__ = __webpack_require__("../../../../../src/app/views/venues-detail/venue-detail-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_tabs__ = __webpack_require__("../../../../ngx-bootstrap/tabs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var VenueDetailModule = (function () {
    function VenueDetailModule() {
    }
    return VenueDetailModule;
}());
VenueDetailModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__venue_detail_routing_module__["a" /* VenueDetailRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_tabs__["a" /* TabsModule */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__["b" /* TimepickerModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_1__venue_detail_component__["a" /* VenueDetailComponent */]]
    })
], VenueDetailModule);

//# sourceMappingURL=venue-detail.module.js.map

/***/ })

});
//# sourceMappingURL=venue-detail.module.chunk.js.map