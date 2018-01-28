import { KeyValueDiffers, ElementRef, Renderer2, OnInit } from '@angular/core';
import { ReactComponent } from 'ng-react-component';
export interface WeuiGridProps {
    width: number;
    children: any[];
}
export declare class WeuiGridPreviewComponent extends ReactComponent<WeuiGridProps, any> implements OnInit {
    _grid: boolean;
    _width: number;
    constructor(_differs: KeyValueDiffers, _ele: ElementRef, _render: Renderer2);
    ngOnInit(): void;
    onPropsChange(): void;
    onStateChange(): void;
}
