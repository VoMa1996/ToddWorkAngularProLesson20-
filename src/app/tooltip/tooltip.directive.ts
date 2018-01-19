import { Directive, Input, ViewContainerRef, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[tooltip]',
  exportAs: 'tooltip'
})
export class TooltipDirective implements OnInit {

  tooltipElement = document.createElement('div');
  visible = false;

  @Input() 
  set tooltip(value) {
    this.tooltipElement.textContent = value;
  }

  hide() {
    this.tooltipElement.classList.remove('tooltip--active');
    this.visible = false;
    console.log("test");
  }

  show() {
    this.tooltipElement.classList.add('tooltip--active');
    this.visible = true;
  }

  constructor(
    private element: ElementRef
  ) { }

  ngOnInit() {
    this.tooltipElement.className = 'tooltip';
    this.element.nativeElement.appendChild(this.tooltipElement);
    this.element.nativeElement.classList.add('tooltip-container'); 
  }



}
