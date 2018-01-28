import { Component, OnInit, KeyValueDiffers, ElementRef, Renderer2 } from '@angular/core';
import { ReactComponent } from 'ng-react-component';
import { DesignLibraryProp } from 'meepo-idesign-share';
function guid() {
    function S4() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }
    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}
export class DesignLibrary {
    constructor(
        public name: string,
        public title: string,
        public props: any,
        public children: DesignLibraryProp[] = [],
        public state: any = {}
    ) { }
}

export interface AddressInput {
    title: string;
    type: string;
    name: string;
    style?: { [key: string]: string };
    click?: Function;
    placeholder?: string;
}

export interface AddressInputGroup {
    title: string;
    items: AddressInput[];
}
export interface AddressEditProps {
    children: DesignLibraryProp[];
    groups: AddressInputGroup[];
}
export class AddressEditPropsDefault implements AddressEditProps {
    groups: AddressInputGroup[] = [];
    children: DesignLibraryProp[] = [
        new DesignLibrary('input-cell', '姓名', {
            title: '姓名',
            type: 'text',
            name: 'realname',
            placeholder: '请输入您的姓名',
            focus: false,
            children: []
        }),
        new DesignLibrary('input-cell', '手机号', {
            title: '手机号',
            type: 'text',
            name: 'realname',
            placeholder: '请输入您的手机号',
            focus: false,
            children: []
        }),
        new DesignLibrary('input-cell', '手机号', {
            title: '详细地址',
            type: 'text',
            name: 'realname',
            placeholder: '补充详细地址(如门牌号/楼层号等)',
            focus: false,
            children: []
        }),
        new DesignLibrary('weui-button', '提交按钮', {
            title: '立即提交',
            focus: false,
            children: [
                new DesignLibrary('weui-badge', '数字提醒', {
                    text: 0,
                    focus: false,
                    children: [],
                    dot: true
                })
            ]
        }),
        new DesignLibrary('weui-flex', 'flex', {
            title: 'flex',
            focus: false,
            children: [
                new DesignLibrary('weui-flex-item', 'flex-item', {
                    isItem: true,
                    children: [
                        new DesignLibrary('weui-badge', '数字提醒', {
                            text: 0,
                            focus: false,
                            children: [],
                            dot: true
                        })
                    ]
                }),
                new DesignLibrary('weui-flex-item', 'flex-item', {
                    isItem: true,
                    children: [
                        new DesignLibrary('weui-badge', '数字提醒', {
                            text: 0,
                            focus: false,
                            children: [],
                            dot: true
                        })
                    ]
                })
            ]
        }),
        new DesignLibrary('weui-grids', 'weui-grids', {
            num: 4,
            children: [
                new DesignLibrary('weui-grid', 'weui-grid', {
                    width: (1 / 4) * 100
                }),
                new DesignLibrary('weui-grid', 'weui-grid', {
                    width: (1 / 4) * 100
                }),
                new DesignLibrary('weui-grid', 'weui-grid', {
                    width: (1 / 4) * 100
                }),
                new DesignLibrary('weui-grid', 'weui-grid', {
                    width: (1 / 4) * 100
                }),
                new DesignLibrary('weui-grid', 'weui-grid', {
                    width: (1 / 4) * 100
                }),
                new DesignLibrary('weui-grid', 'weui-grid', {
                    width: (1 / 4) * 100
                }),
                new DesignLibrary('weui-grid', 'weui-grid', {
                    width: (1 / 4) * 100
                }),
                new DesignLibrary('weui-grid', 'weui-grid', {
                    width: (1 / 4) * 100
                })
            ]
        }),
        new DesignLibrary('weui-locpicker', 'weui-locpicker', {
            children: [],
            height: 300,
            id: guid(),
            key: 'LHRBZ-4XCWF-FGRJ5-NKTKW-GAQIS-LEBZG'
        }),
        new DesignLibrary('weui-geolocation', 'weui-geolocation', {
            children: []
        }),
        new DesignLibrary('weui-image', 'weui-image', {
            children: [],
            src: './assets/01.png',
            height: 100,
            width: 100,
            'border-radius': '50'
        })
    ];
}

@Component({
    selector: 'address-edit-preview',
    templateUrl: './address-edit-preview.html',
    styleUrls: ['./address-edit-preview.scss']
})
export class AddressEditPreviewComponent extends ReactComponent<AddressEditProps, any> implements OnInit {
    constructor(
        _differs: KeyValueDiffers,
        _ele: ElementRef,
        _render: Renderer2
    ) {
        super(_differs, _ele, _render);
        this.setProps(new AddressEditPropsDefault());
    }

    ngOnInit() {
        console.log(this.props);
    }

    onPropsChange() { }

    onStateChange() { }
}
