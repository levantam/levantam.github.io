(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  about works!\n</p>\n"

/***/ }),

/***/ "./src/app/about/about.component.scss":
/*!********************************************!*\
  !*** ./src/app/about/about.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/about/about.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/portfolio/portfolio.component.ts");
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resume/resume.component */ "./src/app/resume/resume.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', pathMatch: 'full', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"] },
    { path: 'portfolio', component: _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_4__["PortfolioComponent"] },
    { path: 'resume', component: _resume_resume_component__WEBPACK_IMPORTED_MODULE_5__["ResumeComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/portfolio/portfolio.component.ts");
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./resume/resume.component */ "./src/app/resume/resume.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _services_portfolio_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/portfolio.service */ "./src/app/services/portfolio.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"],
                _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_9__["PortfolioComponent"],
                _resume_resume_component__WEBPACK_IMPORTED_MODULE_10__["ResumeComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_11__["ContactComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"]
            ],
            providers: [_services_portfolio_service__WEBPACK_IMPORTED_MODULE_12__["PortfolioService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  contact works!\n</p>\n"

/***/ }),

/***/ "./src/app/contact/contact.component.scss":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/contact/contact.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  footer works!\n</p>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dup-body-wrap\">\r\n    <!-- Start Header Area -->\r\n    <header class=\"default-header\" style=\"display: none;\">\r\n        <div class=\"header-wrap\">\r\n            <div class=\"header-top d-flex justify-content-between align-items-center\">\r\n                <div class=\"logo\">\r\n                    <a href=\"index.html\"></a>\r\n                </div>\r\n                <div class=\"main-menubar d-flex align-items-center\">\r\n                    <nav class=\"\">\r\n                        <a href=\"index.html\">Home</a>\r\n                        <a href=\"generic.html\">Generic</a>\r\n                        <a href=\"elements.html\">Elements</a>\r\n                    </nav>\r\n                    <div class=\"menu-bar\"><span class=\"lnr lnr-menu\"></span></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </header>\r\n<!-- End Header Area -->\r\n<!-- Start Banner Area -->\r\n<section class=\"banner-area relative\">\r\n    <div class=\"overlay overlay-bg\"></div>\r\n    <div class=\"container\">\r\n        <div class=\"row fullscreen align-items-center justify-content-between\">\r\n            <div class=\"col-lg-6 col-md-7 col-sm-8\">\r\n                <div class=\"banner-content\">\r\n                    <h1>Tam Le <br> Software Engineer</h1>\r\n                    <p>Ho Chi Minh City, Vietnam</p>\r\n                    <a href=\"#\" class=\"primary-btn\">View My Blog<span class=\"lnr lnr-arrow-right\"></span></a>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-5 col-md-5 col-sm-4\">\r\n                <img src=\"./assets/dup/img/avatar.jpg\" alt=\"\" class=\"img-fluid\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!-- End Banner Area -->\r\n<!-- Start studio Area -->\r\n<section class=\"section-gap studio-area\">\r\n    <div class=\"overlay overlay-bg\"></div>\r\n    <div class=\"container\">\r\n        <div class=\"row align-items-center\">\r\n            <div class=\"col-md-4 col-sm-6 text-center\">\r\n                <div class=\"studio-thumb\">\r\n                    <img src=\"https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixlib=rb-0.3.5&s=34fce81ace648b66255984b1ecf91a4b&auto=format&fit=crop&w=1950&q=80\" class=\"img-fluid\" alt=\"\">\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-8 col-sm-6\">\r\n                <div class=\"studio-content\">\r\n                    <h2>Introduction</h2>\r\n                    <p>\r\n                        Hello, I am Tam Le. I am a Software Engineer, NET and Android developer, work at Ho Chi Minh City, Vietnam. \r\nI have worked for four years. \r\nCurrently, I'm a .NET developer, develop API for mobile application and terminal at the merchant.\r\n                    </p>\r\n                    <a href=\"http://www.linkedin.com/in/lvtam\" target=\"_blank\" class=\"primary-btn\">View My Linked In<span class=\"lnr lnr-arrow-right\"></span></a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!-- End studio Area -->\r\n<!-- Start Achivement Area -->\r\n<section class=\"section-gap achivement-area\">\r\n    <div class=\"container\">\r\n        <div class=\"row align-items-center\">\r\n            <div class=\"col-lg-5\">\r\n                <div class=\"achivement-content\">\r\n                    <h2>My Projects</h2>\r\n                    <p class=\"mb-30\">Few would argue that, despite the advancements of feminism over the past three decades, women still face a double standard when it comes to their behavior. While men’s borderline-inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct </p>\r\n                    <a href=\"#\" class=\"primary-btn\">View More<span class=\"lnr lnr-arrow-right\"></span></a>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-6\">\r\n                <div class=\"total-achivement\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-4 col-sm-6\">\r\n                            <div class=\"single-achivement\">\r\n                                <a href=\"#\" class=\"achivement-link\">\r\n                                    <i class=\"fa fa-behance\"></i>\r\n                                </a>\r\n                                <h6><a href=\"#\">Behance Review</a></h6>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-4 col-sm-6\">\r\n                            <div class=\"single-achivement\">\r\n                                <a href=\"#\" class=\"achivement-link\">\r\n                                    <i class=\"fa fa-dribbble\"></i>\r\n                                </a>\r\n                                <h6><a href=\"#\">Dribbble Shots</a></h6>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-4 col-sm-6\">\r\n                            <div class=\"single-achivement\">\r\n                                <a href=\"#\" class=\"achivement-link\">\r\n                                    <i class=\"fa fa-youtube\"></i>\r\n                                </a>\r\n                                <h6><a href=\"#\">Youtube Subscribe</a></h6>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-4 col-sm-6\">\r\n                            <div class=\"single-achivement\">\r\n                                <a href=\"#\" class=\"achivement-link\">\r\n                                    <i class=\"fa fa-github\"></i>\r\n                                </a>\r\n                                <h6><a href=\"#\">Github Push</a></h6>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-4 col-sm-6\">\r\n                            <div class=\"single-achivement\">\r\n                                <a href=\"#\" class=\"achivement-link\">\r\n                                    <i class=\"fa fa-trophy\"></i>\r\n                                </a>\r\n                                <h6><a href=\"#\">Offline Trophy</a></h6>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-4 col-sm-6\">\r\n                            <div class=\"single-achivement\">\r\n                                <a href=\"#\" class=\"achivement-link\">\r\n                                    <i class=\"fa fa-usd\"></i>\r\n                                </a>\r\n                                <h6><a href=\"#\">Cash Prizes</a></h6>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!-- End Achivement Area -->\r\n<!-- Start Video Area -->\r\n<section class=\"video-area\" style=\"display: none\">\r\n    <div class=\"overlay overlay-bg\"></div>\r\n    <div class=\"container\">\r\n        <div class=\"video-content\">\r\n            <a href=\"http://www.youtube.com/watch?v=0O2aH4XLbto\" class=\"play-btn\"><img src=\"./assets/dup/img/play-btn.png\" alt=\"\"></a>\r\n            <h3 class=\"h2 text-white\">Everyone wants to be unique</h3>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!-- End Video Area -->\r\n<!-- Start Carousel Area -->\r\n<section class=\"section-gap carousel-area\">\r\n    <div class=\"overlay overlay-bg\"></div>\r\n    <div class=\"active-bottle-carousel\">\r\n        <div class=\"item\">\r\n            <div class=\"container\">\r\n                <div class=\"row align-items-center\">\r\n                    <div class=\"col-xl-6 col-md-4\">\r\n                        <div class=\"carousel-thumb\">\r\n                            <img src=\"./assets/dup/img/c.jpg\" alt=\"\" class=\"img-fluid\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-xl-6 col-md-7\">\r\n                        <div class=\"carousel-content\">\r\n                            <h2 class=\"text-white\">Glowing Milk Bottle</h2>\r\n                            <h5 class=\"text-white mb-20\">Collect from your nearest supershop imedietely</h5>\r\n                            <p class=\"text-white mb-30\">Few would argue that, despite the advancements of feminism over the past three decades, women still face a double standard when it comes to their behavior. While men’s borderline-inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards – especially in the workplace. That’s why it’s crucial that, as women, our behavior on the job is beyond reproach.Small Towns and Big StatesFor evidence of the double standard, we need look no farther than Arlington.</p>\r\n                            <a href=\"#\" class=\"primary-btn white\">View More<span class=\"lnr lnr-arrow-right\"></span></a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"item\">\r\n            <div class=\"container\">\r\n                <div class=\"row align-items-center\">\r\n                    <div class=\"col-xl-6 col-md-4\">\r\n                        <div class=\"carousel-thumb\">\r\n                            <img src=\"./assets/dup/img/c.jpg\" alt=\"\" class=\"img-fluid\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-xl-6 col-md-7\">\r\n                        <div class=\"carousel-content\">\r\n                            <h2 class=\"text-white\">Glowing Milk Bottle</h2>\r\n                            <h5 class=\"text-white mb-20\">Collect from your nearest supershop imedietely</h5>\r\n                            <p class=\"text-white mb-30\">Few would argue that, despite the advancements of feminism over the past three decades, women still face a double standard when it comes to their behavior. While men’s borderline-inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards – especially in the workplace. That’s why it’s crucial that, as women, our behavior on the job is beyond reproach.Small Towns and Big StatesFor evidence of the double standard, we need look no farther than Arlington.</p>\r\n                            <a href=\"#\" class=\"primary-btn white\">View More<span class=\"lnr lnr-arrow-right\"></span></a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"item\">\r\n            <div class=\"container\">\r\n                <div class=\"row align-items-center\">\r\n                    <div class=\"col-xl-6 col-md-4\">\r\n                        <div class=\"carousel-thumb\">\r\n                            <img src=\"./assets/dup/img/c.jpg\" alt=\"\" class=\"img-fluid\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-xl-6 col-md-7\">\r\n                        <div class=\"carousel-content\">\r\n                            <h2 class=\"text-white\">Glowing Milk Bottle</h2>\r\n                            <h5 class=\"text-white mb-20\">Collect from your nearest supershop imedietely</h5>\r\n                            <p class=\"text-white mb-30\">Few would argue that, despite the advancements of feminism over the past three decades, women still face a double standard when it comes to their behavior. While men’s borderline-inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards – especially in the workplace. That’s why it’s crucial that, as women, our behavior on the job is beyond reproach.Small Towns and Big StatesFor evidence of the double standard, we need look no farther than Arlington.</p>\r\n                            <a href=\"#\" class=\"primary-btn white\">View More<span class=\"lnr lnr-arrow-right\"></span></a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"item\">\r\n            <div class=\"container\">\r\n                <div class=\"row align-items-center\">\r\n                    <div class=\"col-xl-6 col-md-4\">\r\n                        <div class=\"carousel-thumb\">\r\n                            <img src=\"./assets/dup/img/c.jpg\" alt=\"\" class=\"img-fluid\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-xl-6 col-md-7\">\r\n                        <div class=\"carousel-content\">\r\n                            <h2 class=\"text-white\">Glowing Milk Bottle</h2>\r\n                            <h5 class=\"text-white mb-20\">Collect from your nearest supershop imedietely</h5>\r\n                            <p class=\"text-white mb-30\">Few would argue that, despite the advancements of feminism over the past three decades, women still face a double standard when it comes to their behavior. While men’s borderline-inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards – especially in the workplace. That’s why it’s crucial that, as women, our behavior on the job is beyond reproach.Small Towns and Big StatesFor evidence of the double standard, we need look no farther than Arlington.</p>\r\n                            <a href=\"#\" class=\"primary-btn white\">View More<span class=\"lnr lnr-arrow-right\"></span></a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"item\">\r\n            <div class=\"container\">\r\n                <div class=\"row align-items-center\">\r\n                    <div class=\"col-xl-6 col-md-4\">\r\n                        <div class=\"carousel-thumb\">\r\n                            <img src=\"./assets/dup/img/c.jpg\" alt=\"\" class=\"img-fluid\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-xl-6 col-md-7\">\r\n                        <div class=\"carousel-content\">\r\n                            <h2 class=\"text-white\">New Blog</h2>\r\n                            <h5 class=\"text-white mb-20\">Collect from your nearest supershop imedietely</h5>\r\n                            <p class=\"text-white mb-30\">Few would argue that, despite the advancements of feminism over the past three decades, women still face a double standard when it comes to their behavior. While men’s borderline-inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards – especially in the workplace. That’s why it’s crucial that, as women, our behavior on the job is beyond reproach.Small Towns and Big StatesFor evidence of the double standard, we need look no farther than Arlington.</p>\r\n                            <a href=\"#\" class=\"primary-btn white\">View More<span class=\"lnr lnr-arrow-right\"></span></a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n\r\n    </div>\r\n</section>\r\n<!-- End Carousel Area -->\r\n\r\n<!-- Start Skill Area -->\r\n<section class=\"section-gap skill-area\">\r\n    <div class=\"container\">\r\n        <div class=\"row justify-content-between\">\r\n            <div class=\"col-lg-5\">\r\n                <div class=\"skill-content\">\r\n                    <h2>My Skills</h2>\r\n                    <p class=\"mb-30\">Few would argue that, despite the advancements of feminism over the past three decades, women still face a double standard when it comes to their behavior. While men’s borderline-inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct </p>\r\n                    <a href=\"#\" class=\"primary-btn\">View More<span class=\"lnr lnr-arrow-right\"></span></a>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-6\">\r\n                <div class=\"total-progress-bar\">\r\n                    <p>Adobe Photoshop CC</p>\r\n                    <div class=\"single-progressbar mb-20\">\r\n                        <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 70%\" aria-valuenow=\"70\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                    </div>\r\n                    <p>Adobe Illustrator CC</p>\r\n                    <div class=\"single-progressbar mb-20\">\r\n                        <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 60%\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                    </div>\r\n                    <p>Adobe Indesign CC</p>\r\n                    <div class=\"single-progressbar mb-20\">\r\n                        <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 50%\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                    </div>\r\n                    <p>Adobe After Effects CC</p>\r\n                    <div class=\"single-progressbar mb-20\">\r\n                        <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 80%\" aria-valuenow=\"80\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!-- End Skill Area -->\r\n\r\n\r\n<!-- Start Contact Area -->\r\n<section class=\"contact-area\" style=\"display: none;\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-3 col-md-6\">\r\n                <div class=\"single-address text-center\">\r\n                    <h6>Visit Our Office</h6>\r\n                    <p>56/8, bir uttam qazi nuruzzaman road, west panthapath, kalabagan, Dhanmondi, Dhaka - 1205</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n                <div class=\"single-address text-center\">\r\n                    <h6>Let’s call us</h6>\r\n                    <p>Phone 01: <a href=\"tel:023545\">012-6532-568-9746</a> <br> Phone 02:<a href=\"tel:023545\">012-6532-568-9748</a> <br>FAX:<a href=\"tel:023545\">02-6532-568-746</a></p>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n                <div class=\"single-address text-center\">\r\n                    <h6>Let’s Email Us</h6>\r\n                    <p><a href=\"mailto:demo@gmail.com\">hello@colorlib.com</a> <br>\r\n                        <a href=\"mailto:demo@gmail.com\">mainhelpinfo@colorlib.com</a> <br>\r\n                        <a href=\"mailto:demo@gmail.com\">infohelp@colorlib.com</a></p>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n                <div class=\"single-address text-center\">\r\n                    <h6>Customer Support</h6>\r\n                    <p><a href=\"mailto:demo@gmail.com\">support@colorlib.com</a> <br>\r\n                        <a href=\"mailto:demo@gmail.com\">emergencysupp@colorlib.com</a> <br>\r\n                        <a href=\"mailto:demo@gmail.com\">extremesupp@colorlib.com</a></p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!-- End Contact Area -->\r\n\r\n<!-- Start Subscription Area -->\r\n\r\n<!-- End Subscription Area -->\r\n\r\n<!-- Strat Footer Area -->\r\n<footer class=\"section-gap footer-widget-area\">\r\n    <div class=\"overlay overlay-bg\"></div>\r\n    <div class=\"container\">\r\n        <div class=\"subscription-area\">\r\n            <div class=\"row justify-content-center\">\r\n                <div class=\"col-lg-6\">\r\n                    <div id=\"mc_embed_signup\">\r\n                        <form style=\"display: none\" target=\"_blank\" novalidate action=\"https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&id=92a4423d01\" method=\"get\" class=\"subscription relative\">\r\n                            <input type=\"email\" name=\"EMAIL\" placeholder=\"Email address\" onfocus=\"this.placeholder = ''\" onblur=\"this.placeholder = 'Email address'\" required>\r\n                            <div style=\"position: absolute; left: -5000px;\">\r\n                                <input type=\"text\" name=\"b_36c4fd991d266f23781ded980_aefe40901a\" tabindex=\"-1\" value=\"\">\r\n                            </div>\r\n                            <button class=\"primary-btn\">Subscribe now<span class=\"lnr lnr-arrow-right\"></span></button>\r\n                            <div class=\"info\"></div>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\" style=\"display: none;\">\r\n            <div class=\"col-lg-3 col-sm-6\">\r\n                <div class=\"single-footer-widget\">\r\n                    <h6 class=\"text-white text-uppercase mb-20\">About Agency</h6>\r\n                    <ul class=\"footer-nav\">\r\n                        <li><a href=\"#\">Managed Website</a></li>\r\n                        <li><a href=\"#\">Manage Reputation</a></li>\r\n                        <li><a href=\"#\">Power Tools</a></li>\r\n                        <li><a href=\"#\">Marketing Service</a></li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-3 col-sm-6\">\r\n                <div class=\"single-footer-widget\">\r\n                    <h6 class=\"text-white text-uppercase mb-20\">Navigation Links</h6>\r\n                    <ul class=\"footer-nav\">\r\n                        <li><a href=\"#\">Home</a></li>\r\n                        <li><a href=\"#\">Main Features</a></li>\r\n                        <li><a href=\"#\">Offered Services</a></li>\r\n                        <li><a href=\"#\">Latest Portfolio</a></li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-3 col-sm-6\">\r\n                <div class=\"single-footer-widget\">\r\n                    <h6 class=\"text-white text-uppercase mb-20\">Navigation Links</h6>\r\n                    <ul class=\"footer-nav\">\r\n                        <li><a href=\"#\">Works & Builders</a></li>\r\n                        <li><a href=\"#\">Works & Wordpress</a></li>\r\n                        <li><a href=\"#\">Works & Templates</a></li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-lg-3 col-sm-6\">\r\n                <div class=\"single-footer-widget\" style=\"display: none;\">\r\n                    <h6 class=\"text-white text-uppercase mb-20\">Instafeed</h6>\r\n                    <ul class=\"instafeed d-flex flex-wrap\">\r\n                        <li><img src=\"./assets/dup/img/i1.jpg\" alt=\"\"></li>\r\n                        <li><img src=\"./assets/dup/img/i2.jpg\" alt=\"\"></li>\r\n                        <li><img src=\"./assets/dup/img/i3.jpg\" alt=\"\"></li>\r\n                        <li><img src=\"./assets/dup/img/i4.jpg\" alt=\"\"></li>\r\n                        <li><img src=\"./assets/dup/img/i5.jpg\" alt=\"\"></li>\r\n                        <li><img src=\"./assets/dup/img/i6.jpg\" alt=\"\"></li>\r\n                        <li><img src=\"./assets/dup/img/i7.jpg\" alt=\"\"></li>\r\n                        <li><img src=\"./assets/dup/img/i8.jpg\" alt=\"\"></li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"footer-bottom d-flex justify-content-between align-items-center flex-wrap\">\r\n            <p class=\"footer-text m-0\">Copyright &copy; 2018 All rights reserved   |   This template is made with <i class=\"fa fa-heart-o\" aria-hidden=\"true\"></i> by <a href=\"https://colorlib.com/\">Colorlib</a></p>\r\n            <div class=\"footer-social d-flex align-items-center\">\r\n                <a href=\"#\"><i class=\"fa fa-facebook\"></i></a>\r\n                <a href=\"#\"><i class=\"fa fa-twitter\"></i></a>\r\n                <a href=\"#\"><i class=\"fa fa-dribbble\"></i></a>\r\n                <a href=\"#\"><i class=\"fa fa-behance\"></i></a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</footer>\r\n<!-- End Footer Area -->\r\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_portfolio_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/portfolio.service */ "./src/app/services/portfolio.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(portfolioService) {
        this.portfolioService = portfolioService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.portfolioService.getInformation();
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_portfolio_service__WEBPACK_IMPORTED_MODULE_1__["PortfolioService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/portfolio/portfolio.component.html":
/*!****************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  portfolio works!\n</p>\n"

/***/ }),

/***/ "./src/app/portfolio/portfolio.component.scss":
/*!****************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/portfolio/portfolio.component.ts":
/*!**************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.ts ***!
  \**************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PortfolioComponent = /** @class */ (function () {
    function PortfolioComponent() {
    }
    PortfolioComponent.prototype.ngOnInit = function () {
    };
    PortfolioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-portfolio',
            template: __webpack_require__(/*! ./portfolio.component.html */ "./src/app/portfolio/portfolio.component.html"),
            styles: [__webpack_require__(/*! ./portfolio.component.scss */ "./src/app/portfolio/portfolio.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PortfolioComponent);
    return PortfolioComponent;
}());



/***/ }),

/***/ "./src/app/resume/resume.component.html":
/*!**********************************************!*\
  !*** ./src/app/resume/resume.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  resume works!\n</p>\n"

/***/ }),

