import { KeyValueDiffers, ElementRef, Renderer2 } from '@angular/core';
import { ReactComponent } from 'ng-react-component';
export interface WeuiSwiperProps {
    speed: number;
    loop: boolean;
    children: any[];
}
export declare class WeuiSwiperPreviewComponent extends ReactComponent<WeuiSwiperProps, any> {
    constructor(_differs: KeyValueDiffers, _ele: ElementRef, _render: Renderer2);
    onPropsChange(): void;
    onStateChange(): void;
}
