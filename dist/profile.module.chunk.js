webpackJsonp(["profile.module"],{

/***/ "../../../../../src/app/views/profile/Profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h2>{{user.name.toUpperCase()}} profile</h2>\n      </div>\n      <div class=\"card-body\">\n        <form action=\"\" method=\"post\" enctype=\"multipart/form-data\" class=\"form-horizontal\">\n          <div class=\"form-group row\">\n            <label class=\"col-md-3 col-form-label\" for=\"textarea-input\">Images</label>\n              <div class=\"col-sm-9 col-md-3\" *ngFor=\"let image of user.images\">\n                <div class=\"card\">\n                  <div class=\"card-body\">\n                    <img src=\"{{image.s3.url}}\" style=\"width: 100%;\">\n                  </div>\n                  <div class=\"card-footer\" *ngIf=\"image.validated == null\">\n                    <button type=\"button\" class=\"btn btn-sm btn-success\" style=\"color: #fff;\" (click)=\"openModal(primaryModal, true, image)\" ><i class=\"fa fa-check\" style=\"color: #fff;\"></i> Validate</button>\n                    <button type=\"button\" class=\"btn btn-sm btn-danger\" (click)=\"openModal(primaryModal, false, image)\" ><i class=\"fa fa-ban\"></i> Reject</button>\n                  </div>\n                  <div class=\"card-footer\" *ngIf=\"image.validated == true\">\n                    <span class=\"badge badge-success\">Validated</span>\n                  </div>\n\n                </div>\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <label class=\"col-md-3 col-form-label\" for=\"textarea-input\">About</label>\n            <div class=\"col-md-9\">\n              <div class=\"card\">\n                <div class=\"card-body\">\n                <textarea id=\"textarea-input\" name=\"textarea-input\" disabled=\"disabled\" rows=\"9\" class=\"form-control\" placeholder=\"About..\" value=\"{{user.about ? user.about : ''}}\"></textarea>\n                </div>\n                <div class=\"card-footer\" *ngIf=\"user.about_validated == null && user.about != null\">\n                  <div *ngIf=\"user.about != ''\">\n                    <button type=\"button\" class=\"btn btn-sm btn-success\" style=\"color: #fff;\" (click)=\"openAboutModal(primaryModal, true)\" ><i class=\"fa fa-check\" style=\"color: #fff;\"></i> Validate</button>\n                    <button type=\"button\" class=\"btn btn-sm btn-danger\" (click)=\"openAboutModal(primaryModal, false)\" ><i class=\"fa fa-ban\"></i> Reject</button>\n                  </div>\n                </div>\n                <div class=\"card-footer\" *ngIf=\"user.about_validated == true && (user.about != null)\">\n                  <span class=\"badge badge-success\">Validated</span>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <label class=\"col-md-3 col-form-label\" for=\"disabled-input\">Age</label>\n            <div class=\"col-md-9\">\n              <input type=\"text\" id=\"disabled-input\" name=\"disabled-input\" class=\"form-control\" placeholder=\"Age\" value=\"{{getAge(user.birthday)}}\" disabled>\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <label class=\"col-md-3 col-form-label\" for=\"disabled-input\">Studies</label>\n            <div class=\"col-md-9\">\n              <input type=\"text\" id=\"disabled-input\" name=\"disabled-input\" class=\"form-control\" placeholder=\"Studies\" value=\"{{user.studies}}\" disabled>\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <label class=\"col-md-3 col-form-label\" for=\"multiple-select\">Languages</label>\n            <div class=\"col-md-9\">\n              <select id=\"multiple-select\" name=\"multiple-select\" class=\"form-control\" size=\"5\" disabled=\"disabled\">\n                <option value=\"{{i}}\" *ngFor=\"let language of user.languages; let i = index\">{{language}}</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <label class=\"col-md-3 col-form-label\" for=\"disabled-input\">Country</label>\n            <div class=\"col-md-9\">\n              <input type=\"text\" id=\"disabled-input\" name=\"disabled-input\" class=\"form-control\" placeholder=\"Country\" value=\"{{user.country}}\" disabled>\n            </div>\n          </div>\n        </form>\n      </div>\n      <div class=\"card-footer\">\n        <button type=\"button\" (click)=\"saveFormData()\" class=\"btn btn-sm btn-primary\" style=\"color: #fff;\"><i class=\"fa fa-floppy-o\" style=\"color: #fff;\"></i> Save Changes</button>\n        <button type=\"button\" (click)=\"changeBanState()\"class=\"btn btn-sm \"[ngClass]=\" user.banned ? 'btn-warning':'btn-danger'\" ><i class=\"fa fa-ban\"></i> {{user.banned ? 'Unban this user':'Ban this user'}}</button>\n        <div *ngIf=\"success\" class=\"alert alert-success\">{{success}}</div>\n        <div *ngIf=\"error\" class=\"alert alert-danger\">{{error}}</div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<ng-template #primaryModal>\n  <div  tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-primary\" role=\"document\" style=\"margin: 0 !important;\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Confirm {{validateAction ? 'Validate': 'Reject'}} Action</h4>\n          <button type=\"button\" class=\"close\" (click)=\"cancelModalAction()\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <p>Do you want {{validateAction ? 'Validate': 'Reject'}} this element?</p>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" (click)=\"cancelModalAction()\">Cancel</button>\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"confirmModalAction(validateAction,modalForAbout)\">Confirm</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/views/profile/profile-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_component__ = __webpack_require__("../../../../../src/app/views/profile/profile.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__profile_component__["a" /* ProfileComponent */],
        data: {
            title: 'Profile'
        }
    }
];
var ProfileRoutingModule = (function () {
    function ProfileRoutingModule() {
    }
    return ProfileRoutingModule;
}());
ProfileRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
    })
], ProfileRoutingModule);

