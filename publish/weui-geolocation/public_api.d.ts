import { WeuiGeolocationPreviewComponent } from './weui-geolocation-preview/weui-geolocation-preview';
import { WeuiGeolocationSettingComponent } from './weui-geolocation-setting/weui-geolocation-setting';
export declare const both: {
    'weui-geolocation': {
        setting: typeof WeuiGeolocationSettingComponent;
        view: typeof WeuiGeolocationPreviewComponent;
    };
};
export declare const preview: {
    'weui-geolocation': typeof WeuiGeolocationPreviewComponent;
};
export declare const entrys: typeof WeuiGeolocationSettingComponent[];
export { WeuiGeolocationProps } from './weui-geolocation-preview/weui-geolocation-preview';
