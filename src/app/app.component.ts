import { Component, OnInit, OnChanges } from '@angular/core';
import { AddressEditPropsDefault } from './addres-edit/address-edit-preview/address-edit-preview';
import { DesignLibraryService } from 'meepo-idesign-share';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  props: any = new AddressEditPropsDefault();
  state: any = {};

  constructor(
    public library: DesignLibraryService
  ) { }
}
