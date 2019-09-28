import { Directive, ElementRef, HostListener  } from '@angular/core';

/*
 * Directive to change background on the table row hover. Added the directive as appHighlight in trainee-overview.
 */
@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) {
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('gray');
  }

  @HostListener('mouseleave') onMouseLeave() {
     this.highlight(null);
  }

  private highlight(color: string) {
      this.el.nativeElement.style.backgroundColor = color;
  }


}
