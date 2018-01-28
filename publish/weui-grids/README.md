```ts
import { WeuiGridPreviewComponent } from './weui-grid-preview/weui-grid-preview';
import { WeuiGridSettingComponent } from './weui-grid-setting/weui-grid-setting';
import { WeuiGridsPreviewComponent } from './weui-grids-preview/weui-grids-preview';
import { WeuiGridsSettingComponent } from './weui-grids-setting/weui-grids-setting';
export declare const both: {
    'weui-grid': {
        setting: typeof WeuiGridSettingComponent;
        view: typeof WeuiGridPreviewComponent;
    };
    'weui-grids': {
        setting: typeof WeuiGridsSettingComponent;
        view: typeof WeuiGridsPreviewComponent;
    };
};
export declare const preview: {
    'weui-grid': typeof WeuiGridPreviewComponent;
    'weui-grids': typeof WeuiGridsPreviewComponent;
};
export declare const entrys: typeof WeuiGridSettingComponent[];
export { WeuiGridProps } from './weui-grid-preview/weui-grid-preview';
export { WeuiGridsProps } from './weui-grids-preview/weui-grids-preview';
```