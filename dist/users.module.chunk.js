webpackJsonp(["users.module"],{

/***/ "../../../../../src/app/views/users/users-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__users_component__ = __webpack_require__("../../../../../src/app/views/users/users.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__users_component__["a" /* UsersComponent */],
        data: {
            title: 'Users'
        }
    }
];
var UsersRoutingModule = (function () {
    function UsersRoutingModule() {
    }
    return UsersRoutingModule;
}());
UsersRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
    })
], UsersRoutingModule);

//# sourceMappingURL=users-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/views/users/users.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"fa fa-user\"></i> Users\n        </div>\n        <div class=\"card-body\">\n          <div class=\"form-group\">\n            <label class=\"col-form-label\">Filter by</label>\n            <div class=\"input-group\">\n              <span class=\"input-group-addon\">Name</span>\n              <input #filteredName type=\"text\" id=\"username\" name=\"username\" (change)=\"filterUsersByName(filteredName.value)\" class=\"form-control\">\n              <span class=\"input-group-addon\"><i class=\"fa fa-search\"></i></span>\n            </div>\n          </div>\n\n\n\n          <table class=\"table\">\n            <thead>\n            <tr>\n              <th>Picture</th>\n              <th (click)=\"getPageWithSort('name')\" style=\"cursor: pointer\">Name</th>\n              <th >Validated</th>\n              <th (click)=\"getPageWithSort('banned')\" style=\"cursor: pointer\">Banned</th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr *ngFor=\"let user of users\" [routerLink]=\"['/users/detail', user._id]\">\n              <td>\n                <div class=\"avatar\">\n                  <img src=\"{{user.images[0].s3.url}}\" *ngIf=\"user.images.length > 0\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\" src=\"{{user.images[0].s3.url}}\">\n                  <img src=\"../../../assets/img/logo-symbol.png\" *ngIf=\"user.images.length == 0\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\" src=\"../../../assets/img/logo-symbol.png\">\n                </div>\n              </td>\n              <td>{{user.name}}</td>\n              <td>\n                <span class=\"badge\" [ngClass]=\"userIsValidated(user) ? 'badge-success': 'badge-danger'\">{{userIsValidated(user) ? 'Validated':'Pending'}}</span>\n              </td>\n              <td>\n                <span class=\"badge\" [ngClass]=\"user.banned ? 'badge-danger': 'badge-info'\">{{user.banned ? 'Banned':'No banned'}}</span>\n              </td>\n            </tr>\n            </tbody>\n          </table>\n          <ul class=\"pagination\">\n            <li class=\"page-item\" *ngFor=\"let n of paginator\" [ngClass]=\" n == currentPage ? 'active' : ''\">\n              <a class=\"page-link\" (click)=\"getPage(n)\">{{n}}</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/views/users/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
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



var UsersComponent = (function () {
    function UsersComponent(userService) {
        this.userService = userService;
        this.users = [];
        this.currentPage = 0;
        this.pageOffset = 0;
        this.numberPages = 0;
        this.totalUsers = 0;
        this.paginator = [];
        this.params = {};
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get users from secure api end point
        this.userService.getUsers()
            .subscribe(function (response) {
            _this.users = response.docs;
            _this.bindPage(response);
        }, function (err) {
            if (err.status === 401) {
                _this.userService.logOut();
                window.location.reload();
            }
        });
    };
    UsersComponent.prototype.getPage = function (page) {
        var _this = this;
        this.params.page = page;
        var codifiedparams = __WEBPACK_IMPORTED_MODULE_2_qs__["stringify"](this.params);
        this.userService.getUsersWithParams(this.decodeToAscii(codifiedparams))
            .subscribe(function (response) {
            _this.users = response.docs;
            _this.bindPage(response);
        }, function (err) {
            if (err.status === 401) {
                _this.userService.logOut();
                window.location.reload();
            }
        });
    };
    UsersComponent.prototype.getPageWithSort = function (filter) {
        var _this = this;
        this.params.sort = {
            'field': filter,
            'order': this.checkOrder(filter)
        };
        var codifiedparams = __WEBPACK_IMPORTED_MODULE_2_qs__["stringify"](this.params);
        this.userService.getUsersWithParams(this.decodeToAscii(codifiedparams))
            .subscribe(function (response) {
            _this.users = response.docs;
            _this.bindPage(response);
        }, function (err) {
            if (err.status === 401) {
                _this.userService.logOut();
                window.location.reload();
            }
        });
    };
    UsersComponent.prototype.filterUsersByName = function (newFilter) {
        var _this = this;
        this.params.name = newFilter;
        this.params.page = 1;
        this.userService.getUsersWithParams(this.params)
            .subscribe(function (response) {
            _this.users = response.docs;
            _this.bindPage(response);
        }, function (err) {
            if (err.status === 401) {
                _this.userService.logOut();
                window.location.reload();
            }
        });
    };
    UsersComponent.prototype.checkOrder = function (filter) {
        switch (filter) {
            case 'name':
                this.nameSort = this.nameSort == 'desc' ? 'asc' : 'desc';
                return this.nameSort;
            case 'validated':
                this.validateSort = this.validateSort == 'desc' ? 'asc' : 'desc';
                return this.validateSort;
            case 'banned':
                this.bannedSort = this.bannedSort == 'desc' ? 'asc' : 'desc';
                return this.bannedSort;
            default:
                return 'asc';
        }
    };
    UsersComponent.prototype.bindPage = function (response) {
        this.currentPage = response.page;
        this.pageOffset = response.offset;
        this.totalUsers = response.total;
        this.numberPages = response.pages;
        this.generatePaginator();
    };
    UsersComponent.prototype.generatePaginator = function () {
        this.paginator = [];
        var maxValue = this.currentPage + 2 < this.numberPages ? this.currentPage + 2 : this.numberPages;
        var minValue = this.currentPage - 2 > 0 ? this.currentPage - 2 : 1;
        for (var i = minValue; i <= maxValue; i++) {
            this.paginator.push(i);
        }
    };
    UsersComponent.prototype.userIsValidated = function (user) {
        if (user.images.length > 0) {
            for (var i = 0; i <= user.images.length - 1; i++) {
                if (user.images[i].validated == null) {
                    return false;
                }
            }
        }
        if (user.about_validated == null) {
            if (user.about != null) {
                return false;
            }
        }
        return true;
    };
    UsersComponent.prototype.decodeToAscii = function (codifiedparams) {
        while (codifiedparams.split('%5B').length > 1 && codifiedparams.split('%5D').length > 1) {
            codifiedparams = codifiedparams.replace('%5B', '[');
            codifiedparams = codifiedparams.replace('%5D', ']');
        }
        return codifiedparams;
    };
    UsersComponent.prototype.showUser = function (user) {
        //console.log(user)
    };
    return UsersComponent;
}());
UsersComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/views/users/users.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object])
], UsersComponent);

var _a;
//# sourceMappingURL=users.component.js.map

/***/ }),

/***/ "../../../../../src/app/views/users/users.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersModule", function() { return UsersModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__users_component__ = __webpack_require__("../../../../../src/app/views/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__users_routing_module__ = __webpack_require__("../../../../../src/app/views/users/users-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var UsersModule = (function () {
    function UsersModule() {
    }
    return UsersModule;
}());
UsersModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__users_routing_module__["a" /* UsersRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_1__users_component__["a" /* UsersComponent */]]
    })
], UsersModule);

//# sourceMappingURL=users.module.js.map

/***/ })

});
//# sourceMappingURL=users.module.chunk.js.map