import { KeyValueDiffers, ElementRef, Renderer2 } from '@angular/core';
import { ReactComponent } from 'ng-react-component';
export interface WeuiButtonProps {
    title: string;
    children: any[];
    focus: boolean;
    loading: boolean;
    timeLen: number;
}
export declare class WeuiButtonPreviewComponent extends ReactComponent<WeuiButtonProps, any> {
    mouseover(): void;
    mouseleave(): void;
    constructor(_differs: KeyValueDiffers, _ele: ElementRef, _render: Renderer2);
    onPropsChange(): void;
    onStateChange(): void;
    _click(): void;
}
