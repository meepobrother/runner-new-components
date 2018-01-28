import { KeyValueDiffers, ElementRef, Renderer2 } from '@angular/core';
import { ReactComponent } from 'ng-react-component';
export interface WeuiSwiperItemProps {
    src: string;
    children: any[];
}
export declare class WeuiSwiperItemPreviewComponent extends ReactComponent<WeuiSwiperItemProps, any> {
    constructor(_differs: KeyValueDiffers, _ele: ElementRef, _render: Renderer2);
    onPropsChange(): void;
    onStateChange(): void;
}
