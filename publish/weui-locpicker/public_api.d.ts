import { WeuiLocpickerPreviewComponent } from './weui-locpicker-preview/weui-locpicker-preview';
import { WeuiLocpickerSettingComponent } from './weui-locpicker-setting/weui-locpicker-setting';
export declare const both: {
    'weui-locpicker': {
        setting: typeof WeuiLocpickerSettingComponent;
        view: typeof WeuiLocpickerPreviewComponent;
    };
};
export declare const preview: {
    'weui-locpicker': typeof WeuiLocpickerPreviewComponent;
};
export declare const entrys: (typeof WeuiLocpickerPreviewComponent | typeof WeuiLocpickerSettingComponent)[];
export { WeuiLocpickerProps } from './weui-locpicker-preview/weui-locpicker-preview';
