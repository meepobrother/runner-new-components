(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs/add/operator/share')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', 'rxjs/add/operator/share'], factory) :
	(factory((global['weui-flex'] = {}),global.ng.core));
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
var WeuiFlexPreviewComponent = (function (_super) {
    __extends(WeuiFlexPreviewComponent, _super);
    /**
     * @param {?} _differs
     * @param {?} _ele
     * @param {?} _render
     */
    function WeuiFlexPreviewComponent(_differs, _ele, _render) {
        var _this = _super.call(this, _differs, _ele, _render) || this;
        _this._flex = true;
        return _this;
    }
    /**
     * @return {?}
     */
    WeuiFlexPreviewComponent.prototype.onPropsChange = function () { };
    /**
     * @return {?}
     */
    WeuiFlexPreviewComponent.prototype.onStateChange = function () {
        console.log(this.state);
    };
    return WeuiFlexPreviewComponent;
}(ReactComponent));
WeuiFlexPreviewComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'weui-flex-preview',
                template: "\n      <ng-container *ngComponent=\"props.children;preview: true;\"></ng-container>\n    ",
                styles: ["\n\n    "]
            },] },
];
/**
 * @nocollapse
 */
WeuiFlexPreviewComponent.ctorParameters = function () { return [
    { type: core.KeyValueDiffers, },
    { type: core.ElementRef, },
    { type: core.Renderer2, },
]; };
WeuiFlexPreviewComponent.propDecorators = {
    '_flex': [{ type: core.HostBinding, args: ['class.weui-flex',] },],
};
var WeuiFlexSettingComponent = (function (_super) {
    __extends(WeuiFlexSettingComponent, _super);
    /**
     * @param {?} _differs
     * @param {?} _ele
     * @param {?} _render
     */
    function WeuiFlexSettingComponent(_differs, _ele, _render) {
        return _super.call(this, _differs, _ele, _render) || this;
    }
    /**
     * @return {?}
     */
    WeuiFlexSettingComponent.prototype.onPropsChange = function () { };
    /**
     * @return {?}
     */
    WeuiFlexSettingComponent.prototype.onStateChange = function () {
        console.log(this.state);
    };
    return WeuiFlexSettingComponent;
}(ReactComponent));
WeuiFlexSettingComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'weui-flex-setting',
                template: "\n      <ng-container *ngComponent=\"props.children;preview: false;\"></ng-container>\n    ",
                styles: ["\n\n    "]
            },] },
];
/**
 * @nocollapse
 */
WeuiFlexSettingComponent.ctorParameters = function () { return [
    { type: core.KeyValueDiffers, },
    { type: core.ElementRef, },
    { type: core.Renderer2, },
]; };
var WeuiFlexItemPreviewComponent = (function (_super) {
    __extends(WeuiFlexItemPreviewComponent, _super);
    /**
     * @param {?} _differs
     * @param {?} _ele
     * @param {?} _render
     */
    function WeuiFlexItemPreviewComponent(_differs, _ele, _render) {
        var _this = _super.call(this, _differs, _ele, _render) || this;
        _this._item = true;
        return _this;
    }
    /**
     * @return {?}
     */
    WeuiFlexItemPreviewComponent.prototype.onPropsChange = function () { };
    /**
     * @return {?}
     */
    WeuiFlexItemPreviewComponent.prototype.onStateChange = function () {
        console.log(this.state);
    };
    return WeuiFlexItemPreviewComponent;
}(ReactComponent));
WeuiFlexItemPreviewComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'weui-flex-item-preview',
                template: "\n      <ng-container *ngComponent=\"props.children;preview: true;\"></ng-container>\n    ",
                styles: ["\n\n    "]
            },] },
];
/**
 * @nocollapse
 */
WeuiFlexItemPreviewComponent.ctorParameters = function () { return [
    { type: core.KeyValueDiffers, },
    { type: core.ElementRef, },
    { type: core.Renderer2, },
]; };
WeuiFlexItemPreviewComponent.propDecorators = {
    '_item': [{ type: core.HostBinding, args: ['class.weui-flex__item',] },],
};
var WeuiFlexItemSettingComponent = (function (_super) {
    __extends(WeuiFlexItemSettingComponent, _super);
    /**
     * @param {?} _differs
     * @param {?} _ele
     * @param {?} _render
     */
    function WeuiFlexItemSettingComponent(_differs, _ele, _render) {
        return _super.call(this, _differs, _ele, _render) || this;
    }
    /**
     * @return {?}
     */
    WeuiFlexItemSettingComponent.prototype.onPropsChange = function () { };
    /**
     * @return {?}
     */
    WeuiFlexItemSettingComponent.prototype.onStateChange = function () {
        console.log(this.state);
    };
    return WeuiFlexItemSettingComponent;
}(ReactComponent));
WeuiFlexItemSettingComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'weui-flex-item-setting',
                template: "\n      <ng-container *ngComponent=\"props.children;preview: false;\"></ng-container>\n    ",
                styles: ["\n\n    "]
            },] },
];
/**
 * @nocollapse
 */
WeuiFlexItemSettingComponent.ctorParameters = function () { return [
    { type: core.KeyValueDiffers, },
    { type: core.ElementRef, },
    { type: core.Renderer2, },
]; };
var both = {
    'weui-flex': {
        setting: WeuiFlexSettingComponent,
        view: WeuiFlexPreviewComponent
    },
    'weui-flex-item': {
        setting: WeuiFlexItemSettingComponent,
        view: WeuiFlexItemPreviewComponent
    }
};
var preview = {
    'weui-flex': WeuiFlexPreviewComponent,
    'weui-flex-item': WeuiFlexItemPreviewComponent
};
var entrys = [
    WeuiFlexSettingComponent,
    WeuiFlexPreviewComponent,
    WeuiFlexItemSettingComponent,
    WeuiFlexItemPreviewComponent
];

exports.both = both;
exports.preview = preview;
exports.entrys = entrys;
exports.ɵb = WeuiFlexItemPreviewComponent;
exports.ɵd = WeuiFlexItemSettingComponent;
exports.ɵa = WeuiFlexPreviewComponent;
exports.ɵc = WeuiFlexSettingComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=weui-flex.umd.js.map
