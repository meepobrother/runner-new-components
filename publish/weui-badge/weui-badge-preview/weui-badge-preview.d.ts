import { KeyValueDiffers, ElementRef, Renderer2 } from '@angular/core';
import { ReactComponent } from 'ng-react-component';
export interface WeuiBadgeProps {
    text: number | string;
    style: {
        [key: string]: string;
    };
    focus: boolean;
    children: any[];
    dot: boolean;
}
export declare class WeuiBadgePreviewComponent extends ReactComponent<WeuiBadgeProps, any> {
    mouseover(): void;
    mouseleave(): void;
    constructor(_differs: KeyValueDiffers, _ele: ElementRef, _render: Renderer2);
    onPropsChange(): void;
    onStateChange(): void;
}