//# sourceMappingURL=profile-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/views/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = (function () {
    function ProfileComponent(userService, activatedRoute, modalService) {
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.modalService = modalService;
        this.validationElements = {
            id: null,
            validated_images: [],
            rejected_images: [],
        };
        this.error = '';
        this.success = '';
        this.modalForAbout = false;
    }
    ProfileComponent.prototype.openModal = function (template, action, image) {
        this.validateAction = action;
        this.primaryModal = this.modalService.show(template);
        this.currentElement = image;
    };
    ProfileComponent.prototype.openAboutModal = function (template, action) {
        this.validateAction = action;
        this.primaryModal = this.modalService.show(template);
        this.modalForAbout = true;
    };
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            var userId = params['userId'];
            _this.userService.getUserById(userId)
                .subscribe(function (response) {
                console.log(response);
                _this.user = response;
                _this.validationElements.id = _this.user._id;
            }, function (err) {
                if (err.status === 401) {
                    _this.userService.logOut();
                    window.location.reload();
                }
            });
        });
    };
    ProfileComponent.prototype.getAge = function (dateString) {
        if (dateString != null) {
            var today = new Date();
            var birthDate = new Date(dateString);
            var age = today.getFullYear() - birthDate.getFullYear();
            var m = today.getMonth() - birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            return age;
        }
        return '';
    };
    ProfileComponent.prototype.cancelModalAction = function () {
        this.primaryModal.hide();
    };
    ProfileComponent.prototype.confirmModalAction = function (action, isAbout) {
        var _this = this;
        this.primaryModal.hide();
        if (!isAbout) {
            switch (action) {
                case true:
                    this.validationElements.validated_images.push(this.currentElement._id);
                    this.user.images.map(function (item) {
                        if (item == _this.currentElement) {
                            item.validated = true;
                        }
                    });
                    break;
                case false:
                    this.validationElements.rejected_images.push(this.currentElement._id);
                    var index = this.user.images.indexOf(this.currentElement);
                    this.user.images = this.user.images.filter(function (item) { return item !== _this.currentElement; });
                    break;
            }
            this.currentElement = null;
        }
        else {
            this.validationElements['about_validated'] = action;
            this.user.about_validated = action;
            if (!action) {
                this.user.about = '';
                this.validationElements['about'] = '';
            }
            this.modalForAbout = false;
        }
    };
    ProfileComponent.prototype.saveFormData = function () {
        var _this = this;
        this.restartAlerts();
        this.userService.postUsersValidate(this.user._id, this.validationElements)
            .subscribe(function (response) {
            _this.user = response;
            _this.success = 'User data has been updated correctly';
        }, function (err) {
            if (err.status === 401) {
                _this.userService.logOut();
                window.location.reload();
            }
            var error = JSON.parse(err._body);
            _this.error = error.localizedError;
        });
    };
    ProfileComponent.prototype.changeBanState = function () {
        if (this.user.banned) {
            this.unBanUser();
        }
        else {
            this.banUser();
        }
    };
    ProfileComponent.prototype.banUser = function () {
        var _this = this;
        this.restartAlerts();
        this.userService.postUsersBan(this.user._id)
            .subscribe(function (response) {
            _this.user = response;
            _this.success = 'User has been banned correctly';
        }, function (err) {
            if (err.status === 401) {
                _this.userService.logOut();
                window.location.reload();
            }
            var error = JSON.parse(err._body);
            _this.error = error.localizedError;
        });
    };
    ProfileComponent.prototype.unBanUser = function () {
        var _this = this;
        this.restartAlerts();
        this.userService.postUsersUpdate(this.user._id, { banned: false })
            .subscribe(function (response) {
            _this.user = response;
            _this.success = 'User has been Unbanned correctly';
        }, function (err) {
            if (err.status === 401) {
                _this.userService.logOut();
                window.location.reload();
            }
            var error = JSON.parse(err._body);
            _this.error = error.localizedError;
        });
    };
    ProfileComponent.prototype.restartAlerts = function () {
        this.error = '';
        this.success = '';
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/views/profile/Profile.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__["a" /* BsModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__["a" /* BsModalService */]) === "function" && _c || Object])
], ProfileComponent);

var _a, _b, _c;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/views/profile/profile.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__profile_component__ = __webpack_require__("../../../../../src/app/views/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_routing_module__ = __webpack_require__("../../../../../src/app/views/profile/profile-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ProfileModule = (function () {
    function ProfileModule() {
    }
    return ProfileModule;
}());
ProfileModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__profile_routing_module__["a" /* ProfileRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_1__profile_component__["a" /* ProfileComponent */]]
    })
], ProfileModule);

//# sourceMappingURL=profile.module.js.map

/***/ })

});
//# sourceMappingURL=profile.module.chunk.js.map