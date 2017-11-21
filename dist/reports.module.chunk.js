webpackJsonp(["reports.module"],{

/***/ "../../../../../src/app/views/reports/reports-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reports_component__ = __webpack_require__("../../../../../src/app/views/reports/reports.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__reports_component__["a" /* ReportsComponent */],
        data: {
            title: 'Reports'
        }
    }
];
var ReportsRoutingModule = (function () {
    function ReportsRoutingModule() {
    }
    return ReportsRoutingModule;
}());
ReportsRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
    })
], ReportsRoutingModule);

//# sourceMappingURL=reports-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/views/reports/reports.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"fa fa-flag\"></i> Reports\n        </div>\n        <div class=\"card-body\">\n          <table class=\"table\">\n            <thead>\n            <tr>\n              <th>Name</th>\n              <th>Number of Reports</th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr *ngFor=\"let report of reports\" [routerLink]=\"['/report/detail', report._id]\">\n              <td>{{report.userReported.name}}</td>\n              <td>{{report.count}}</td>\n            </tr>\n            </tbody>\n          </table>\n          <ul class=\"pagination\">\n            <li class=\"page-item\" *ngFor=\"let n of paginator\">\n              <a class=\"page-link\" (click)=\"getPage(n)\">{{n}}</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/views/reports/reports.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_reports_service__ = __webpack_require__("../../../../../src/app/_services/reports.service.ts");
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



var ReportsComponent = (function () {
    function ReportsComponent(reportService) {
        this.reportService = reportService;
        this.reports = [];
        this.pageOffset = 0;
        this.totalEntries = 0;
        this.paginator = [];
        this.params = {};
    }
    ReportsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get users from secure api end point
        this.reportService.getReports()
            .subscribe(function (response) {
            _this.reports = response.docs;
            _this.bindPage(response);
        }, function (err) {
            if (err.status === 401) {
                _this.reportService.logOut();
                window.location.reload();
            }
        });
    };
    ReportsComponent.prototype.getPage = function (page) {
        var _this = this;
        this.params.offset = (page - 1) * 10;
        this.params.statistics = true;
        var codifiedparams = __WEBPACK_IMPORTED_MODULE_2_qs__["stringify"](this.params);
        this.reportService.getReportsWithParams(this.decodeToAscii(codifiedparams))
            .subscribe(function (response) {
            _this.reports = response.docs;
            _this.bindPage(response);
        }, function (err) {
            if (err.status === 401) {
                _this.reportService.logOut();
                window.location.reload();
            }
        });
    };
    ReportsComponent.prototype.bindPage = function (response) {
        this.pageOffset = response.offset;
        this.totalEntries = response.total;
        this.generatePaginator();
    };
    ReportsComponent.prototype.generatePaginator = function () {
        this.paginator = []; //20
        var maxValue = (this.totalEntries / 10) + 2 > this.pageOffset / 10 ? (this.pageOffset / 10) + 2 : this.totalEntries / 10;
        var minValue = (this.pageOffset / 10) - 2 > 0 ? (this.pageOffset / 10) + 2 : 1;
        for (var i = 1; i <= maxValue; i++) {
            this.paginator.push(i);
        }
    };
    ReportsComponent.prototype.decodeToAscii = function (codifiedparams) {
        while (codifiedparams.split('%5B').length > 1 && codifiedparams.split('%5D').length > 1) {
            codifiedparams = codifiedparams.replace('%5B', '[');
            codifiedparams = codifiedparams.replace('%5D', ']');
        }
        return codifiedparams;
    };
    return ReportsComponent;
}());
ReportsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/views/reports/reports.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_reports_service__["a" /* ReportService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_reports_service__["a" /* ReportService */]) === "function" && _a || Object])
], ReportsComponent);

var _a;
//# sourceMappingURL=reports.component.js.map

/***/ }),

/***/ "../../../../../src/app/views/reports/reports.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsModule", function() { return ReportsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reports_component__ = __webpack_require__("../../../../../src/app/views/reports/reports.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reports_routing_module__ = __webpack_require__("../../../../../src/app/views/reports/reports-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ReportsModule = (function () {
    function ReportsModule() {
    }
    return ReportsModule;
}());
ReportsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__reports_routing_module__["a" /* ReportsRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_1__reports_component__["a" /* ReportsComponent */]]
    })
], ReportsModule);

//# sourceMappingURL=reports.module.js.map

/***/ })

});
//# sourceMappingURL=reports.module.chunk.js.map