import { WeuiButtonPreviewComponent } from './weui-button-preview/weui-button-preview';
import { WeuiButtonSettingComponent } from './weui-button-setting/weui-button-setting';
export declare const both: {
    'weui-button': {
        setting: typeof WeuiButtonSettingComponent;
        view: typeof WeuiButtonPreviewComponent;
    };
};
export declare const preview: {
    'weui-button': typeof WeuiButtonPreviewComponent;
};
export declare const entrys: typeof WeuiButtonSettingComponent[];
export { WeuiButtonProps } from './weui-button-preview/weui-button-preview';
