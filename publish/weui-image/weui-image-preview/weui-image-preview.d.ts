import { KeyValueDiffers, ElementRef, Renderer2 } from '@angular/core';
import { ReactComponent } from 'ng-react-component';
export interface WeuiImageProps {
    src: string;
    children: any[];
    style: {
        [key: string]: string;
    };
    width: number;
    height: number;
    'border-radius': number;
}
export declare class WeuiImagePreviewComponent extends ReactComponent<WeuiImageProps, any> {
    constructor(_differs: KeyValueDiffers, _ele: ElementRef, _render: Renderer2);
    onPropsChange(): void;
    onStateChange(): void;
}
