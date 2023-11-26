import { Directive, ElementRef, EventEmitter, Output } from '@angular/core';

@Directive({
  selector: '[appScrollAnimation]'
})
export class ScrollAnimation  {
    @Output() visibilityChange = new EventEmitter<boolean>();

    constructor(private el: ElementRef)  {}
  
    ngAfterViewInit() {
        console.log('1 ')
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                console.log('2 : ',entry)
            this.visibilityChange.emit(entry.isIntersecting);
            });
        });
        
        observer.observe(this.el.nativeElement);
    }
    
}