webpackJsonp(["new-venue.module"],{

/***/ "../../../../../src/app/views/new-venue/new-venue-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewVenueRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__new_venue_component__ = __webpack_require__("../../../../../src/app/views/new-venue/new-venue.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__new_venue_component__["a" /* NewVenueComponent */],
        data: {
            title: 'Venue'
        }
    }
];
var NewVenueRoutingModule = (function () {
    function NewVenueRoutingModule() {
    }
    return NewVenueRoutingModule;
}());
NewVenueRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
    })
], NewVenueRoutingModule);

//# sourceMappingURL=new-venue-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/views/new-venue/new-venue.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h2 #header></h2>\n      </div>\n      <div class=\"card-body\">\n        <form action=\"\" method=\"post\" enctype=\"multipart/form-data\" class=\"form-horizontal\">\n          <div class=\"form-group row\">\n            <label class=\"col-md-3 col-form-label\" >Name</label>\n            <div class=\"col-md-9\">\n              <input type=\"text\" id=\"text-input\" name=\"text-input\" class=\"form-control\" placeholder=\"Text\" [(ngModel)]=\"params.name\">\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <label class=\"col-md-3 col-form-label\" for=\"file-input\">Image</label>\n            <div class=\"col-sm-9 col-md-4\">\n              <div class=\"card\">\n                <div class=\"card-body\">\n                  <img [src]=\"customImage\" style=\"width: 100%;\" *ngIf=\"customImage != null\">\n                </div>\n                <div class=\"card-footer\">\n                  <input type=\"file\" (change)=\"fileChangeEvent($event)\" id=\"file-input\" name=\"file-input\" accept=\"image/*\">\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <label class=\"col-md-3 col-form-label\" for=\"text-input\">Schedule</label>\n            <div class=\"col-md-9\">\n              <tabset>\n                <tab *ngFor=\"let data of schedule\">\n                  <ng-template tabHeading>{{stringifyDays(data.weekday)}}&nbsp;<span *ngIf=\"data.isClose\" class=\"badge badge-danger\">Closed</span></ng-template>\n\n                  <div class=\"card\" [ngClass]=\"data.isClose ? 'card-accent-danger': ''\">\n                    <div class=\"card-body\">\n                      <div class=\"row\">\n                        <div class=\"form-group col-sm-6\">\n                          <div class=\"input-group\">\n                            <label for=\"start\">Start</label>\n                            <timepicker [(ngModel)]=\"data.openTime\" name=\"openTime{{data.weekday}}\"></timepicker>\n                          </div>\n                        </div>\n                        <div class=\"form-group col-sm-6\">\n                          <div class=\"input-group\">\n                            <label for=\"end\">End</label>\n                            <timepicker [(ngModel)]=\"data.closeTime\" name=\"closeTime{{data.weekday}}\"></timepicker>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"card-footer\">\n                      <label for=\"isClosed\">This day is closed?</label>\n                      <label class=\"switch switch-sm switch-text switch-danger float-right mb-0\">\n                        <input type=\"checkbox\" class=\"switch-input\" [(ngModel)]=\"data.isClose\" [checked]=\"data.isClose\" name=\"isClosed{{data.weekday}}\">\n                        <span class=\"switch-label\" data-on=\"Yes\" data-off=\"No\"></span>\n                        <span class=\"switch-handle\"></span>\n                      </label>\n                    </div>\n                  </div>\n                </tab>\n              </tabset>\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <label class=\"col-md-3 col-form-label\" for=\"text-input\">Coordinates</label>\n            <div class=\"col-md-9\">\n              <div class=\"row\">\n                <div class=\"form-group col-sm-4\">\n                  <label for=\"city\">Latitude</label>\n                  <input class=\"form-control\" id=\"city\" placeholder=\"Latitude\" maxlength=\"30\" [(ngModel)]=\"params.location.coordinates[0]\" name=\"latitude0\">\n                </div>\n                <div class=\"form-group col-sm-4\">\n                  <label for=\"postal-code\">Longitude</label>\n                  <input class=\"form-control\" id=\"postal-code\" placeholder=\"Longitude\" maxlength=\"30\" [(ngModel)]=\"params.location.coordinates[1]\" name=\"longitude0\">\n                </div>\n              </div>\n            </div>\n          </div>\n        </form>\n      </div>\n      <div class=\"card-footer\">\n        <button type=\"button\" class=\"btn btn-sm btn-primary\" style=\"color: #fff;\" (click)=\"saveFormData()\"><i class=\"fa fa-floppy-o\" style=\"color: #fff;\"></i> Add Venue</button>\n        <div *ngIf=\"success\" class=\"alert alert-success\">{{success}}</div>\n        <div *ngIf=\"error\" class=\"alert alert-danger\">{{error}}</div>\n      </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/views/new-venue/new-venue.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewVenueComponent; });
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




