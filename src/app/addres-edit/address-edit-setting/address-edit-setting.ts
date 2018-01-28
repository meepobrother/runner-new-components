import { Component, OnInit, KeyValueDiffers, ElementRef, Renderer2 } from '@angular/core';
import { ReactComponent } from 'ng-react-component';

@Component({
    selector: 'address-edit-setting',
    templateUrl: './address-edit-setting.html',
    styleUrls: ['./address-edit-setting.scss']
})
export class AddressEditSettingComponent extends ReactComponent<any, any> implements OnInit {
    constructor(
        _differs: KeyValueDiffers,
        _ele: ElementRef,
        _render: Renderer2
    ) {
        super(_differs, _ele, _render);
    }

    ngOnInit() { }

    onPropsChange() { }

    onStateChange() {
        console.log(this.state);
    }
}
