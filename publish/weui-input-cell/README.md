```ts
import { InputCellPreviewComponent } from './input-cell-preview/input-cell-preview';
import { InputCellSettingComponent } from './input-cell-setting/input-cell-setting';
export declare const both: {
    'input-cell': {
        setting: typeof InputCellSettingComponent;
        view: typeof InputCellPreviewComponent;
    };
};
export declare const preview: {
    'input-cell': typeof InputCellPreviewComponent;
};
export declare const entrys: typeof InputCellSettingComponent[];
export { InputCellProps } from './input-cell-preview/input-cell-preview';
```