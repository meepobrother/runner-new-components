import { OnInit, KeyValueDiffers, ElementRef, Renderer2 } from '@angular/core';
import { ReactComponent } from 'ng-react-component';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/debounceTime';
export interface InputCellProps {
    title?: string;
    name?: string;
    placeholder?: string;
    type?: string;
    children: any[];
    style?: {
        [k: string]: string;
    };
    focus?: boolean;
    value?: string;
}
export declare class InputCellPreviewComponent extends ReactComponent<InputCellProps, any> implements OnInit {
    input: ElementRef;
    mouseover(): void;
    mouseleave(): void;
    constructor(_differs: KeyValueDiffers, _ele: ElementRef, _render: Renderer2);
    ngOnInit(): void;
    onPropsChange(): void;
    onStateChange(): void;
}
