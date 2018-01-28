```ts
import { WeuiFlexPreviewComponent } from './weui-flex-preview/weui-flex-preview';
import { WeuiFlexSettingComponent } from './weui-flex-setting/weui-flex-setting';
import { WeuiFlexItemPreviewComponent } from './weui-flex-item-preview/weui-flex-item-preview';
import { WeuiFlexItemSettingComponent } from './weui-flex-item-setting/weui-flex-item-setting';
export declare const both: {
    'weui-flex': {
        setting: typeof WeuiFlexSettingComponent;
        view: typeof WeuiFlexPreviewComponent;
    };
    'weui-flex-item': {
        setting: typeof WeuiFlexItemSettingComponent;
        view: typeof WeuiFlexItemPreviewComponent;
    };
};
export declare const preview: {
    'weui-flex': typeof WeuiFlexPreviewComponent;
};
export declare const entrys: typeof WeuiFlexSettingComponent[];
export { WeuiFlexProps } from './weui-flex-preview/weui-flex-preview';
export { WeuiFlexItemProps } from './weui-flex-item-preview/weui-flex-item-preview';
```