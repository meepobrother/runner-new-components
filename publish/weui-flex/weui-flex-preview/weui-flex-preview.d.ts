import { KeyValueDiffers, ElementRef, Renderer2 } from '@angular/core';
import { ReactComponent } from 'ng-react-component';
export interface WeuiFlexProps {
    children: any[];
}
export declare class WeuiFlexPreviewComponent extends ReactComponent<WeuiFlexProps, any> {
    _flex: boolean;
    constructor(_differs: KeyValueDiffers, _ele: ElementRef, _render: Renderer2);
    onPropsChange(): void;
    onStateChange(): void;
}
