webpackJsonp([1,4],{

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(693);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(694);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MongoService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MongoService = (function () {
    function MongoService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]({ 'Content-Type': 'application/json' }) });
    }
    MongoService.prototype.getMongo = function (sueldo) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        params.set('sueldo', sueldo.toString());
        return this.http.get("/average", params)
            .map(this.extractData)
            .catch(this.handleError);
    };
    MongoService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    MongoService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    MongoService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* Http */]) === 'function' && _a) || Object])
    ], MongoService);
    return MongoService;
    var _a;
}());
//# sourceMappingURL=C:/xampp/htdocs/Angular2CalcularSueldo/src/mongo.service.js.map

/***/ }),

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Resultado; });
var Resultado = (function () {
    function Resultado() {
    }
    return Resultado;
}());
//# sourceMappingURL=C:/xampp/htdocs/Angular2CalcularSueldo/src/resultado.js.map

/***/ }),

/***/ 416:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 416;


/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(527);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/xampp/htdocs/Angular2CalcularSueldo/src/main.js.map

/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.objCalcular = function (event) {
        this.e = event;
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(687),
            styles: [__webpack_require__(684)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/xampp/htdocs/Angular2CalcularSueldo/src/app.component.js.map

/***/ }),

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__formulario_formulario_component__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__formulario_resultado_resultado_component__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__mongo_service__ = __webpack_require__(373);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__formulario_resultado_resultado_component__["a" /* ResultadoComponent */],
                __WEBPACK_IMPORTED_MODULE_6__formulario_formulario_component__["a" /* FormularioComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* JsonpModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__mongo_service__["a" /* MongoService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/xampp/htdocs/Angular2CalcularSueldo/src/app.module.js.map

/***/ }),

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resultado__ = __webpack_require__(374);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormularioComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormularioComponent = (function () {
    function FormularioComponent() {
        /* ngModel */
        this.sueldo = 18000;
        this.impuesto = 15;
        this.pagas = 14;
        this.totals = null;
    }
    FormularioComponent.prototype.onSelect = function () {
        var totals = this.calculateTotals();
        this.totals = totals;
    };
    FormularioComponent.prototype.calculateTotals = function () {
        var sueldo = this.sueldo;
        var irpf = this.impuesto;
        var pagas = this.pagas;
        var anual = sueldo / (pagas);
        var base_cotizacion = anual + (anual * 2) / 12;
        //Impuestos naturales
        var contingencias = (base_cotizacion * 4.7 / 100);
        var desempleo = (base_cotizacion * 1.55 / 100);
        var fp = (base_cotizacion * 0.1 / 100);
        var total_naturales = contingencias + desempleo + fp;
        //Impuestos variables ( Irpf )
        var impuesto_irpf = (anual * irpf) / 100;
        var total_impuestos = impuesto_irpf + total_naturales;
        var sueldo_final = anual - total_impuestos;
        //Paga extra
        var extra = anual - (anual * irpf) / 100;
        var mes_extra = (anual * pagas) / 12;
        var resultado = new __WEBPACK_IMPORTED_MODULE_1__resultado__["a" /* Resultado */]();
        resultado.contingencias = contingencias;
        resultado.desempleo = desempleo;
        resultado.fp = fp;
        resultado.total_naturales = total_naturales;
        resultado.impuesto_irpf = impuesto_irpf;
        resultado.total_impuestos = total_impuestos;
        resultado.sueldo_final = sueldo_final;
        resultado.anual = anual;
        resultado.extra = extra;
        resultado.mes_extra = mes_extra;
        resultado.sueldo = this.sueldo;
        return resultado;
    };
    FormularioComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-formulario',
            template: __webpack_require__(688),
            styles: [__webpack_require__(685)]
        }), 
        __metadata('design:paramtypes', [])
    ], FormularioComponent);
    return FormularioComponent;
}());
//# sourceMappingURL=C:/xampp/htdocs/Angular2CalcularSueldo/src/formulario.component.js.map

/***/ }),

/***/ 529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resultado__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mongo_service__ = __webpack_require__(373);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultadoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResultadoComponent = (function () {
    function ResultadoComponent(mongoService) {
        this.mongoService = mongoService;
    }
    ResultadoComponent.prototype.ngOnInit = function () {
        this.totales = new __WEBPACK_IMPORTED_MODULE_1__resultado__["a" /* Resultado */]();
        this.isVisible = Object.keys(this.totales);
    };
    ResultadoComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        console.log(changes);
        if (changes['totales'].currentValue != null) {
            var _sueldo = changes['totales'].currentValue.sueldo;
            this.mongoService.getMongo(_sueldo)
                .subscribe(function (sueldo) { return _this.sueldo = sueldo; });
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__resultado__["a" /* Resultado */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__resultado__["a" /* Resultado */]) === 'function' && _a) || Object)
    ], ResultadoComponent.prototype, "totales", void 0);
    ResultadoComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-resultado',
            template: __webpack_require__(689),
            styles: [__webpack_require__(686)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__mongo_service__["a" /* MongoService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__mongo_service__["a" /* MongoService */]) === 'function' && _b) || Object])
    ], ResultadoComponent);
    return ResultadoComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/xampp/htdocs/Angular2CalcularSueldo/src/resultado.component.js.map

