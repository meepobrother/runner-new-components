import { Component, Directive, ElementRef, EventEmitter, HostListener, Input, KeyValueDiffers, Output, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';
import 'rxjs/add/operator/share';

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
var ReactComponent = /** @class */ (function () {
    /**
     * @param {?} _differs
     * @param {?} ele
     * @param {?} render
     */
    function ReactComponent(_differs, ele, render) {
        this._differs = _differs;
        this.ele = ele;
        this.render = render;
        this.stateChange = new EventEmitter();
        this.propsChange = new EventEmitter();
        this.onClick = new EventEmitter();
        this.guid = guid();
        this.props = /** @type {?} */ ({
            children: []
        });
        this.state = /** @type {?} */ ({});
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
    "state": [{ type: Input },],
    "props": [{ type: Input },],
    "stateChange": [{ type: Output },],
    "propsChange": [{ type: Output },],
    "onClick": [{ type: Output },],
    "_onClick": [{ type: HostListener, args: ['click', ['$event'],] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */
var NgEachOfContext = /** @class */ (function () {
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
var NgEachOf = /** @class */ (function () {
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
    { type: Directive, args: [{ selector: '[ngEach][ngEachOf]' },] },
];
/** @nocollapse */
NgEachOf.ctorParameters = function () { return [
    { type: ViewContainerRef, },
    { type: TemplateRef, },
    { type: KeyValueDiffers, },
]; };
NgEachOf.propDecorators = {
    "ngEachOf": [{ type: Input },],
    "ngForTemplate": [{ type: Input },],
};
var RecordViewTuple = /** @class */ (function () {
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

class WeuiButtonPreviewComponent extends ReactComponent {
    /**
     * @param {?} _differs
     * @param {?} _ele
     * @param {?} _render
     */
    constructor(_differs, _ele, _render) {
        super(_differs, _ele, _render);
    }
    /**
     * @return {?}
     */
    mouseover() {
        this.setProps(Object.assign({}, this.props, { focus: true }));
        console.log('mouseenter');
    }
    /**
     * @return {?}
     */
    mouseleave() {
        this.setProps(Object.assign({}, this.props, { focus: false }));
    }
    /**
     * @return {?}
     */
    onPropsChange() { }
    /**
     * @return {?}
     */
    onStateChange() {
        console.log(this.state);
    }
    /**
     * @return {?}
     */
    _click() {
        this.setProps(Object.assign({}, this.props, { loading: true }));
        setTimeout(() => {
            this.setProps(Object.assign({}, this.props, { loading: false }));
        }, this.props.timeLen * 1000 || 2000);
    }
}
WeuiButtonPreviewComponent.decorators = [
    { type: Component, args: [{
                selector: 'weui-button-preview',
                template: `
      <a href="javascript:;" [class.focus]="props.focus" (click)="_click()" class="weui-btn weui-btn_primary" [class.weui-btn_loading]="props.loading">
          <i class="weui-loading" *ngIf="props.loading"></i>
          {{props.title}}
          <ng-container *ngComponent="props.children;preview: true;"></ng-container>
      </a>
    `,
                styles: [`
      .focus {
        opacity: .7; }
    `]
            },] },
];
/**
 * @nocollapse
 */
WeuiButtonPreviewComponent.ctorParameters = () => [
    { type: KeyValueDiffers, },
    { type: ElementRef, },
    { type: Renderer2, },
];
WeuiButtonPreviewComponent.propDecorators = {
    'mouseover': [{ type: HostListener, args: ['mouseenter', ['$event'],] },],
    'mouseleave': [{ type: HostListener, args: ['mouseleave', ['$event'],] },],
};

class WeuiButtonSettingComponent extends ReactComponent {
    /**
     * @param {?} _differs
     * @param {?} _ele
     * @param {?} _render
     */
    constructor(_differs, _ele, _render) {
        super(_differs, _ele, _render);
    }
    /**
     * @return {?}
     */
    mouseover() {
        this.props.focus = true;
    }
    /**
     * @return {?}
     */
    mouseleave() {
        this.props.focus = false;
    }
    /**
     * @return {?}
     */
    onPropsChange() { }
    /**
     * @return {?}
     */
    onStateChange() {
        console.log(this.state);
    }
}
WeuiButtonSettingComponent.decorators = [
    { type: Component, args: [{
                selector: 'weui-button-setting',
                template: `
      <div class="weui-cells weui-cells_form" [class.focus]="props.focus">
          <div class="weui-cell">
              <div class="weui-cell__hd">
                  <label class="weui-label">按钮标题</label>
              </div>
              <div class="weui-cell__bd">
                  <input class="weui-input" type="text" placeholder="title" [(ngModel)]="props.title">
              </div>
          </div>
          <div class="weui-cell">
              <div class="weui-cell__hd">
                  <label class="weui-label">默认时长</label>
              </div>
              <div class="weui-cell__bd">
                  <input class="weui-input" type="number" placeholder="加载默认时长(/秒)" [(ngModel)]="props.timeLen">
              </div>
          </div>
      </div>

      <ng-container *ngComponent="props.children;preview: false;"></ng-container>
    `,
                styles: [`
      .focus {
        opacity: .9;
        border: 1px dashed red; }

      :host {
        display: block; }
    `]
            },] },
];
/**
 * @nocollapse
 */
WeuiButtonSettingComponent.ctorParameters = () => [
    { type: KeyValueDiffers, },
    { type: ElementRef, },
    { type: Renderer2, },
];
WeuiButtonSettingComponent.propDecorators = {
    'mouseover': [{ type: HostListener, args: ['mouseenter', ['$event'],] },],
    'mouseleave': [{ type: HostListener, args: ['mouseleave', ['$event'],] },],
};

const both = {
    'weui-button': {
        setting: WeuiButtonSettingComponent,
        view: WeuiButtonPreviewComponent
    }
};
const preview = {
    'weui-button': WeuiButtonPreviewComponent
};
const entrys = [
    WeuiButtonSettingComponent,
    WeuiButtonPreviewComponent
];

/**
 * Generated bundle index. Do not edit.
 */

export { both, preview, entrys, WeuiButtonPreviewComponent as ɵa, WeuiButtonSettingComponent as ɵb };
//# sourceMappingURL=weui-button.js.map
