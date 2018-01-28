```ts
import { WeuiLocpickerPreviewComponent } from './weui-locpicker-preview/weui-locpicker-preview';
import { WeuiLocpickerSettingComponent } from './weui-locpicker-setting/weui-locpicker-setting';

export const both = {
    'weui-locpicker': {
        setting: WeuiLocpickerSettingComponent,
        view: WeuiLocpickerPreviewComponent
    }
};

export const preview = {
    'weui-locpicker': WeuiLocpickerPreviewComponent
};

export const entrys = [
    WeuiLocpickerSettingComponent,
    WeuiLocpickerPreviewComponent
];

export { WeuiLocpickerProps } from './weui-locpicker-preview/weui-locpicker-preview';

```