import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appVisibility]'
})
export class VisibilityDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:scroll', ['$event'])
  checkVisibility() {
    const element = this.el.nativeElement;
    const rect = element.getBoundingClientRect();

    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      // Element is fully visible
      this.renderer.addClass(element, 'visible');
    } else {
      // Element is not fully visible
      this.renderer.removeClass(element, 'visible');
    }
  }
}