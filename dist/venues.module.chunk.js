webpackJsonp(["venues.module"],{

/***/ "../../../../../src/app/views/venues/venues-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VenuesRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__venues_component__ = __webpack_require__("../../../../../src/app/views/venues/venues.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__venues_component__["a" /* VenuesComponent */],
        data: {
            title: 'Venues'
        }
    }
];
var VenuesRoutingModule = (function () {
    function VenuesRoutingModule() {
    }
    return VenuesRoutingModule;
}());
VenuesRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
    })
], VenuesRoutingModule);

//# sourceMappingURL=venues-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/views/venues/venues.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"fa fa-align-justify\"></i> Venues\n          <button type=\"button\" class=\"btn btn-success\" style=\"float: right;\" [routerLink]=\"['/venues/new']\"><i class=\"fa fa-plus\"></i>&nbsp; Add New Venue</button>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"form-group\">\n            <label class=\"col-form-label\">Filter by</label>\n            <div class=\"input-group\">\n              <span class=\"input-group-addon\">Name</span>\n              <input #filteredName type=\"text\" id=\"name\" name=\"name\" (change)=\"filterVenuesByName(filteredName.value)\" class=\"form-control\">\n              <span class=\"input-group-addon\"><i class=\"fa fa-search\"></i></span>\n            </div>\n          </div>\n          <table class=\"table\">\n            <thead>\n            <tr>\n              <th>Picture</th>\n              <th (click)=\"getPageWithSort('name')\" style=\"cursor: pointer\">Name</th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr *ngFor=\"let venue of venues\" [routerLink]=\"['/venues/detail', venue._id]\">\n              <td>\n                <div class=\"avatar\">\n                  <img src=\"{{venue.image.s3.url}}\" *ngIf=\"venue.image != null\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\" src=\"{{venue.image.s3.url}}\">\n                  <img src=\"../../../assets/img/logo-symbol.png\" *ngIf=\"venue.image == null\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\" src=\"../../../assets/img/logo-symbol.png\">\n                </div>\n              </td>\n              <td>{{venue.name}}</td>\n            </tr>\n            </tbody>\n          </table>\n          <ul class=\"pagination\">\n            <li class=\"page-item\" *ngFor=\"let n of paginator\" [ngClass]=\" n == currentPage ? 'active' : ''\">\n              <a class=\"page-link\" (click)=\"getPage(n)\">{{n}}</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/views/venues/venues.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VenuesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_venue_service__ = __webpack_require__("../../../../../src/app/_services/venue.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_qs__ = __webpack_require__("../../../../qs/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_qs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_qs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VenuesComponent = (function () {
    function VenuesComponent(venueService) {
        this.venueService = venueService;
        this.venues = [];
        this.currentPage = 0;
        this.pageOffset = 0;
        this.numberPages = 0;
        this.totalUsers = 0;
        this.paginator = [];
        this.params = {};
    }
    VenuesComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get users from secure api end point
        this.venueService.getVenues()
            .subscribe(function (response) {
            _this.venues = response.docs;
            _this.bindPage(response);
        });
    };
    VenuesComponent.prototype.bindPage = function (response) {
        this.currentPage = response.page;
        this.pageOffset = response.offset;
        this.totalUsers = response.total;
        this.numberPages = response.pages;
        this.generatePaginator();
    };
    VenuesComponent.prototype.generatePaginator = function () {
        this.paginator = [];
        var maxValue = this.currentPage + 2 < this.numberPages ? this.currentPage + 2 : this.numberPages;
        var minValue = this.currentPage - 2 > 0 ? this.currentPage - 2 : 1;
        for (var i = minValue; i <= maxValue; i++) {
            this.paginator.push(i);
        }
    };
    VenuesComponent.prototype.checkOrder = function (filter) {
        switch (filter) {
            case 'name':
                this.nameSort = this.nameSort == 'desc' ? 'asc' : 'desc';
                return this.nameSort;
            default:
                return 'asc';
        }
    };
    VenuesComponent.prototype.filterVenuesByName = function (newFilter) {
        var _this = this;
        this.params.name = newFilter;
        this.params.page = 1;
        this.venueService.getVenuesWithParams(this.params)
            .subscribe(function (response) {
            _this.venues = response.docs;
            _this.bindPage(response);
        });
    };
    VenuesComponent.prototype.getPage = function (page) {
        var _this = this;
        this.params.page = page;
        var codifiedparams = __WEBPACK_IMPORTED_MODULE_2_qs__["stringify"](this.params);
        this.venueService.getVenuesWithParams(this.decodeToAscii(codifiedparams))
            .subscribe(function (response) {
            _this.venues = response.docs;
            _this.bindPage(response);
        });
    };
    VenuesComponent.prototype.getPageWithSort = function (filter) {
        var _this = this;
        this.params.sort = {
            'field': filter,
            'order': this.checkOrder(filter)
        };
        var codifiedparams = __WEBPACK_IMPORTED_MODULE_2_qs__["stringify"](this.params);
        this.venueService.getVenuesWithParams(this.decodeToAscii(codifiedparams))
            .subscribe(function (response) {
            _this.venues = response.docs;
            _this.bindPage(response);
        });
    };
    VenuesComponent.prototype.decodeToAscii = function (codifiedparams) {
        while (codifiedparams.split('%5B').length > 1 && codifiedparams.split('%5D').length > 1) {
            codifiedparams = codifiedparams.replace('%5B', '[');
            codifiedparams = codifiedparams.replace('%5D', ']');
        }
        return codifiedparams;
    };
    return VenuesComponent;
}());
VenuesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/views/venues/venues.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_venue_service__["a" /* VenueService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_venue_service__["a" /* VenueService */]) === "function" && _a || Object])
], VenuesComponent);

var _a;
//# sourceMappingURL=venues.component.js.map

/***/ }),

/***/ "../../../../../src/app/views/venues/venues.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VenuesModule", function() { return VenuesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__venues_component__ = __webpack_require__("../../../../../src/app/views/venues/venues.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__venues_routing_module__ = __webpack_require__("../../../../../src/app/views/venues/venues-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var VenuesModule = (function () {
    function VenuesModule() {
    }
    return VenuesModule;
}());
VenuesModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__venues_routing_module__["a" /* VenuesRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_1__venues_component__["a" /* VenuesComponent */]]
    })
], VenuesModule);

//# sourceMappingURL=venues.module.js.map

/***/ })

});
//# sourceMappingURL=venues.module.chunk.js.map