/***/ }),

/***/ 530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/xampp/htdocs/Angular2CalcularSueldo/src/environment.js.map

/***/ }),

/***/ 684:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 685:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 686:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 687:
/***/ (function(module, exports) {

module.exports = "\n<app-formulario></app-formulario>\n\n"

/***/ }),

/***/ 688:
/***/ (function(module, exports) {

module.exports = "\n<form role=\"form\" name=\"Formulario\" class=\"form\">\n\n    <div class=\"container\">\n        <fieldset class=\"form-group\">\n        <legend>Calcula tu sueldo</legend>\n            <div class=\"row\">\n                <div class=\"col\">\n                    <div class=\"form-control\">\n                        <label for=\"sueldo\">Sueldo</label>\n                        <input name=\"sueldo\" id=\"sueldo\" [(ngModel)]=\"sueldo\" placeholder=\"20000\" type=\"Number\" required>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col\">\n                    <div class=\"form-control\">\n                        <label for=\"impuesto\">Irpf</label>\n                        <input name=\"impuesto\" id=\"impuesto\" [(ngModel)]=\"impuesto\"  placeholder=\"12\" type=\"Number\" required>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col\">\n                    <div class=\"form-control\">\n                        <label for=\"pagas\">Pagas</label>\n                        <input name=\"pagas\" id=\"pagas\" [(ngModel)]=\"pagas\"  placeholder=\"12\" type=\"Number\" required>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col\">\n                    <button type=\"submit\" class=\"btn btn-success\" (click)=\"onSelect()\">Success</button>\n                </div>\n            </div>\n        </fieldset>\n    </div>\n</form>\n\n<app-resultado [totales]='totals'></app-resultado>"

/***/ }),

/***/ 689:
/***/ (function(module, exports) {

module.exports = "<section  [hidden]=\"!totales.contingencias\" (change)=\"totales\">\n\n     <div class=\"container margin-top\">\n        <div class=\"well\">\n        <p>Se resume en Ingresos totales (Sueldo bruto anual) - Gastos (Impuestos)</p>\n        <h1>Gastos</h1>\n\n        <table class=\"table table-striped\">\n        <tr>\n            <td>contingencias Comunes 4,7%: </td>\n            <td >{{totales.contingencias |  currency : 'EUR' }} €</td>\n        </tr>\n        <tr>\n            <td>desempleo 1,55%: </td>\n            <td>{{totales.desempleo |  currency : 'EUR' }} €</td>\n        </tr>\n        <tr>\n            <td>Formacion Profesional 0,1%: </td>\n            <td>{{totales.fp |  currency : 'EUR' }} €</td>\n        </tr>\n        <tr>\n            <th>Total contingencias: </th>\n            <th>{{totales.total_naturales |  currency : 'EUR' }} €</th>\n        </tr>\n        <tr>\n            <th>Total Irpf: </th>\n            <th>{{totales.impuesto_irpf |  currency : 'EUR' }} €</th>\n        </tr>\n    </table>\n\n            \n            <h4>Total Impuestos al mes: {{totales.total_impuestos | currency : 'EUR' }} €</h4>\n            <h2>Ingresos mensuales: {{totales.sueldo_final | currency : 'EUR' }} €</h2>\n            <p>Los ingresos son calculados a años completos, es decir, desde Enero hasta Diciembre.</p>\n            <p class=\"Cursive\">En caso de no estar a año completo, se puede calcular mediante el minimo de <b>Irpf</b>, con lo que sería el propio trabajador el que debería ponerlo en orden.</p>\n\n            <!--\t\tParte de Paga extra\t-->\t \n            <section  class=\"container\">\n                <p>La parte de la paga extra, se calcula en función del salario / {{totales.paga + 12}} pagas ({{totales.paga}} Pagas extras), que en este caso es de {{totales.anual | currency : 'EUR' }}€</p>\n                \n                <p>Cada mes se guarda la cantidad de {{ totales.mes_extra | currency : 'EUR'}}€ para la paga extra, o lo que es lo mismo... Mes sin impuestos {{ totales.anual | currency : 'EUR' }} € - irpf  {{ totales.impuesto_irpf | currency : 'EUR' }} €  </p>\n                \n                <p><strong>Total</strong> = {{ totales.anual - totales.impuesto_irpf | currency : 'EUR' }} €.</p>\n                \n            </section>\n\n        </div>\n    </div>\n    \n</section>"

/***/ }),

/***/ 712:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(417);


/***/ })

},[712]);
//# sourceMappingURL=main.bundle.map