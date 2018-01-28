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
