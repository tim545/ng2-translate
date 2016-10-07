!function(e){function r(e,r,o){return 4===arguments.length?t.apply(this,arguments):void n(e,{declarative:!0,deps:r,declare:o})}function t(e,r,t,o){n(e,{declarative:!1,deps:r,executingRequire:t,execute:o})}function n(e,r){r.name=e,e in v||(v[e]=r),r.normalizedDeps=r.deps}function o(e,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==g.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var t=0,n=e.normalizedDeps.length;n>t;t++){var a=e.normalizedDeps[t],u=v[a];if(u&&!u.evaluated){var d=e.groupIndex+(u.declarative!=e.declarative);if(void 0===u.groupIndex||u.groupIndex<d){if(void 0!==u.groupIndex&&(r[u.groupIndex].splice(g.call(r[u.groupIndex],u),1),0==r[u.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");u.groupIndex=d}o(u,r)}}}}function a(e){var r=v[e];r.groupIndex=0;var t=[];o(r,t);for(var n=!!r.declarative==t.length%2,a=t.length-1;a>=0;a--){for(var u=t[a],i=0;i<u.length;i++){var s=u[i];n?d(s):l(s)}n=!n}}function u(e){return y[e]||(y[e]={name:e,dependencies:[],exports:{},importers:[]})}function d(r){if(!r.module){var t=r.module=u(r.name),n=r.module.exports,o=r.declare.call(e,function(e,r){if(t.locked=!0,"object"==typeof e)for(var o in e)n[o]=e[o];else n[e]=r;for(var a=0,u=t.importers.length;u>a;a++){var d=t.importers[a];if(!d.locked)for(var i=0;i<d.dependencies.length;++i)d.dependencies[i]===t&&d.setters[i](n)}return t.locked=!1,r},{id:r.name});t.setters=o.setters,t.execute=o.execute;for(var a=0,i=r.normalizedDeps.length;i>a;a++){var l,s=r.normalizedDeps[a],c=v[s],f=y[s];f?l=f.exports:c&&!c.declarative?l=c.esModule:c?(d(c),f=c.module,l=f.exports):l=p(s),f&&f.importers?(f.importers.push(t),t.dependencies.push(f)):t.dependencies.push(null),t.setters[a]&&t.setters[a](l)}}}function i(e){var r,t=v[e];if(t)t.declarative?f(e,[]):t.evaluated||l(t),r=t.module.exports;else if(r=p(e),!r)throw new Error("Unable to load dependency "+e+".");return(!t||t.declarative)&&r&&r.__useDefault?r["default"]:r}function l(r){if(!r.module){var t={},n=r.module={exports:t,id:r.name};if(!r.executingRequire)for(var o=0,a=r.normalizedDeps.length;a>o;o++){var u=r.normalizedDeps[o],d=v[u];d&&l(d)}r.evaluated=!0;var c=r.execute.call(e,function(e){for(var t=0,n=r.deps.length;n>t;t++)if(r.deps[t]==e)return i(r.normalizedDeps[t]);throw new TypeError("Module "+e+" not declared as a dependency.")},t,n);void 0!==typeof c&&(n.exports=c),t=n.exports,t&&t.__esModule?r.esModule=t:r.esModule=s(t)}}function s(r){var t={};if(("object"==typeof r||"function"==typeof r)&&r!==e)if(m)for(var n in r)"default"!==n&&c(t,r,n);else{var o=r&&r.hasOwnProperty;for(var n in r)"default"===n||o&&!r.hasOwnProperty(n)||(t[n]=r[n])}return t["default"]=r,x(t,"__useDefault",{value:!0}),t}function c(e,r,t){try{var n;(n=Object.getOwnPropertyDescriptor(r,t))&&x(e,t,n)}catch(o){return e[t]=r[t],!1}}function f(r,t){var n=v[r];if(n&&!n.evaluated&&n.declarative){t.push(r);for(var o=0,a=n.normalizedDeps.length;a>o;o++){var u=n.normalizedDeps[o];-1==g.call(t,u)&&(v[u]?f(u,t):p(u))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function p(e){if(I[e])return I[e];if("@node/"==e.substr(0,6))return I[e]=s(D(e.substr(6)));var r=v[e];if(!r)throw"Module "+e+" not present.";return a(e),f(e,[]),v[e]=void 0,r.declarative&&x(r.module.exports,"__esModule",{value:!0}),I[e]=r.declarative?r.module.exports:r.esModule}var v={},g=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},m=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(h){m=!1}var x;!function(){try{Object.defineProperty({},"a",{})&&(x=Object.defineProperty)}catch(e){x=function(e,r,t){try{e[r]=t.value||t.get.call(e)}catch(n){}}}}();var y={},D="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&require.resolve&&"undefined"!=typeof process&&require,I={"@empty":{}};return function(e,n,o,a){return function(u){u(function(u){for(var d={_nodeRequire:D,register:r,registerDynamic:t,get:p,set:function(e,r){I[e]=r},newModule:function(e){return e}},i=0;i<n.length;i++)(function(e,r){r&&r.__esModule?I[e]=r:I[e]=s(r)})(n[i],arguments[i]);a(d);var l=p(e[0]);if(e.length>1)for(var i=1;i<e.length;i++)p(e[i]);return o?l["default"]:l})}}}("undefined"!=typeof self?self:global)

(["1"], ["3","c","5","6","8","9","7","a"], true, function($__System) {
var require = this.require, exports = this.exports, module = this.module;
$__System.registerDynamic('2', ['3', '4'], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var core_1 = $__require('3');
    var translate_service_1 = $__require('4');
    var TranslatePipe = function () {
        function TranslatePipe(translate, _ref) {
            this.translate = translate;
            this._ref = _ref;
            this.value = '';
        }
        /* tslint:disable */
        /**
         * @name equals
         *
         * @description
         * Determines if two objects or two values are equivalent.
         *
         * Two objects or values are considered equivalent if at least one of the following is true:
         *
         * * Both objects or values pass `===` comparison.
         * * Both objects or values are of the same type and all of their properties are equal by
         *   comparing them with `equals`.
         *
         * @param {*} o1 Object or value to compare.
         * @param {*} o2 Object or value to compare.
         * @returns {boolean} True if arguments are equal.
         */
        TranslatePipe.prototype.equals = function (o1, o2) {
            if (o1 === o2) return true;
            if (o1 === null || o2 === null) return false;
            if (o1 !== o1 && o2 !== o2) return true; // NaN === NaN
            var t1 = typeof o1,
                t2 = typeof o2,
                length,
                key,
                keySet;
            if (t1 == t2 && t1 == 'object') {
                if (Array.isArray(o1)) {
                    if (!Array.isArray(o2)) return false;
                    if ((length = o1.length) == o2.length) {
                        for (key = 0; key < length; key++) {
                            if (!this.equals(o1[key], o2[key])) return false;
                        }
                        return true;
                    }
                } else {
                    if (Array.isArray(o2)) {
                        return false;
                    }
                    keySet = Object.create(null);
                    for (key in o1) {
                        if (!this.equals(o1[key], o2[key])) {
                            return false;
                        }
                        keySet[key] = true;
                    }
                    for (key in o2) {
                        if (!(key in keySet) && typeof o2[key] !== 'undefined') {
                            return false;
                        }
                    }
                    return true;
                }
            }
            return false;
        };
        /* tslint:enable */
        TranslatePipe.prototype.updateValue = function (key, interpolateParams) {
            var _this = this;
            this.translate.get(key, interpolateParams).subscribe(function (res) {
                _this.value = res !== undefined ? res : key;
                _this.lastKey = key;
                _this._ref.markForCheck();
            });
        };
        TranslatePipe.prototype.transform = function (query) {
            var _this = this;
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            if (!query || query.length === 0) {
                return query;
            }
            // if we ask another time for the same key, return the last value
            if (this.equals(query, this.lastKey) && this.equals(args, this.lastParams)) {
                return this.value;
            }
            var interpolateParams;
            if (args.length && args[0] !== null) {
                if (typeof args[0] === 'string' && args[0].length) {
                    // we accept objects written in the template such as {n:1},
                    // which is why we might need to change it to real JSON objects such as {"n":1}
                    try {
                        interpolateParams = JSON.parse(args[0].replace(/(['"])?([a-zA-Z0-9_]+)(['"])?:/g, '"$2": '));
                    } catch (e) {
                        throw new SyntaxError("Wrong parameter in TranslatePipe. Expected a valid Object, received: " + args[0]);
                    }
                } else if (typeof args[0] === 'object' && !Array.isArray(args[0])) {
                    interpolateParams = args[0];
                }
            }
            // store the query, in case it changes
            this.lastKey = query;
            // store the params, in case they change
            this.lastParams = args;
            // set the value
            this.updateValue(query, interpolateParams);
            // if there is a subscription to onLangChange, clean it
            this._dispose();
            // subscribe to onTranslationChange event, in case the translations change
            if (!this.onTranslationChange) {
                this.onTranslationChange = this.translate.onTranslationChange.subscribe(function (event) {
                    if (_this.lastKey && event.lang === _this.translate.currentLang) {
                        _this.lastKey = null;
                        _this.updateValue(query, interpolateParams);
                    }
                });
            }
            // subscribe to onLangChange event, in case the language changes
            if (!this.onLangChange) {
                this.onLangChange = this.translate.onLangChange.subscribe(function (event) {
                    if (_this.lastKey) {
                        _this.lastKey = null; // we want to make sure it doesn't return the same value until it's been updated
                        _this.updateValue(query, interpolateParams);
                    }
                });
            }
            return this.value;
        };
        /**
         * Clean any existing subscription to change events
         * @private
         */
        TranslatePipe.prototype._dispose = function () {
            if (typeof this.onTranslationChange !== 'undefined') {
                this.onTranslationChange.unsubscribe();
                this.onTranslationChange = undefined;
            }
            if (typeof this.onLangChange !== 'undefined') {
                this.onLangChange.unsubscribe();
                this.onLangChange = undefined;
            }
        };
        TranslatePipe.prototype.ngOnDestroy = function () {
            this._dispose();
        };
        TranslatePipe.decorators = [{ type: core_1.Injectable }, { type: core_1.Pipe, args: [{
                name: 'translate',
                pure: false // required to update the value when the promise is resolved
            }] }];
        /** @nocollapse */
        TranslatePipe.ctorParameters = [{ type: translate_service_1.TranslateService }, { type: core_1.ChangeDetectorRef }];
        return TranslatePipe;
    }();
    exports.TranslatePipe = TranslatePipe;
    return module.exports;
});
$__System.registerDynamic("4", ["3", "5", "6", "7", "8", "9", "a", "b"], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var core_1 = $__require("3");
    var Observable_1 = $__require("5");
    $__require("6");
    $__require("7");
    $__require("8");
    $__require("9");
    $__require("a");
    var translate_parser_1 = $__require("b");
    var MissingTranslationHandler = function () {
        function MissingTranslationHandler() {}
        return MissingTranslationHandler;
    }();
    exports.MissingTranslationHandler = MissingTranslationHandler;
    var TranslateLoader = function () {
        function TranslateLoader() {}
        return TranslateLoader;
    }();
    exports.TranslateLoader = TranslateLoader;
    var TranslateStaticLoader = function () {
        function TranslateStaticLoader(http, prefix, suffix) {
            if (prefix === void 0) {
                prefix = "i18n";
            }
            if (suffix === void 0) {
                suffix = ".json";
            }
            this.http = http;
            this.prefix = prefix;
            this.suffix = suffix;
        }
        /**
         * Gets the translations from the server
         * @param lang
         * @returns {any}
         */
        TranslateStaticLoader.prototype.getTranslation = function (lang) {
            return this.http.get(this.prefix + "/" + lang + this.suffix).map(function (res) {
                return res.json();
            });
        };
        return TranslateStaticLoader;
    }();
    exports.TranslateStaticLoader = TranslateStaticLoader;
    var TranslateService = function () {
        /**
         *
         * @param http The Angular 2 http provider
         * @param currentLoader An instance of the loader currently used
         * @param missingTranslationHandler A handler for missing translations.
         */
        function TranslateService(currentLoader, missingTranslationHandler) {
            this.currentLoader = currentLoader;
            this.missingTranslationHandler = missingTranslationHandler;
            /**
             * The lang currently used
             */
            this.currentLang = this.defaultLang;
            /**
             * An EventEmitter to listen to translation change events
             * onTranslationChange.subscribe((params: TranslationChangeEvent) => {
             *     // do something
             * });
             * @type {ng.EventEmitter<TranslationChangeEvent>}
             */
            this.onTranslationChange = new core_1.EventEmitter();
            /**
             * An EventEmitter to listen to lang change events
             * onLangChange.subscribe((params: LangChangeEvent) => {
             *     // do something
             * });
             * @type {ng.EventEmitter<LangChangeEvent>}
             */
            this.onLangChange = new core_1.EventEmitter();
            this.translations = {};
            this.langs = [];
            this.parser = new translate_parser_1.Parser();
        }
        /**
         * Sets the default language to use as a fallback
         * @param lang
         */
        TranslateService.prototype.setDefaultLang = function (lang) {
            this.defaultLang = lang;
        };
        /**
         * Gets the default language used
         * @returns string
         */
        TranslateService.prototype.getDefaultLang = function () {
            return this.defaultLang;
        };
        /**
         * Changes the lang currently used
         * @param lang
         * @returns {Observable<*>}
         */
        TranslateService.prototype.use = function (lang) {
            var _this = this;
            var pending;
            // check if this language is available
            if (typeof this.translations[lang] === "undefined") {
                // not available, ask for it
                pending = this.getTranslation(lang);
            }
            if (typeof pending !== "undefined") {
                // on init set the currentLang immediately
                if (!this.currentLang) {
                    this.currentLang = lang;
                }
                pending.subscribe(function (res) {
                    _this.changeLang(lang);
                });
                return pending;
            } else {
                this.changeLang(lang);
                return Observable_1.Observable.of(this.translations[lang]);
            }
        };
        /**
         * Gets an object of translations for a given language with the current loader
         * @param lang
         * @returns {Observable<*>}
         */
        TranslateService.prototype.getTranslation = function (lang) {
            var _this = this;
            this.pending = this.currentLoader.getTranslation(lang).share();
            this.pending.subscribe(function (res) {
                _this.translations[lang] = res;
                _this.updateLangs();
            }, function (err) {
                throw err;
            }, function () {
                _this.pending = undefined;
            });
            return this.pending;
        };
        /**
         * Manually sets an object of translations for a given language
         * @param lang
         * @param translations
         * @param shouldMerge
         */
        TranslateService.prototype.setTranslation = function (lang, translations, shouldMerge) {
            if (shouldMerge === void 0) {
                shouldMerge = false;
            }
            if (shouldMerge && this.translations[lang]) {
                Object.assign(this.translations[lang], translations);
                this.onTranslationChange.emit({ translations: translations, lang: lang });
            } else {
                this.translations[lang] = translations;
            }
            this.updateLangs();
        };
        /**
         * Returns an array of currently available langs
         * @returns {any}
         */
        TranslateService.prototype.getLangs = function () {
            return this.langs;
        };
        /**
         * @param langs
         * Add available langs
         */
        TranslateService.prototype.addLangs = function (langs) {
            var _this = this;
            langs.forEach(function (lang) {
                if (_this.langs.indexOf(lang) === -1) {
                    _this.langs.push(lang);
                }
            });
        };
        /**
         * Update the list of available langs
         */
        TranslateService.prototype.updateLangs = function () {
            this.addLangs(Object.keys(this.translations));
        };
        /**
         * Returns the parsed result of the translations
         * @param translations
         * @param key
         * @param interpolateParams
         * @returns {any}
         */
        TranslateService.prototype.getParsedResult = function (translations, key, interpolateParams) {
            var res;
            if (key instanceof Array) {
                var result = {},
                    observables = false;
                for (var _i = 0, key_1 = key; _i < key_1.length; _i++) {
                    var k = key_1[_i];
                    result[k] = this.getParsedResult(translations, k, interpolateParams);
                    if (typeof result[k].subscribe === "function") {
                        observables = true;
                    }
                }
                if (observables) {
                    var mergedObs = void 0;
                    for (var _a = 0, key_2 = key; _a < key_2.length; _a++) {
                        var k = key_2[_a];
                        var obs = typeof result[k].subscribe === "function" ? result[k] : Observable_1.Observable.of(result[k]);
                        if (typeof mergedObs === "undefined") {
                            mergedObs = obs;
                        } else {
                            mergedObs = mergedObs.merge(obs);
                        }
                    }
                    return mergedObs.toArray().map(function (arr) {
                        var obj = {};
                        arr.forEach(function (value, index) {
                            obj[key[index]] = value;
                        });
                        return obj;
                    });
                }
                return result;
            }
            if (translations) {
                res = this.parser.interpolate(this.parser.getValue(translations, key), interpolateParams);
            }
            if (typeof res === "undefined" && this.defaultLang && this.defaultLang !== this.currentLang) {
                res = this.parser.interpolate(this.parser.getValue(this.translations[this.defaultLang], key), interpolateParams);
            }
            if (!res && this.missingTranslationHandler) {
                res = this.missingTranslationHandler.handle(key);
            }
            return res !== undefined ? res : key;
        };
        /**
         * Gets the translated value of a key (or an array of keys)
         * @param key
         * @param interpolateParams
         * @returns {any} the translated key, or an object of translated keys
         */
        TranslateService.prototype.get = function (key, interpolateParams) {
            var _this = this;
            if (!key) {
                throw new Error("Parameter \"key\" required");
            }
            // check if we are loading a new translation to use
            if (this.pending) {
                return Observable_1.Observable.create(function (observer) {
                    var onComplete = function (res) {
                        observer.next(res);
                        observer.complete();
                    };
                    _this.pending.subscribe(function (res) {
                        res = _this.getParsedResult(res, key, interpolateParams);
                        if (typeof res.subscribe === "function") {
                            res.subscribe(onComplete);
                        } else {
                            onComplete(res);
                        }
                    });
                });
            } else {
                var res = this.getParsedResult(this.translations[this.currentLang], key, interpolateParams);
                if (typeof res.subscribe === "function") {
                    return res;
                } else {
                    return Observable_1.Observable.of(res);
                }
            }
        };
        /**
         * Returns a translation instantly from the internal state of loaded translation.
         * All rules regarding the current language, the preferred language of even fallback languages will be used except any promise handling.
         * @param key
         * @param interpolateParams
         * @returns {string}
         */
        TranslateService.prototype.instant = function (key, interpolateParams) {
            if (!key) {
                throw new Error("Parameter \"key\" required");
            }
            var res = this.getParsedResult(this.translations[this.currentLang], key, interpolateParams);
            if (typeof res.subscribe !== "undefined") {
                if (key instanceof Array) {
                    var obj_1 = {};
                    key.forEach(function (value, index) {
                        obj_1[key[index]] = key[index];
                    });
                    return obj_1;
                }
                return key;
            } else {
                return res;
            }
        };
        /**
         * Sets the translated value of a key
         * @param key
         * @param value
         * @param lang
         */
        TranslateService.prototype.set = function (key, value, lang) {
            if (lang === void 0) {
                lang = this.currentLang;
            }
            this.translations[lang][key] = value;
            this.updateLangs();
            this.onTranslationChange.emit({ translations: (_a = {}, _a[key] = value, _a), lang: lang });
            var _a;
        };
        /**
         * Changes the current lang
         * @param lang
         */
        TranslateService.prototype.changeLang = function (lang) {
            this.currentLang = lang;
            this.onLangChange.emit({ lang: lang, translations: this.translations[lang] });
        };
        /**
         * Allows to reload the lang file from the file
         * @param lang
         * @returns {Observable<any>}
         */
        TranslateService.prototype.reloadLang = function (lang) {
            this.resetLang(lang);
            return this.getTranslation(lang);
        };
        /**
         * Deletes inner translation
         * @param lang
         */
        TranslateService.prototype.resetLang = function (lang) {
            this.translations[lang] = undefined;
        };
        TranslateService.prototype.getBrowserLang = function () {
            if (typeof window === 'undefined' || typeof window.navigator === 'undefined') {
                return undefined;
            }
            var browserLang = window.navigator.languages ? window.navigator.languages[0] : null;
            browserLang = browserLang || window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage;
            if (browserLang.indexOf('-') !== -1) {
                browserLang = browserLang.split('-')[0];
            }
            if (browserLang.indexOf('_') !== -1) {
                browserLang = browserLang.split('_')[0];
            }
            return browserLang;
        };
        TranslateService.decorators = [{ type: core_1.Injectable }];
        /** @nocollapse */
        TranslateService.ctorParameters = [{ type: TranslateLoader }, { type: MissingTranslationHandler, decorators: [{ type: core_1.Optional }] }];
        return TranslateService;
    }();
    exports.TranslateService = TranslateService;
    return module.exports;
});
$__System.registerDynamic('b', [], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var Parser = function () {
        function Parser() {
            this.templateMatcher = /{{\s?([^{}\s]*)\s?}}/g;
        }
        /**
         * Interpolates a string to replace parameters
         * "This is a {{ key }}" ==> "This is a value", with params = { key: "value" }
         * @param expr
         * @param params
         * @returns {string}
         */
        Parser.prototype.interpolate = function (expr, params) {
            var _this = this;
            if (typeof expr !== 'string' || !params) {
                return expr;
            }
            return expr.replace(this.templateMatcher, function (substring, b) {
                var r = _this.getValue(params, b);
                return typeof r !== 'undefined' ? r : substring;
            });
        };
        /**
         * Gets a value from an object by composed key
         * parser.getValue({ key1: { keyA: 'valueI' }}, 'key1.keyA') ==> 'valueI'
         * @param target
         * @param key
         * @returns {string}
         */
        Parser.prototype.getValue = function (target, key) {
            var keys = key.split('.');
            key = '';
            do {
                key += keys.shift();
                if (target !== undefined && target[key] !== undefined && (typeof target[key] === 'object' || !keys.length)) {
                    target = target[key];
                    key = '';
                } else if (!keys.length) {
                    target = undefined;
                } else {
                    key += '.';
                }
            } while (keys.length);
            return target;
        };
        return Parser;
    }();
    exports.Parser = Parser;
    return module.exports;
});
$__System.registerDynamic("1", ["3", "c", "2", "4", "b"], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    var core_1 = $__require("3");
    var http_1 = $__require("c");
    var translate_pipe_1 = $__require("2");
    var translate_service_1 = $__require("4");
    __export($__require("2"));
    __export($__require("4"));
    __export($__require("b"));
    function translateLoaderFactory(http) {
        return new translate_service_1.TranslateStaticLoader(http);
    }
    exports.translateLoaderFactory = translateLoaderFactory;
    var TranslateModule = function () {
        function TranslateModule() {}
        TranslateModule.forRoot = function (providedLoader) {
            if (providedLoader === void 0) {
                providedLoader = {
                    provide: translate_service_1.TranslateLoader,
                    useFactory: translateLoaderFactory,
                    deps: [http_1.Http]
                };
            }
            return {
                ngModule: TranslateModule,
                providers: [providedLoader, translate_service_1.TranslateService]
            };
        };
        TranslateModule.decorators = [{ type: core_1.NgModule, args: [{
                imports: [http_1.HttpModule],
                declarations: [translate_pipe_1.TranslatePipe],
                exports: [http_1.HttpModule, translate_pipe_1.TranslatePipe]
            }] }];
        /** @nocollapse */
        TranslateModule.ctorParameters = [];
        return TranslateModule;
    }();
    exports.TranslateModule = TranslateModule;
    return module.exports;
});
})
(function(factory) {
  if (typeof define == 'function' && define.amd)
    define(["@angular/core","@angular/http","rxjs/Observable","rxjs/add/observable/of","rxjs/add/operator/map","rxjs/add/operator/merge","rxjs/add/operator/share","rxjs/add/operator/toArray"], factory);
  else if (typeof module == 'object' && module.exports && typeof require == 'function')
    module.exports = factory(require("@angular/core"), require("@angular/http"), require("rxjs/Observable"), require("rxjs/add/observable/of"), require("rxjs/add/operator/map"), require("rxjs/add/operator/merge"), require("rxjs/add/operator/share"), require("rxjs/add/operator/toArray"));
  else
    throw new Error("Module must be loaded as AMD or CommonJS");
});