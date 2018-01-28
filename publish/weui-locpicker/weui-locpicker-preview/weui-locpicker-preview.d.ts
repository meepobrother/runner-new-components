import { KeyValueDiffers, ElementRef, Renderer2, OnInit, AfterViewInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ReactComponent } from 'ng-react-component';
export interface WeuiLocpickerProps {
    children: any[];
    height: number;
    id: string;
    loc: any;
    search: number;
    policy: number;
    mapdraggable: number;
    zoom: number;
    radius: number;
    total: number;
    key: string;
}
export declare class WeuiLocpickerPreviewComponent extends ReactComponent<WeuiLocpickerProps, any> implements OnInit, AfterViewInit {
    private dom;
    src: SafeResourceUrl;
    constructor(_differs: KeyValueDiffers, _ele: ElementRef, _render: Renderer2, dom: DomSanitizer);
    updateSrc(): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    onPropsChange(): void;
    onStateChange(): void;
}
