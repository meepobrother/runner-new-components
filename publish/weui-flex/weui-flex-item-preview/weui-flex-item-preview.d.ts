import { KeyValueDiffers, ElementRef, Renderer2 } from '@angular/core';
import { ReactComponent } from 'ng-react-component';
export interface WeuiFlexItemProps {
    isItem: boolean;
    children: any[];
}
export declare class WeuiFlexItemPreviewComponent extends ReactComponent<WeuiFlexItemProps, any> {
    _item: boolean;
    constructor(_differs: KeyValueDiffers, _ele: ElementRef, _render: Renderer2);
    onPropsChange(): void;
    onStateChange(): void;
}
