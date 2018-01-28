import { KeyValueDiffers, ElementRef, Renderer2, OnInit } from '@angular/core';
import { ReactComponent } from 'ng-react-component';
export interface WeuiGeolocationProps {
    loc: any[];
    children: any[];
}
export declare class WeuiGeolocationPreviewComponent extends ReactComponent<WeuiGeolocationProps, any> implements OnInit {
    constructor(_differs: KeyValueDiffers, _ele: ElementRef, _render: Renderer2);
    ngOnInit(): void;
    onPropsChange(): void;
    onStateChange(): void;
}