var NewVenueComponent = (function () {
    function NewVenueComponent(venueService, activatedRoute, modalService, router) {
        this.venueService = venueService;
        this.activatedRoute = activatedRoute;
        this.modalService = modalService;
        this.router = router;
        this.params = {
            name: '',
            radius: 30,
            location: {
                type: 'Point',
                coordinates: []
            },
            schedule: []
        };
        this.error = '';
        this.success = '';
        this.schedule = [];
        this.modalForAbout = false;
        this.myTime = new Date();
    }
    NewVenueComponent.prototype.ngOnInit = function () {
        this.header.nativeElement.innerHTML = 'New Venue';
        this.createFakeSchedule();
    };
    NewVenueComponent.prototype.stringifyDays = function (day) {
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
    NewVenueComponent.prototype.createFakeSchedule = function () {
        while (this.schedule.length < 7) {
            var day = {
                weekday: this.schedule.length + 1,
                openTime: new Date(),
                closeTime: new Date(),
                isClose: false
            };
            this.schedule.push(day);
        }
    };
    NewVenueComponent.prototype.fileChangeEvent = function (fileInput) {
        var _this = this;
        var reader = new FileReader();
        reader.onload = function (e) {
            _this.customImage = e.target.result;
        };
        reader.readAsDataURL(fileInput.target.files[0]);
        this.venueService.postNewImage(fileInput.target.files[0])
            .subscribe(function (response) {
            console.log(response);
            _this.params['image '] = response._id;
        });
    };
    NewVenueComponent.prototype.saveFormData = function () {
        var _this = this;
        var schedule = [];
        this.schedule.map(function (item) {
            if (!item.isClose) {
                schedule.push(item);
            }
        });
        this.params.schedule = schedule;
        this.venueService.postNewVenue(this.params)
            .subscribe(function (response) {
            _this.router.navigate(['venues']);
        }, function (err) {
            if (err.status === 401) {
                _this.venueService.logOut();
                window.location.reload();
            }
            var error = JSON.parse(err._body);
            _this.error = error.localizedError;
        });
    };
    NewVenueComponent.prototype.restartAlerts = function () {
        this.error = '';
        this.success = '';
    };
    return NewVenueComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('header'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], NewVenueComponent.prototype, "header", void 0);
NewVenueComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/views/new-venue/new-venue.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_venue_service__["a" /* VenueService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_venue_service__["a" /* VenueService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__["a" /* BsModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__["a" /* BsModalService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _e || Object])
], NewVenueComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=new-venue.component.js.map

/***/ }),

/***/ "../../../../../src/app/views/new-venue/new-venue.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewVenueModule", function() { return NewVenueModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__new_venue_component__ = __webpack_require__("../../../../../src/app/views/new-venue/new-venue.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_tabs__ = __webpack_require__("../../../../ngx-bootstrap/tabs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__new_venue_routing_module__ = __webpack_require__("../../../../../src/app/views/new-venue/new-venue-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var NewVenueModule = (function () {
    function NewVenueModule() {
    }
    return NewVenueModule;
}());
NewVenueModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_6__new_venue_routing_module__["a" /* NewVenueRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_tabs__["a" /* TabsModule */],
            __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap__["b" /* TimepickerModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_1__new_venue_component__["a" /* NewVenueComponent */]]
    })
], NewVenueModule);

//# sourceMappingURL=new-venue.module.js.map

/***/ })

});
//# sourceMappingURL=new-venue.module.chunk.js.map