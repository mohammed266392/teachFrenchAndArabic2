import { Component, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-savoir-faire',
  templateUrl: './savoir-faire.component.html',
  styleUrls: ['./savoir-faire.component.css']
})
export class SavoirFaireComponent implements OnInit {
  visible : boolean = false;

  constructor(private el: ElementRef)  {}
  
  ngAfterViewInit() {
      console.log('1 ')
      const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
              console.log('2 : ',entry)
          this.visible=entry.isIntersecting;
          });
      });
      
      observer.observe(this.el.nativeElement);
  }
  ngOnInit(): void {
  }

}
