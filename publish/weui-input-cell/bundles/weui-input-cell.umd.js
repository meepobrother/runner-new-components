(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs/add/operator/share'), require('rxjs/observable/fromEvent'), require('rxjs/observable/merge'), require('rxjs/add/operator/distinctUntilChanged'), require('rxjs/add/operator/debounceTime')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', 'rxjs/add/operator/share', 'rxjs/observable/fromEvent', 'rxjs/observable/merge', 'rxjs/add/operator/distinctUntilChanged', 'rxjs/add/operator/debounceTime'], factory) :
	(factory((global['weui-input-cell'] = {}),global.ng.core,global.Rx.Observable.prototype,global.Rx.Observable,global.Rx.Observable));
}(this, (function (exports,core,share,fromEvent,merge) { 'use strict';

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @return {?}
 */
function guid() {
    /**
     * @return {?}
     */
    function S4() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }
    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}
/**
 * @param {?} val
 * @return {?}
 */
function type(val) {
    return typeof val;
}
/**
 * @record
 */
/**
 * @abstract
 */
var ReactComponent = (function () {
    /**
     * @param {?} _differs
     * @param {?} ele
     * @param {?} render
     */
    function ReactComponent(_differs, ele, render) {
        this._differs = _differs;
        this.ele = ele;
        this.render = render;
        this.stateChange = new core.EventEmitter();
        this.propsChange = new core.EventEmitter();
        this.onClick = new core.EventEmitter();
        this.guid = guid();
        this.props = ({
            children: []
        });
        this.state = ({});
    }
    Object.defineProperty(ReactComponent.prototype, "state$", {
        /**
         * @return {?}
         */
        get: function () {
            return this.stateChange.share();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReactComponent.prototype, "props$", {
        /**
         * @return {?}
         */
        get: function () {
            return this.propsChange.share();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 监听click事件
     * @param {?} e
     * @return {?}
     */
    ReactComponent.prototype._onClick = function (e) {
        this.onClick.emit(e);
    };
    /**
     * @return {?}
     */
    ReactComponent.prototype.createGuid = function () {
        return guid();
    };
    /**
     * @param {?} state
     * @return {?}
     */
    ReactComponent.prototype.setState = function (state) {
        this._stateDiffer = this._differs.find(this.state).create();
        this.state = state;
        this.ngDoCheck();
    };
    /**
     * @param {?} props
     * @return {?}
     */
    ReactComponent.prototype.setProps = function (props) {
        this._propsDiffer = this._differs.find(this.props).create();
        this.props = props;
        this.ngDoCheck();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    ReactComponent.prototype.ngOnChanges = function (changes) {
        if ('props' in changes) {
            var /** @type {?} */ value = changes['props'].currentValue;
            this._propsDiffer = this._differs.find(value).create();
        }
        if ('state' in changes) {
            var /** @type {?} */ value = changes['state'].currentValue;
            this._stateDiffer = this._differs.find(value).create();
        }
    };
    /**
     * @return {?}
     */
    ReactComponent.prototype.ngDoCheck = function () {
        if (this._propsDiffer) {
            var /** @type {?} */ changes = this._propsDiffer.diff(this.props);
            if (changes)
                this._propsChanges(changes);
        }
        if (this._stateDiffer) {
            var /** @type {?} */ changes = this._stateDiffer.diff(this.state);
            if (changes)
                this._stateChanges(changes);
        }
    };
    /**
     * @param {?} classObj
     * @return {?}
     */
    ReactComponent.prototype.setClass = function (classObj) {
        for (var /** @type {?} */ key in classObj) {
            if (classObj[key]) {
                this.render.addClass(this.ele.nativeElement, key);
            }
            else {
                this.render.removeClass(this.ele.nativeElement, key);
            }
        }
    };
    /**
     * @param {?} styleObj
     * @return {?}
     */
    ReactComponent.prototype.setStyle = function (styleObj) {
        for (var /** @type {?} */ key in styleObj) {
            this.render.setStyle(this.ele.nativeElement, key, styleObj[key]);
        }
    };
    /**
     * @param {?} styles
     * @return {?}
     */
    ReactComponent.prototype.removeStyle = function (styles) {
        var _this = this;
        if (type(styles) == 'array' && type(styles) !== 'undefined') {
            styles.map(function (key) {
                _this.render.removeStyle(_this.ele.nativeElement, key);
            });
        }
        else {
            this.render.removeStyle(this.ele.nativeElement, styles);
        }
    };
    /**
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    ReactComponent.prototype.addStyle = function (name, value) {
        this.render.setStyle(this.ele.nativeElement, name, value);
    };
    /**
     * @param {?} name
     * @return {?}
     */
    ReactComponent.prototype.addClass = function (name) {
        this.render.addClass(this.ele.nativeElement, name);
    };
    /**
     * @param {?} classObj
     * @return {?}
     */
    ReactComponent.prototype.setAttribute = function (classObj) {
        for (var /** @type {?} */ key in classObj) {
            if (type(classObj[key]) === 'boolean') {
                if (classObj[key]) {
                    this.render.setAttribute(this.ele.nativeElement, key, 'true');
                }
                else {
                    this.render.removeAttribute(this.ele.nativeElement, key);
                }
            }
            else {
                this.render.setAttribute(this.ele.nativeElement, key, classObj[key]);
            }
        }
    };
    /**
     * @param {?} name
     * @return {?}
     */
    ReactComponent.prototype.removeClass = function (name) {
        this.render.removeClass(this.ele.nativeElement, name);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    ReactComponent.prototype._stateChanges = function (changes) {
        this.onStateChange(changes);
        this.stateChange.emit(this.state);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    ReactComponent.prototype._propsChanges = function (changes) {
        this.onPropsChange(changes);
        this.propsChange.emit(this.props);
    };
    return ReactComponent;
}());
ReactComponent.propDecorators = {
    "state": [{ type: core.Input },],
    "props": [{ type: core.Input },],
    "stateChange": [{ type: core.Output },],
    "propsChange": [{ type: core.Output },],
    "onClick": [{ type: core.Output },],
    "_onClick": [{ type: core.HostListener, args: ['click', ['$event'],] },],
    "_id": [{ type: core.HostBinding, args: ['attr.id',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */
var NgEachOfContext = (function () {
    /**
     * @param {?} $implicit
     * @param {?} ngForOf
     * @param {?} key
     */
    function NgEachOfContext($implicit, ngForOf, key) {
        this.$implicit = $implicit;
        this.ngForOf = ngForOf;
        this.key = key;
    }
    return NgEachOfContext;
}());
var NgEachOf = (function () {
    /**
     * @param {?} _viewContainer
     * @param {?} _template
     * @param {?} _differs
     */
    function NgEachOf(_viewContainer, _template, _differs) {
        this._viewContainer = _viewContainer;
        this._template = _template;
        this._differs = _differs;
        this._differ = null;
    }
    Object.defineProperty(NgEachOf.prototype, "ngForTemplate", {
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            if (value) {
                this._template = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    NgEachOf.prototype.ngOnChanges = function (changes) {
        if ('ngEachOf' in changes) {
            var /** @type {?} */ value = changes['ngEachOf'].currentValue;
            if (!this._differ && value) {
                this._differ = this._differs.find(value).create();
            }
        }
    };
    /**
     * @return {?}
     */
    NgEachOf.prototype.ngDoCheck = function () {
        if (this._differ) {
            var /** @type {?} */ changes = this._differ.diff(this.ngEachOf);
            if (changes)
                this._applyChanges(changes);
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NgEachOf.prototype._applyChanges = function (changes) {
        var _this = this;
        var /** @type {?} */ insertTuples = [];
        changes.forEachItem(function (item) {
            if (item.previousValue == null) {
                var /** @type {?} */ view = _this._viewContainer.createEmbeddedView(_this._template, new NgEachOfContext(item.currentValue, _this.ngEachOf, item.key), parseInt(item.key, 16));
                var /** @type {?} */ tuple = new RecordViewTuple(item, view, parseInt(item.key, 16));
                insertTuples.push(tuple);
            }
            else if (item.currentValue == null) {
                _this._viewContainer.remove(parseInt(item.key, 16));
            }
            else {
                var /** @type {?} */ view = ((_this._viewContainer.get(parseInt(item.key, 16))));
                _this._viewContainer.move(view, parseInt(item.key, 16));
                var /** @type {?} */ tuple = new RecordViewTuple(item.currentValue, /** @type {?} */ (view), parseInt(item.key, 16));
                insertTuples.push(tuple);
            }
        });
    };
    return NgEachOf;
}());
NgEachOf.decorators = [
    { type: core.Directive, args: [{ selector: '[ngEach][ngEachOf]' },] },
];
/** @nocollapse */
NgEachOf.ctorParameters = function () {
    return [
        { type: core.ViewContainerRef, },
        { type: core.TemplateRef, },
        { type: core.KeyValueDiffers, },
    ];
};
NgEachOf.propDecorators = {
    "ngEachOf": [{ type: core.Input },],
    "ngForTemplate": [{ type: core.Input },],
};
var RecordViewTuple = (function () {
    /**
     * @param {?} record
     * @param {?} view
     * @param {?} index
     */
    function RecordViewTuple(record, view, index) {
        this.record = record;
        this.view = view;
        this.index = index;
    }
    return RecordViewTuple;
}());
var InputCellPreviewComponent = (function (_super) {
    __extends(InputCellPreviewComponent, _super);
    /**
     * @param {?} _differs
     * @param {?} _ele
     * @param {?} _render
     */
    function InputCellPreviewComponent(_differs, _ele, _render) {
        return _super.call(this, _differs, _ele, _render) || this;
    }
    /**
     * @return {?}
     */
    InputCellPreviewComponent.prototype.mouseover = function () {
        this.props.focus = true;
    };
    /**
     * @return {?}
     */
    InputCellPreviewComponent.prototype.mouseleave = function () {
        this.props.focus = false;
    };
    /**
     * @return {?}
     */
    InputCellPreviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        merge.merge(fromEvent.fromEvent(this.ele.nativeElement, 'change'), fromEvent.fromEvent(this.ele.nativeElement, 'propertychange'), fromEvent.fromEvent(this.ele.nativeElement, 'keyup'), fromEvent.fromEvent(this.ele.nativeElement, 'keydown')).distinctUntilChanged()
            .debounceTime(300)
            .subscribe(function (res) {
            _this.props.value = _this.input.nativeElement.value;
            _this.setProps(Object.assign({}, _this.props, { value: _this.input.nativeElement.value }));
        });
    };
    /**
     * @return {?}
     */
    InputCellPreviewComponent.prototype.onPropsChange = function () { };
    /**
     * @return {?}
     */
    InputCellPreviewComponent.prototype.onStateChange = function () { };
    return InputCellPreviewComponent;
}(ReactComponent));
InputCellPreviewComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'input-cell-preview',
                template: "\n      <div class=\"weui-cell\" [class.focus]=\"props.focus\">\n          <div class=\"weui-cell__hd\" [ngStyle]=\"props.style\">\n              <label class=\"weui-label\">{{props.title}}</label>\n          </div>\n          <div class=\"weui-cell__bd\">\n              <input class=\"weui-input\" #input [attr.type]=\"props.type\" [attr.placeholder]=\"props.placeholder\">\n          </div>\n      </div>\n      <ng-container *ngComponent=\"props.children;preview: true;\"></ng-container>\n    ",
                styles: ["\n      .focus {\n        opacity: .7; }\n    "]
            },] },
];
/**
 * @nocollapse
 */
InputCellPreviewComponent.ctorParameters = function () { return [
    { type: core.KeyValueDiffers, },
    { type: core.ElementRef, },
    { type: core.Renderer2, },
]; };
InputCellPreviewComponent.propDecorators = {
    'input': [{ type: core.ViewChild, args: ['input',] },],
    'mouseover': [{ type: core.HostListener, args: ['mouseenter', ['$event'],] },],
    'mouseleave': [{ type: core.HostListener, args: ['mouseleave', ['$event'],] },],
};
var InputCellSettingComponent = (function (_super) {
    __extends(InputCellSettingComponent, _super);
    /**
     * @param {?} _differs
     * @param {?} _ele
     * @param {?} _render
     */
    function InputCellSettingComponent(_differs, _ele, _render) {
        return _super.call(this, _differs, _ele, _render) || this;
    }
    /**
     * @return {?}
     */
    InputCellSettingComponent.prototype.mouseover = function () {
        this.props.focus = true;
    };
    /**
     * @return {?}
     */
    InputCellSettingComponent.prototype.mouseleave = function () {
        this.props.focus = false;
    };
    /**
     * @return {?}
     */
    InputCellSettingComponent.prototype.onPropsChange = function () { };
    /**
     * @return {?}
     */
    InputCellSettingComponent.prototype.onStateChange = function () {
        console.log(this.state);
    };
    return InputCellSettingComponent;
}(ReactComponent));
InputCellSettingComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'input-cell-setting',
                template: "\n      <div class=\"weui-cells weui-cells_form\" [class.focus]=\"props.focus\">\n          <div class=\"weui-cell\">\n              <div class=\"weui-cell__hd\">\n                  <label class=\"weui-label\">\u6807\u9898</label>\n              </div>\n              <div class=\"weui-cell__bd\">\n                  <input class=\"weui-input\" type=\"text\" placeholder=\"title\" [(ngModel)]=\"props.title\">\n              </div>\n          </div>\n          <div class=\"weui-cell\">\n              <div class=\"weui-cell__hd\">\n                  <label class=\"weui-label\">\u5B57\u6BB5</label>\n              </div>\n              <div class=\"weui-cell__bd\">\n                  <input class=\"weui-input\" type=\"text\" placeholder=\"name\" [(ngModel)]=\"props.name\">\n              </div>\n          </div>\n\n          <div class=\"weui-cell\">\n              <div class=\"weui-cell__hd\">\n                  <label class=\"weui-label\">\u63D0\u793A\u8F93\u5165</label>\n              </div>\n              <div class=\"weui-cell__bd\">\n                  <input class=\"weui-input\" type=\"text\" placeholder=\"placeholder\" [(ngModel)]=\"props.placeholder\">\n              </div>\n          </div>\n      </div>\n\n      <ng-container *ngComponent=\"props.children;preview: false;\"></ng-container>\n    ",
                styles: ["\n      .focus {\n        opacity: .9;\n        border: 1px dashed red; }\n    "]
            },] },
];
/**
 * @nocollapse
 */
InputCellSettingComponent.ctorParameters = function () { return [
    { type: core.KeyValueDiffers, },
    { type: core.ElementRef, },
    { type: core.Renderer2, },
]; };
InputCellSettingComponent.propDecorators = {
    'mouseover': [{ type: core.HostListener, args: ['mouseenter', ['$event'],] },],
    'mouseleave': [{ type: core.HostListener, args: ['mouseleave', ['$event'],] },],
};
var both = {
    'input-cell': {
        setting: InputCellSettingComponent,
        view: InputCellPreviewComponent
    }
};
var preview = {
    'input-cell': InputCellPreviewComponent
};
var entrys = [
    InputCellPreviewComponent,
    InputCellSettingComponent
];

exports.both = both;
exports.preview = preview;
exports.entrys = entrys;
exports.ɵa = InputCellPreviewComponent;
exports.ɵb = InputCellSettingComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=weui-input-cell.umd.js.map
