import { KeyValueDiffers, ElementRef, Renderer2 } from '@angular/core';
import { ReactComponent } from 'ng-react-component';
export interface WeuiGridsProps {
    children: any[];
    num: number;
    scroll: boolean;
}
export declare class WeuiGridsPreviewComponent extends ReactComponent<WeuiGridsProps, any> {
    _grid: boolean;
    constructor(_differs: KeyValueDiffers, _ele: ElementRef, _render: Renderer2);
    onPropsChange(): void;
    onStateChange(): void;
}
