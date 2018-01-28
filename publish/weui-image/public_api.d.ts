import { WeuiImagePreviewComponent } from './weui-image-preview/weui-image-preview';
import { WeuiImageSettingComponent } from './weui-image-setting/weui-image-setting';
export declare const both: {
    'weui-image': {
        setting: typeof WeuiImageSettingComponent;
        view: typeof WeuiImagePreviewComponent;
    };
};
export declare const preview: {
    'weui-image': typeof WeuiImagePreviewComponent;
};
export declare const entrys: typeof WeuiImageSettingComponent[];
export { WeuiImageProps } from './weui-image-preview/weui-image-preview';