/***/ "./src/app/resume/resume.component.scss":
/*!**********************************************!*\
  !*** ./src/app/resume/resume.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/resume/resume.component.ts":
/*!********************************************!*\
  !*** ./src/app/resume/resume.component.ts ***!
  \********************************************/
/*! exports provided: ResumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeComponent", function() { return ResumeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResumeComponent = /** @class */ (function () {
    function ResumeComponent() {
    }
    ResumeComponent.prototype.ngOnInit = function () {
    };
    ResumeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resume',
            template: __webpack_require__(/*! ./resume.component.html */ "./src/app/resume/resume.component.html"),
            styles: [__webpack_require__(/*! ./resume.component.scss */ "./src/app/resume/resume.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ResumeComponent);
    return ResumeComponent;
}());



/***/ }),

/***/ "./src/app/services/base.ts":
/*!**********************************!*\
  !*** ./src/app/services/base.ts ***!
  \**********************************/
/*! exports provided: BaseApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseApi", function() { return BaseApi; });
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");

var BaseApi = /** @class */ (function () {
    function BaseApi(injector) {
        this.injector = injector;
        this.http = injector.get(_angular_http__WEBPACK_IMPORTED_MODULE_0__["Http"]);
    }
    return BaseApi;
}());



/***/ }),

/***/ "./src/app/services/portfolio.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/portfolio.service.ts ***!
  \***********************************************/
/*! exports provided: PortfolioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioService", function() { return PortfolioService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ "./src/app/services/base.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PortfolioService = /** @class */ (function (_super) {
    __extends(PortfolioService, _super);
    function PortfolioService(injector) {
        return _super.call(this, injector) || this;
    }
    PortfolioService.prototype.getInformation = function () {
        // this.http.get('/services/data.json').toPromise();
    };
    PortfolioService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], PortfolioService);
    return PortfolioService;
}(_base__WEBPACK_IMPORTED_MODULE_1__["BaseApi"]));



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\WORKSPACE\levantam.github.io\mycv\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map