webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".deleteSkill {\n  cursor: pointer;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header\">\n  <h1>Test Java Atos <small>Consulta de Funcionários</small></h1>\n</div>\n\n<div class=\"panel panel-default\">\n  <div class=\"panel-heading\">Filtro</div>\n  <div class=\"panel-body\">\n    <form [formGroup]=\"skillsForm\" (ngSubmit)=\"onAddSkill()\">\n      <label for=\"skill\">Skill: </label>\n      <div class=\"input-group\" style=\"width: 400px\">\n        <input\n          type=\"text\"\n          id=\"skill\"\n          formControlName=\"skill\"\n          class=\"form-control\">\n        <span class=\"input-group-btn\">\n          <button class=\"btn btn-success\" type=\"submit\">Adicionar</button>\n        </span>\n      </div>\n    </form>\n    <br/>\n    <span>Filtros adicionados</span>\n    <div>\n        <h4 *ngFor=\"let skill of skillsOnFilter\">\n          <span class=\"label label-default\">{{skill}}<a class=\"deleteSkill\" style=\"color: white\" (click)=\"removeSkill(skill)\">\n          <span class=\"glyphicon\">&#xe020;</span>\n        </a>\n            </span>\n        </h4>\n    </div>\n    <button class=\"btn btn-primary\" type=\"button\" (click)=\"onFilter()\">Filtrar</button>\n  </div>\n</div>\n\n<div class=\"panel panel-default\">\n  <div class=\"panel-heading\">Resultado da Pesquisa</div>\n  <div class=\"panel-body\">\n    <table class=\"table\">\n      <thead>\n        <td>Nome</td>\n        <td>Cargo</td>\n        <td>Salário</td>\n      </thead>\n      <tr *ngFor=\"let employee of employees\">\n        <td>{{employee.name}}</td>\n        <td>{{employee.role}}</td>\n        <td>{{employee.salary}}</td>\n      </tr>\n    </table>\n\n    <div class=\"alert alert-warning\" role=\"alert\" *ngIf=\"noEmployeesFound\">Nenhum funcionário encontrado para sua busca.</div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(htmlClient) {
        this.htmlClient = htmlClient;
        this.skillsOnFilter = [];
        this.employees = [];
        this.noEmployeesFound = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.skillsForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            'skill': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required])
        });
    };
    AppComponent.prototype.onAddSkill = function () {
        var skill = this.skillsForm.value.skill;
        var exists = this.skillsOnFilter.some(skillExists(skill));
        if (skill && !exists) {
            this.skillsOnFilter.push(skill);
            this.skillsForm.reset();
        }
    };
    AppComponent.prototype.removeSkill = function (skill) {
        var indexOf = this.skillsOnFilter.indexOf(skill);
        this.skillsOnFilter.splice(indexOf, 1);
    };
    AppComponent.prototype.onFilter = function () {
        var _this = this;
        var requestBody = { skills: this.skillsOnFilter };
        this.htmlClient.post('http://localhost:8080/api/employee/findEmployeesBySkill', requestBody)
            .subscribe(function (value) {
            console.info(value);
            _this.employees == value;
            _this.noEmployeesFound = _this.employees.length <= 0;
        }, function (error2) {
            console.error(error2);
            _this.employees = [];
            _this.noEmployeesFound = true;
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], AppComponent);
    return AppComponent;
}());

function skillExists(skill) {
    return function skillAlreadyExist(element, index, array) {
        return (element === skill);
    };
}


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map