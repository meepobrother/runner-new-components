import { Directive, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Directive({
  selector: '[meepoIsEnd]'
})
export class IsEndDirective implements OnInit {
  @Output() doEnd: EventEmitter<any> = new EventEmitter();
  @Input() isLast: boolean;

  constructor() { }

  ngOnInit(): void {
    if (this.isLast) {
      this.doEnd.emit('end');
    }
  }
}

