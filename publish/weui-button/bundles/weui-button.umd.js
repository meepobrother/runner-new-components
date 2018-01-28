(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs/add/operator/share')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', 'rxjs/add/operator/share'], factory) :
	(factory((global['weui-button'] = {}),global.ng.core));
}(this, (function (exports,core) { 'use strict';

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
var WeuiButtonPreviewComponent = (function (_super) {
    __extends(WeuiButtonPreviewComponent, _super);
    /**
     * @param {?} _differs
     * @param {?} _ele
     * @param {?} _render
     */
    function WeuiButtonPreviewComponent(_differs, _ele, _render) {
        return _super.call(this, _differs, _ele, _render) || this;
    }
    /**
     * @return {?}
     */
    WeuiButtonPreviewComponent.prototype.mouseover = function () {
        this.setProps(Object.assign({}, this.props, { focus: true }));
        console.log('mouseenter');
    };
    /**
     * @return {?}
     */
    WeuiButtonPreviewComponent.prototype.mouseleave = function () {
        this.setProps(Object.assign({}, this.props, { focus: false }));
    };
    /**
     * @return {?}
     */
    WeuiButtonPreviewComponent.prototype.onPropsChange = function () { };
    /**
     * @return {?}
     */
    WeuiButtonPreviewComponent.prototype.onStateChange = function () {
        console.log(this.state);
    };
    /**
     * @return {?}
     */
    WeuiButtonPreviewComponent.prototype._click = function () {
        var _this = this;
        this.setProps(Object.assign({}, this.props, { loading: true }));
        setTimeout(function () {
            _this.setProps(Object.assign({}, _this.props, { loading: false }));
        }, this.props.timeLen * 1000 || 2000);
    };
    return WeuiButtonPreviewComponent;
}(ReactComponent));
WeuiButtonPreviewComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'weui-button-preview',
                template: "\n      <a href=\"javascript:;\" [class.focus]=\"props.focus\" (click)=\"_click()\" class=\"weui-btn weui-btn_primary\" [class.weui-btn_loading]=\"props.loading\">\n          <i class=\"weui-loading\" *ngIf=\"props.loading\"></i>\n          {{props.title}}\n          <ng-container *ngComponent=\"props.children;preview: true;\"></ng-container>\n      </a>\n    ",
                styles: ["\n      .focus {\n        opacity: .7; }\n    "]
            },] },
];
/**
 * @nocollapse
 */
WeuiButtonPreviewComponent.ctorParameters = function () { return [
    { type: core.KeyValueDiffers, },
    { type: core.ElementRef, },
    { type: core.Renderer2, },
]; };
WeuiButtonPreviewComponent.propDecorators = {
    'mouseover': [{ type: core.HostListener, args: ['mouseenter', ['$event'],] },],
    'mouseleave': [{ type: core.HostListener, args: ['mouseleave', ['$event'],] },],
};
var WeuiButtonSettingComponent = (function (_super) {
    __extends(WeuiButtonSettingComponent, _super);
    /**
     * @param {?} _differs
     * @param {?} _ele
     * @param {?} _render
     */
    function WeuiButtonSettingComponent(_differs, _ele, _render) {
        return _super.call(this, _differs, _ele, _render) || this;
    }
    /**
     * @return {?}
     */
    WeuiButtonSettingComponent.prototype.mouseover = function () {
        this.props.focus = true;
    };
    /**
     * @return {?}
     */
    WeuiButtonSettingComponent.prototype.mouseleave = function () {
        this.props.focus = false;
    };
    /**
     * @return {?}
     */
    WeuiButtonSettingComponent.prototype.onPropsChange = function () { };
    /**
     * @return {?}
     */
    WeuiButtonSettingComponent.prototype.onStateChange = function () {
        console.log(this.state);
    };
    return WeuiButtonSettingComponent;
}(ReactComponent));
WeuiButtonSettingComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'weui-button-setting',
                template: "\n      <div class=\"weui-cells weui-cells_form\" [class.focus]=\"props.focus\">\n          <div class=\"weui-cell\">\n              <div class=\"weui-cell__hd\">\n                  <label class=\"weui-label\">\u6309\u94AE\u6807\u9898</label>\n              </div>\n              <div class=\"weui-cell__bd\">\n                  <input class=\"weui-input\" type=\"text\" placeholder=\"title\" [(ngModel)]=\"props.title\">\n              </div>\n          </div>\n          <div class=\"weui-cell\">\n              <div class=\"weui-cell__hd\">\n                  <label class=\"weui-label\">\u9ED8\u8BA4\u65F6\u957F</label>\n              </div>\n              <div class=\"weui-cell__bd\">\n                  <input class=\"weui-input\" type=\"number\" placeholder=\"\u52A0\u8F7D\u9ED8\u8BA4\u65F6\u957F(/\u79D2)\" [(ngModel)]=\"props.timeLen\">\n              </div>\n          </div>\n      </div>\n\n      <ng-container *ngComponent=\"props.children;preview: false;\"></ng-container>\n    ",
                styles: ["\n      .focus {\n        opacity: .9;\n        border: 1px dashed red; }\n\n      :host {\n        display: block; }\n    "]
            },] },
];
/**
 * @nocollapse
 */
WeuiButtonSettingComponent.ctorParameters = function () { return [
    { type: core.KeyValueDiffers, },
    { type: core.ElementRef, },
    { type: core.Renderer2, },
]; };
WeuiButtonSettingComponent.propDecorators = {
    'mouseover': [{ type: core.HostListener, args: ['mouseenter', ['$event'],] },],
    'mouseleave': [{ type: core.HostListener, args: ['mouseleave', ['$event'],] },],
};
var both = {
    'weui-button': {
        setting: WeuiButtonSettingComponent,
        view: WeuiButtonPreviewComponent
    }
};
var preview = {
    'weui-button': WeuiButtonPreviewComponent
};
var entrys = [
    WeuiButtonSettingComponent,
    WeuiButtonPreviewComponent
];

exports.both = both;
exports.preview = preview;
exports.entrys = entrys;
exports.ɵa = WeuiButtonPreviewComponent;
exports.ɵb = WeuiButtonSettingComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=weui-button.umd.js.map
