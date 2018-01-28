# 使用

```html
<div class="main">
    <div class="weui-cells m0">
        <ng-container *ngComponent="props.children;preview: true;"></ng-container>
    </div>
</div>

```

```ts
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
```

```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { entrys as addressEditEntrys } from './addres-edit/public_api';
import { entrys as InputEntrys, both as inputCell } from './weui-input-cell/public_api';
import { entrys as weuiButtonEntrys, both as weuiButton } from './weui-button/public_api';
import { entrys as weuiBadgeEntrys, both as weuiBadge } from './weui-badge/public_api';
import { entrys as weuiFlexEntrys, both as weuiFlex } from './weui-flex/public_api';
import { entrys as weuiGridsEntrys, both as weuiGrids } from './weui-grids/public_api';
import { entrys as locpickerEntrys, both as locpickerGrids } from './weui-locpicker/public_api';
import { entrys as lgeolocationEntrys, both as lgeolocationGrids } from './weui-geolocation/public_api';
import { entrys as imageEntrys, both as imageGrids } from './weui-image/public_api';
import { entrys as swiperEntrys, both as swiperGrids } from './weui-swiper/public_api';


import { IDesignComponentModule, DESIGN_LIBRARYS } from 'meepo-idesign-share';

@NgModule({
  declarations: [
    AppComponent,
    ...addressEditEntrys,
    ...InputEntrys,
    ...weuiButtonEntrys,
    ...weuiBadgeEntrys,
    ...weuiFlexEntrys,
    ...weuiGridsEntrys,
    ...locpickerEntrys,
    ...lgeolocationEntrys,
    ...imageEntrys,
    ...swiperEntrys
  ],
  imports: [
    BrowserModule,
    FormsModule,
    IDesignComponentModule.forRoot([
      inputCell,
      weuiButton,
      weuiBadge,
      weuiFlex,
      weuiGrids,
      locpickerGrids,
      lgeolocationGrids,
      imageGrids,
      swiperGrids
    ]),
  ],
  providers: [],
  entryComponents: [
    ...InputEntrys,
    ...addressEditEntrys,
    ...weuiButtonEntrys,
    ...weuiBadgeEntrys,
    ...weuiFlexEntrys,
    ...weuiGridsEntrys,
    ...locpickerEntrys,
    ...lgeolocationEntrys,
    ...imageEntrys,
    ...swiperEntrys
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

```