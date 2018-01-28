```ts
import { WeuiGeolocationPreviewComponent } from './weui-geolocation-preview/weui-geolocation-preview';
import { WeuiGeolocationSettingComponent } from './weui-geolocation-setting/weui-geolocation-setting';

export const both = {
    'weui-geolocation': {
        setting: WeuiGeolocationSettingComponent,
        view: WeuiGeolocationPreviewComponent
    }
};

export const preview = {
    'weui-geolocation': WeuiGeolocationPreviewComponent
};

export const entrys = [
    WeuiGeolocationSettingComponent,
    WeuiGeolocationPreviewComponent
];

export { WeuiGeolocationProps } from './weui-geolocation-preview/weui-geolocation-preview';

```