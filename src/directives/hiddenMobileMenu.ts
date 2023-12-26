import { Directive, HostListener, Injectable, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Directive({
  selector:"[hiddenMobileMenu]",
  standalone:true
})

@Injectable()
class HiddenMobileMenu {

    private document = inject(DOCUMENT);

    @HostListener('click')
    ngOnInit() {
        console.log('blablabla')
        console.log('je veux observer cela ',this.document.getElementsByClassName('is_clicked'))
     }


 }