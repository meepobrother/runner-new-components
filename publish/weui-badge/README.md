```ts
import { WeuiBadgePreviewComponent } from './weui-badge-preview/weui-badge-preview';
import { WeuiBadgeSettingComponent } from './weui-badge-setting/weui-badge-setting';
export declare const both: {
    'weui-badge': {
        setting: typeof WeuiBadgeSettingComponent;
        view: typeof WeuiBadgePreviewComponent;
    };
};
export declare const preview: {
    'weui-badge': typeof WeuiBadgePreviewComponent;
};
export declare const entrys: typeof WeuiBadgeSettingComponent[];
export { WeuiBadgeProps } from './weui-badge-preview/weui-badge-preview';
```