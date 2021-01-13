(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"sidebar\">\n  <div class=\"a-o-i-t\">\n    Angular Otp Input\n  </div>\n  <ul class=\"list\">\n    <li>\n      <input type=\"checkbox\" name=\"number-only\" id=\"number-only\" [(ngModel)]=\"config.allowNumbersOnly\"\n        (change)=\"onConfigChange()\">\n      <span class=\"s-t\">Allow number only</span>\n    </li>\n    <li>\n      <input type=\"checkbox\" name=\"pass-input\" id=\"pass-input\" [(ngModel)]=\"config.isPasswordInput\"\n        (change)=\"onConfigChange()\">\n      <span class=\"s-t\">Password input</span>\n    </li>\n    <li>\n      <input type=\"checkbox\" name=\"disable-focus\" id=\"disable-focus\" [(ngModel)]=\"config.disableAutoFocus\"\n        (change)=\"onConfigChange()\">\n      <span class=\"s-t\">Disable auto focus</span>\n    </li>\n    <li>\n      <span class=\"s-t\">Number of inputs</span>\n      <input type=\"number\" name=\"input-length\" class=\"f-c\" [(ngModel)]=\"config.length\" min=\"1\" max=\"10\"\n        (ngModelChange)=\"onConfigChange()\">\n    </li>\n    <li>\n      <span class=\"s-t\">Placeholder</span>\n      <input type=\"text\" name=\"input-placeholder\" [(ngModel)]=\"config.placeholder\" class=\"f-c\" maxlength=\"1\"  (change)=\"onConfigChange()\">\n    </li>\n    <li>\n      <span class=\"s-t\">Update value to</span>\n      <input type=\"text\" #valInput name=\"input-update-val\" placeholder=\"Focus out to change\" (change)=\"setVal(valInput.value)\" class=\"f-c\" min=\"1\" max=\"10\">\n    </li>\n    <li>\n      <button class=\"btn\" (click)=\"toggleDisable()\">Toogle Disable</button>\n    </li>\n  </ul>\n</div>\n<div class=\"content\">\n  <div class=\"o-c\">\n    <div>\n      <div class=\"card\">\n        <form [formGroup]=\"otpForm\">\n          <p class=\"a-o-i\">Enter verification code</p>\n          <ng-otp-input #ngOtpInput (onInputChange)=\"onOtpChange($event)\" *ngIf=\"showOtpComponent\" [config]=\"config\"\n            formControlName=\"otp\">\n          </ng-otp-input>\n          <span *ngIf=\"otpForm.invalid && otpForm.get('otp').errors\" class=\"o-t-p\">Otp must be {{config.length}} characters long</span>\n          <span *ngIf=\"otp\" class=\"o-t-p\">Entered otp:-{{otp}}</span>\n          <span *ngIf=\"otpForm.value.otp\" class=\"o-t-p\">Form otp:-{{otpForm.value.otp}}</span>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".a-o-i, .a-o-i-t {\n  font-size: 30px;\n  font-weight: 600;\n  margin-top: 0;\n}\n\n.a-o-i-t {\n  font-size: 25px;\n  padding: 15px;\n  border-bottom: 1px solid lightgray;\n}\n\n.o-c {\n  text-align: center;\n  display: flex;\n  display: -webkit-flex;\n  height: 100vh;\n  justify-content: center;\n  align-items: center;\n}\n\n.s-t {\n  font-size: 16px;\n  font-weight: 600;\n}\n\n.list {\n  list-style: none;\n  margin-top: 0;\n  padding: 0;\n}\n\n.list li {\n  padding-bottom: 10px;\n  border-bottom: 1px solid lightgray;\n  padding-top: 10px;\n  padding-left: 40px;\n}\n\n.btn-updt {\n  color: #333;\n  background-color: #fff;\n  border-color: #ccc;\n  display: inline-block;\n  margin-bottom: 0;\n  font-weight: 400;\n  text-align: center;\n  vertical-align: middle;\n  background-image: none;\n  border: 1px solid #ccc4c4;\n  padding: 6px 12px;\n  font-size: 14px;\n  line-height: 1.42857143;\n  border-radius: 4px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n  cursor: pointer;\n}\n\n.card {\n  padding: 2rem;\n  box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;\n  border-radius: 4px;\n  background: white;\n  margin: 0 auto;\n}\n\n.btn {\n  border: 1px solid lightgrey;\n  margin: 0.5rem 0;\n  height: 1.5rem;\n  padding: 0 0.5rem;\n  background: white;\n  width: 150px;\n  border-radius: 4px;\n}\n\n.o-t-p {\n  display: block;\n  margin-top: 10px;\n  font-size: 19px;\n}\n\n.content {\n  display: inline-block;\n  width: calc(100% - 250px);\n  vertical-align: top;\n}\n\n.sidebar {\n  width: 250px;\n  height: 100vh;\n  display: inline-block;\n  box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;\n}\n\n.f-c {\n  width: 150px;\n  border-radius: 4px;\n  border: 1px solid lightgrey;\n  margin: 0.5rem 0;\n  height: 1.5rem;\n  padding: 0 0.5rem;\n}\n\n@media screen and (max-width: 767px) {\n  .sidebar {\n    width: 100%;\n    height: auto;\n  }\n\n  .content {\n    width: 100%;\n  }\n\n  .o-c {\n    display: block;\n  }\n\n  .list li {\n    padding-left: 2px;\n    width: calc(50% - 2px);\n    display: inline-block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUNBO0VBRUUsZUFBQTtFQUNBLGFBQUE7RUFDQSxrQ0FBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBQUU7RUFDRSxvQkFBQTtFQUNBLGtDQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUVKOztBQUNBO0VBQ0UsV0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBRUEsaUJBQUE7RUFDQSxlQUFBO0FBRUY7O0FBQ0E7RUFDRSxhQUFBO0VBQ0Esa0RBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUVGOztBQUFBO0VBQ0csMkJBQUE7RUFDQyxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBR0o7O0FBQUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBR0Y7O0FBQUE7RUFDRSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFHRjs7QUFBQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxrREFBQTtBQUdGOztBQURBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUlGOztBQUZBO0VBQ0U7SUFDRSxXQUFBO0lBQ0EsWUFBQTtFQUtGOztFQUhBO0lBQ0UsV0FBQTtFQU1GOztFQUpBO0lBQ0UsY0FBQTtFQU9GOztFQUpFO0lBQ0UsaUJBQUE7SUFDQSxzQkFBQTtJQUNBLHFCQUFBO0VBT0o7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hLW8taSB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLXRvcDogMDtcbn1cbi5hLW8taS10IHtcbiAgQGV4dGVuZCAuYS1vLWk7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgcGFkZGluZzogMTVweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbn1cblxuLm8tYyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnMtdCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmxpc3Qge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW4tdG9wOiAwO1xuICBwYWRkaW5nOiAwO1xuICBsaSB7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gIH1cbn1cbi5idG4tdXBkdCB7XG4gIGNvbG9yOiAjMzMzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItY29sb3I6ICNjY2M7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjNGM0O1xuICBwYWRkaW5nOiA2cHggMTJweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS40Mjg1NzE0MztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jYXJkIHtcbiAgcGFkZGluZzogMnJlbTtcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IDAgI2Q0ZDRkNSwgMCAwIDAgMXB4ICNkNGQ0ZDU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLmJ0bntcbiAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcbiAgICBtYXJnaW46IDAuNXJlbSAwO1xuICAgIGhlaWdodDogMS41cmVtO1xuICAgIHBhZGRpbmc6IDAgMC41cmVtO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5vLXQtcCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBmb250LXNpemU6IDE5cHg7XG59XG5cbi5jb250ZW50IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogY2FsYygxMDAlIC0gMjUwcHgpO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4uc2lkZWJhciB7XG4gIHdpZHRoOiAyNTBweDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggMCAjZDRkNGQ1LCAwIDAgMCAxcHggI2Q0ZDRkNTtcbn1cbi5mLWMge1xuICB3aWR0aDogMTUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmV5O1xuICBtYXJnaW46IDAuNXJlbSAwO1xuICBoZWlnaHQ6IDEuNXJlbTtcbiAgcGFkZGluZzogMCAwLjVyZW07XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuc2lkZWJhciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG4gIC5jb250ZW50IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuby1jIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAubGlzdCB7XG4gICAgbGkge1xuICAgICAgcGFkZGluZy1sZWZ0OiAycHg7XG4gICAgICB3aWR0aDogY2FsYyg1MCUgLSAycHgpO1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIH1cbiAgfVxufVxuIl19 */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var AppComponent = /** @class */ (function () {
    function AppComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.otp = '';
        this.showOtpComponent = true;
        this.config = {
            allowNumbersOnly: false,
            length: 5,
            isPasswordInput: false,
            disableAutoFocus: false,
            placeholder: '',
            inputStyles: {
                'width': '50px',
                'height': '50px'
            }
        };
        this.otpForm = this.formBuilder.group({
            otp: [this.config.placeholder.repeat(this.config.length),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(this.config.length)]
        });
    }
    AppComponent.prototype.onOtpChange = function (otp) {
        this.otp = otp;
    };
    AppComponent.prototype.setVal = function (val) {
        this.ngOtpInput.setValue(val);
    };
    AppComponent.prototype.toggleDisable = function () {
        if (this.ngOtpInput.otpForm) {
            this.ngOtpInput.setDisabledState(!this.ngOtpInput.otpForm.disabled);
        }
    };
    AppComponent.prototype.onConfigChange = function () {
        var _this = this;
        this.showOtpComponent = false;
        this.otp = null;
        this.otpForm.reset({ otp: this.config.placeholder.repeat(this.config.length) });
        setTimeout(function () {
            _this.showOtpComponent = true;
        }, 0);
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }
    ]; };
    AppComponent.propDecorators = {
        ngOtpInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['ngOtpInput', { static: false },] }]
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ng_otp_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-otp-input */ "./node_modules/ng-otp-input/__ivy_ngcc__/fesm2015/ng-otp-input.js");
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
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ng_otp_input__WEBPACK_IMPORTED_MODULE_4__["NgOtpInputModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\mauro\workspace\ng-otp-input\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map