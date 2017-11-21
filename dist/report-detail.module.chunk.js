webpackJsonp(["report-detail.module"],{

/***/ "../../../../../src/app/views/reports-detail/report-detail-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportDetailRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__report_detail_component__ = __webpack_require__("../../../../../src/app/views/reports-detail/report-detail.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__report_detail_component__["a" /* ReportDetailComponent */],
        data: {
            title: 'Venue'
        }
    }
];
var ReportDetailRoutingModule = (function () {
    function ReportDetailRoutingModule() {
    }
    return ReportDetailRoutingModule;
}());
ReportDetailRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
    })
], ReportDetailRoutingModule);

//# sourceMappingURL=report-detail-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/views/reports-detail/report-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h2 [routerLink]=\"['/users/detail', reports[0].userReported._id]\" >Reports to <span style=\"text-decoration: underline; cursor: pointer;\">{{reports[0].userReported.name}}</span></h2>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"row\">\n        <div class=\"col-sm-6 col-md-4\" *ngFor=\"let report of reports\">\n          <div class=\"card card-accent-danger\">\n            <div class=\"card-header\" [routerLink]=\"['/users/detail', report.userReports._id]\" >\n              <i class=\"fa fa-flag\"></i> Reported by <span style=\"text-decoration: underline; cursor: pointer;\">{{report.userReports.name}}</span>\n            </div>\n            <div class=\"card-body\">\n              {{report.reason}}\n            </div>\n          </div>\n        </div><!--/.col-->\n        </div>\n      </div>\n      <div class=\"card-footer\">\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/views/reports-detail/report-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_reports_service__ = __webpack_require__("../../../../../src/app/_services/reports.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReportDetailComponent = (function () {
    function ReportDetailComponent(reportService, activatedRoute, router) {
        this.reportService = reportService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    ReportDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            var reportedId = params['reportedId'];
            _this.reportService.getReportsDetail(reportedId)
                .subscribe(function (response) {
                console.log(response);
                _this.reports = response.docs;
            }, function (err) {
                if (err.status === 401) {
                    _this.reportService.logOut();
                    window.location.reload();
                }
            });
        });
    };
    return ReportDetailComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('header'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], ReportDetailComponent.prototype, "header", void 0);
ReportDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/views/reports-detail/report-detail.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_reports_service__["a" /* ReportService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_reports_service__["a" /* ReportService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _d || Object])
], ReportDetailComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=report-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/views/reports-detail/report-detail.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportDetailModule", function() { return ReportDetailModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__report_detail_component__ = __webpack_require__("../../../../../src/app/views/reports-detail/report-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__report_detail_routing_module__ = __webpack_require__("../../../../../src/app/views/reports-detail/report-detail-routing.module.ts");
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







var ReportDetailModule = (function () {
    function ReportDetailModule() {
    }
    return ReportDetailModule;
}());
ReportDetailModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__report_detail_routing_module__["a" /* ReportDetailRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_tabs__["a" /* TabsModule */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__["b" /* TimepickerModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_1__report_detail_component__["a" /* ReportDetailComponent */]]
    })
], ReportDetailModule);

//# sourceMappingURL=report-detail.module.js.map

/***/ })

});
//# sourceMappingURL=report-detail.module.chunk.js.map